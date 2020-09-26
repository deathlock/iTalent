import React from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL, API_HEADERS } from '../../utils/api';
import axios from 'axios';
import { validateEmail } from '../../utils/helpers';
import maleImage from '../../assets/images/male-red-120-x-120.png';
import femaleImage from '../../assets/images/female-red-120-x-120.png';
import starImage from '../../assets/images/star.png';
import LeftArrow from '../../assets/images/left-arrow.png';
import RightArrowHighlight from '../../assets/images/right-arrow-highlight.png';
import LeftArrowHighlight from '../../assets/images/left-arrow-highlight.png';
import RightArrow from '../../assets/images/right-arrow.png';
import localforage from 'localforage';
import _ from 'lodash';
import Modal from 'simple-react-modal';
import SkillBar from 'react-skillbars';

const TabArray = [
    "Team 1", "Team 2", "Team 3", "Team 4", "Team 5"
];

let totalPage = 0;
let tempFrom = 0;
let tempTo = 0;
class Team extends React.Component {
    state = {
        activeTab: 0,
        data: [],
        query: [],
        activePage: 1,
        from: 0,
        to: 4,
        showModal: false,
        showContactModal: false,
        skills: [],
        talentName: "",
        name: "",
        companyName: "",
        email: "",
        isValidCompanyName: false,
        isValidName: false,
        isValidEmail: false,
        nameError: "",
        emailError: "",
        companyNameError: "",
        showSuccessMessage: ""
    }

    async componentDidMount() {
        let hasdata = await localforage.getItem('find-talent');
        if (hasdata) {
            this.setState({
                query: hasdata
            })
        } else {
            return this.props.history.push("/find-talent")
        }

        let _this = this;
        axios.post(API_URL + "mrs/v1/api", { "param": this.state.query }
            , {
                headers: API_HEADERS
            })
            .then((response) => {
                if (response.data) {
                    console.log("check data", response.data)
                    if (_.isArray(response.data)) {
                        _this.setState({
                            data: response.data
                        })
                    } else if (_.isObject(response.data)) {
                        _this.setState({
                            data: [response.data]
                        })
                    } else {
                        console.log("Server error", response.data.data)
                    }
                } else {
                    console.log("Server error", response.data.data)
                }

            })
            .catch((error) => {
                console.log("Error", error.message);
            })
    }

    slideLeft = () => {
        if (this.state.activePage > 1) {
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
        if (this.state.activePage < totalPage) {
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
        if (key === this.state.activePage) return;
        if (key === 1) {
            return this.setState({
                activePage: key,
                from: 0,
                to: 4
            })
        }
        if (key > this.state.activePage) {
            let activePage = key;
            let from = 0;
            let to = 4;
            for (let i = 0; i < key - 1; i++) {
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
            for (let i = 0; i < key - 1; i++) {
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

    showSkillsModal = (el) => {
        const skills = [];
        el[`Primary Skills`].split(',').map((element) => {
            if (element === "") return;
            return skills.push(
                {
                    "type": element,
                    "level": Math.floor(Math.random() * (85 - 60 + 1) + 60)
                }
            );
        });

        el[`Secondary Skills`].split(',').map((element) => {
            if (element === "") return;
            return skills.push(
                {
                    "type": element,
                    "level": Math.floor(Math.random() * (50 - 20 + 1) + 20)
                }
            );
        })
        this.setState({
            skills,
            talentName: el.Name,
            showModal: true
        })
    }

    continueTeam = () => {
        this.setState({
            showContactModal: true
        })
    }

    onNameChange = (ev, isDirect = false) => {
        const name = isDirect ? this.state.name : ev.target.value;
        let nameError = "";
        const isValidName = name !== "" ? true : false;
        if (!isValidName) {
            nameError = "Name required."
        }
        this.setState({ name, isValidName, nameError });
    }

    onCompanyNameChange = (ev, isDirect = false) => {
        const companyName = isDirect ? this.state.companyName : ev.target.value;
        let companyNameError = "";
        const isValidCompanyName = companyName !== "" ? true : false;
        if (!isValidCompanyName) {
            companyNameError = "Company Name required."
        }
        this.setState({ companyName, isValidCompanyName, companyNameError });
    }

    onEmailChange = (ev, isDirect = false) => {
        const email = isDirect ? this.state.email : ev.target.value;
        const isValidEmail = validateEmail(email);
        let emailError = "";
        if (!isValidEmail) {
            emailError = "Invalid email."
        }
        this.setState({ email, emailError, isValidEmail });
    }

    onContact = () => {
        let _this = this;
        if (this.state.isValidName && this.state.isValidCompanyName && this.state.isValidEmail) {
            axios.post(API_URL + "contact/v1/api", {
                "candidate_detail": this.state.data[this.state.activeTab][this.state.query[this.state.activeTab]["value"]],
                "employer_detail": {
                    "Name": this.state.name,
                    "Email": this.state.email,
                    "Company": this.state.companyName
                }
            }, {
                headers: API_HEADERS
            })
                .then((response) => {
                    if (response.data.status) {
                        this.setState({
                            showSuccessMessage: response.data.data,
                            showContactModal: false
                        })
                    } else {
                        this.setState({
                            serverError: response.data.data,
                            showContactModal: false
                        })
                    }
                })
                .catch((error) => {
                    this.setState({
                        serverError: error.message,
                        showContactModal: false
                    })
                })
        } else {
            this.onEmailChange({}, true);
            this.onNameChange({}, true);
            this.onCompanyNameChange({}, true);
        }
    }

    render() {
        const _this = this;
        const colors = {
            "bar": "#ff6158",
            "title": {
                "text": "#fff",
                "background": "#ff6158"
            }
        }
        let tagCount = true;
        totalPage = !_.isEmpty(this.state.data) && this.state.data[this.state.activeTab] ? this.state.data[this.state.activeTab]["status"] ? Math.floor(((this.state.data[this.state.activeTab][this.state.query[this.state.activeTab]["value"]]).length + 4 - 1) / 4) : 0 : 0;
        return (
            <React.Fragment>
                <Modal show={this.state.showModal}>
                    <div className="skills-modal-body">
                        <div className="col-12">
                            <span onClick={() => this.setState({ showModal: false })} className="modal-close">&times;</span>
                        </div>
                        <div className="col-12">
                            <h6 style={{ marginBottom: "20px", textAlign: "center" }}>{this.state.talentName}</h6>
                            <SkillBar skills={this.state.skills} colors={colors} animationDelay={500} />
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showContactModal}>
                    <div>
                        <div className="col-12">
                            <span onClick={() => this.setState({ showContactModal: false })} className="modal-close">&times;</span>
                        </div>
                        <div className="col-12">
                            <h6 style={{ marginBottom: "20px", textAlign: "center" }}><b>I want to work with {TabArray[this.state.activeTab]}</b></h6>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" onChange={(ev) => { this.onNameChange(ev) }} value={this.state.name} />
                                <span className="error">{this.state.nameError}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="companyname" className="form-label">Company Name</label>
                                <input type="text" className="form-control" name="companyname" onChange={(ev) => { this.onCompanyNameChange(ev) }} value={this.state.companyName} />
                                <span className="error">{this.state.companyNameError}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" onChange={(ev) => { this.onEmailChange(ev) }} value={this.state.email} />
                                <span className="error">{this.state.emailError}</span>
                            </div>
                            <div className="btn_div">
                                <button onClick={this.onContact} type="button" className="btn btn-login float-right register_button">Submit</button>
                            </div>
                        </div>
                    </div>
                </Modal>
                <h1 className="main_box_heading">Meet Talent in Our Network</h1>
                <div>
                    <ul className="nav justify-content-center menu_content">
                        {
                            TabArray.map((el, key) => {
                                if (!this.state.data[key]) return;
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
                        (!_.isEmpty(this.state.data) && this.state.data[this.state.activeTab]) ? this.state.data[this.state.activeTab]["status"] ? (this.state.data[this.state.activeTab][this.state.query[this.state.activeTab]["value"]]).slice(this.state.from, this.state.to).map((el, key) => {
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
                                                    if(pKey > 1) return tagCount = false;
                                                    return element !== "" ? <span key={pKey}>{element}</span> : "";
                                                })}
                                                {el[`Secondary Skills`].split(',').map((element, pKey) => {
                                                    if(tagCount) {
                                                        return element !== "" ? <span key={pKey}>{element}</span> : "";
                                                    }
                                                    return;
                                                })}
                                            </div>
                                        </div>
                                        <div className="custom-column-footer"><button className="btn btn-lg details_btn" onClick={() => this.showSkillsModal(el)}>Details</button></div>

                                    </div>
                                </div>
                            )
                        }) : "" : ""
                    }
                </div>
                <div>
                    {
                        totalPage > 1 &&
                        <ul className="list-inline verticle-slider text-center">
                            <li className="list-inline-item" onClick={_this.state.activePage !== 1 ? this.slideLeft : () => { }}><a><img src={_this.state.activePage !== 1 ? LeftArrowHighlight : LeftArrow} alt="left-arrow" className="img-fluid slider_img" /></a></li>
                            {
                                Array.from(Array(totalPage), (x, index) => index + 1).map(keyIn => {
                                    return <li key={keyIn} onClick={() => { _this.changeActive(keyIn) }} className={`list-inline-item ${keyIn === _this.state.activePage ? "active" : ""}`}></li>
                                })
                            }
                            <li className="list-inline-item" onClick={_this.state.activePage < totalPage ? this.slideRight : () => { }}><a><img src={_this.state.activePage < totalPage ? RightArrowHighlight : RightArrow} alt="right-arrow" className="img-fluid slider_img" /></a></li>
                        </ul>
                    }
                </div>
                {
                    this.state.showSuccessMessage === "" &&
                    <React.Fragment>
                        <div className="text-center Do-you-want-to-join-experts-Dont-wait">Want to work with this Amazing talents?</div>
                        <div className="text-center"><button onClick={this.continueTeam} className="become_an_expert btn btn-primary btn-orange-color my-2 my-sm-0" type="button">Yes!!</button></div>
                    </React.Fragment>
                }
                {
                    this.state.showSuccessMessage !== "" &&
                    <div className="row">
                        <span style={{ color: "green", display: "block", margin: "20px auto" }}>{this.state.showSuccessMessage}</span>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default withRouter(Team);