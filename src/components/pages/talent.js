import React from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL, API_HEADERS } from '../../utils/api';
import axios from 'axios';
import maleImage from '../../assets/images/male-red-120-x-120.png';
import femaleImage from '../../assets/images/female-red-120-x-120.png';
import starImage from '../../assets/images/star.png';
import LeftArrow from '../../assets/images/left-arrow.png';
import RightArrowHighlight from '../../assets/images/right-arrow-highlight.png';
import LeftArrowHighlight from '../../assets/images/left-arrow-highlight.png';
import RightArrow from '../../assets/images/right-arrow.png';

const TabArray = [
    "Developer", "Consultant", "QA", "UI"
];

let totalPage = 0;
let tempFrom = 0;
let tempTo = 0;
class Talent extends React.Component {
    state = {
        activeTab: 0,
        data: [],
        activePage: 1,
        from: 0,
        to: 4
    }
    

    componentDidMount() {
        let _this = this;
        axios.post(API_URL + "skill_collection/v1/api", {
            "skills": TabArray
        }, {
            headers: API_HEADERS
        })
            .then((response) => {
                _this.setState({
                    data: response.data
                })
            })
            .catch((error) => {
                console.log("Error", error.message);
            })
    }

    slideLeft = () => {
        if(this.state.activePage > 1) {
            let activePage = this.state.activePage - 1;
            let from = this.state.from - 4;
            let to = this.state.from;
            this.setState({
                activePage,
                from,
                to
            })
        }
    }

    slideRight = () => {    
        if(this.state.activePage < totalPage) {
            let activePage = this.state.activePage + 1;
            let from = this.state.to;
            let to = this.state.to + 4;
            this.setState({
                activePage,
                from,
                to
            })
        }
    }

    changeActive = key => {
        if(key === this.state.activePage) return;
        if(key === 1) {
           return this.setState({
                activePage: key,
                from: 0,
                to: 4
            })
        }
        if(key > this.state.activePage) {
            let activePage = key;
            let from = 0;
            let to = 4;
            for(let i = 0; i < key - 1 ; i++) {
                from += 4;
                to += 4;
            }
            this.setState({
                activePage,
                from,
                to
            })
        } else {
            let activePage = key;
            let from = tempFrom === 0 ? this.state.data[this.state.activeTab].length - 4 : tempFrom;
            let to = tempTo === 0 ? this.state.data[this.state.activeTab].length : tempTo;
            for(let i = 0; i < key - 1 ; i++) {
                from -= 4;
                to -= 4;
            }
            tempFrom = from;
            tempTo = to;
            this.setState({
                activePage,
                from,
                to
            })
        }
    }

    goRegister = () => {
        this.props.history.push("/register");
    }

    render() {
        const _this = this;
        totalPage = this.state.data[this.state.activeTab] ? Math.floor((this.state.data[this.state.activeTab].length + 4 - 1) / 4) : 0;
        return (
            <React.Fragment>
                <h1 className="main_box_heading">Meet Talent in Our Network</h1>
                <div>
                    <ul className="nav justify-content-center menu_content">
                        {
                            TabArray.map((el, key) => {
                                return (
                                    <li className="nav-item" key={key} onClick={() => {
                                        this.setState({
                                            activeTab: key,
                                            activePage: 1,
                                            from: 0,
                                            to: 4
                                        });
                                    }}>
                                        <a href="#" className={`nav-link ${this.state.activeTab === key ? "active" : ""}`}>{el}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="row categories">
                    {
                        this.state.data[this.state.activeTab] && this.state.data[this.state.activeTab].slice(this.state.from, this.state.to).map((el, key) => {
                            return (
                                <div className="col-sm-12 col-md-3 chart-block" key={key} >
                                    <div className="custom-column">
                                        <div className="custom-column-header">
                                            <div className="profile_img">
                                                <img src={el.Gender === "Male" ? maleImage : femaleImage} className="img-fluid" />
                                            </div>
                                            <div className="rating_div">
                                                <div>{el.rating}</div>
                                                <div className="ratings">
                                                    {
                                                        Array.from(Array(el.rating), (x, index) => index + 1).map(keyIn => {
                                                            return (
                                                                <span key={keyIn}><img src={starImage} className="img-fluid" /></span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>


                                        </div>
                                        <div className="custom-column-content">
                                            <div className="card-title">{el.Name}</div>
                                            <p className="card-desc">{el.Designation}</p>
                                            <div className="keywords">
                                                {el[`Primary Skills`].split(',').map((element, pKey) => {
                                                    return element !== "" ? <span key={pKey}>{element}</span> : "";
                                                })}
                                                {el[`Secondary Skills`].split(',').map((element, pKey) => {
                                                    return element !== "" ? <span key={pKey}>{element}</span> : "";
                                                })}
                                            </div>
                                        </div>
                                        <div className="custom-column-footer"><button className="btn btn-lg details_btn">Details</button></div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        totalPage > 0 &&
                        <ul className="list-inline verticle-slider text-center">
                            <li className="list-inline-item" onClick={_this.state.activePage !== 1 ? this.slideLeft : () => {}}><a><img src={_this.state.activePage !== 1 ? LeftArrowHighlight : LeftArrow} alt="left-arrow" className="img-fluid slider_img" /></a></li>
                            {
                                Array.from(Array(totalPage), (x, index) => index + 1).map(keyIn => {
                                    return <li key={keyIn} onClick={() => {_this.changeActive(keyIn)}} className={`list-inline-item ${keyIn === _this.state.activePage ? "active" : ""}`}></li>
                                })
                            }
                            <li className="list-inline-item" onClick={_this.state.activePage < totalPage ? this.slideRight : () => {}}><a><img src={_this.state.activePage < totalPage ? RightArrowHighlight : RightArrow} alt="right-arrow" className="img-fluid slider_img" /></a></li>
                        </ul>
                    }
                </div>
                <div className="text-center Do-you-want-to-join-experts-Dont-wait">Do you want to join experts? Don't wait!</div>
                <div className="text-center"><button onClick={this.goRegister} className="become_an_expert btn btn-primary btn-orange-color my-2 my-sm-0" type="button">Became an Experts</button></div>
            </React.Fragment>
        );
    }
}

export default withRouter(Talent);