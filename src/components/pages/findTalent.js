import React from 'react';
import { withRouter } from 'react-router-dom';
import addImage from '../../assets/images/add.png';
import trashImage from '../../assets/images/trash.png';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import _ from 'lodash';
import localforage from 'localforage';


class FindTalent extends React.Component {
    get initialState() {
        return [
            {
                value: "",
                name: "talent-1",
                count: 1,
                search_key: "Designation",
                Exp: "1-3"
            }
        ]
    }

    state = {
        inputCount: this.initialState
    }

    inputTotal = 1;

    addInputs = () => {
        if(this.inputTotal >= 4) return;
        this.inputTotal++;
        const inputObj = { value: "", name: `talent-${this.inputTotal}`, count: 1, search_key: "Designation", Exp: "1-3" }
        this.setState({ inputCount: [...this.state.inputCount, inputObj] });
    }

    removeInputs = (key) => {
        this.inputTotal--;
        this.setState({
            inputCount: this.state.inputCount.filter((_, i) => i !== key)
        });
    }

    onInputChange = (ev, index) => {
        const data = this.state.inputCount;
        data[index].value = ev.target.value;
        this.setState({
            inputCount: data,
            serverError: ""
        })
    }

    onSelectChange = (ev, index) => {
        const data = this.state.inputCount;
        data[index].count = parseInt(ev.target.value);
        this.setState({
            inputCount: data
        })
    }

    onExperienceChange =(ev, index) => {
        const data = this.state.inputCount;
        data[index].Exp = ev.target.value;
        this.setState({
            inputCount: data
        })
    }

    resetForm = () => {
        this.setState({
            inputCount: this.initialState
        });
    }

    searchTalent = () => {
        if (_.isEqual((this.state.inputCount).sort(), (this.initialState).sort())) {
            this.setState({
                serverError: "Atleast one member required!!"
            });
        } else {
            let _this = this;
            localforage.setItem('find-talent', this.state.inputCount, function (err) {
                _this.props.history.push("/team");
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={`container-fluid header-background-color`} style={{ position: 'relative' }}>
                    <div className="container">
                        <Header />
                        <section className="section-1">
                            <h1 className="text-center main_heading">Find Your Talented Team</h1>
                            <p className="text-center main_sub_heading">We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important initiatives.</p>
                            <div>
                                <form className="searh_form">
                                    <div className="text-center text-danger error_msg"><span className="server-error">{this.state.serverError}</span></div>
                                    <div className="form-group">
                                        <div className="row search_form_div">
                                            <div className="col-12 col-md-6 col-lg-5">
                                                <span>Designation</span>
                                            </div>
                                            <div className="col-12 col-md-2 col-lg-1 padding0" style={{left: "-8px"}}>
                                                <span>Members</span>
                                            </div>
                                            <div className="col-12 col-md-2 col-lg-4 padding0" style={{marginLeft: "25px"}}>
                                                <span>Experience (years)</span>
                                            </div>
                                        </div>
                                        {
                                            this.state.inputCount.map((el, key) => {
                                                return (
                                                    <div className="row search_form_div" key={key}>
                                                        <div className="col-12 col-md-7 col-lg-5">
                                                            <input type="text" className="form-control" onChange={(ev) => { this.onInputChange(ev, key) }} name={el.name} value={el.value} />
                                                        </div>
                                                        <div className="col-12 col-md-2 col-lg-1 padding0">
                                                            <select value={el.count} onChange={(ev) => { this.onSelectChange(ev, key) }} name={"select-" + el.name} className="custom-select">
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                                <option value={5}>5</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12 col-md-2 col-lg-2 padding0" style={{marginLeft: "40px"}}>
                                                            <select value={el.Exp} onChange={(ev) => { this.onExperienceChange(ev, key) }} name={"select-experience-" + el.name} className="custom-select">
                                                                <option value="1-3">1-3</option>
                                                                <option value="3-5">3-5</option>
                                                                <option value="5-8">5-8</option>
                                                                <option value="8+">8+</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12 col-md-3 col-lg-2">
                                                            {key < 3 && <div className="icon_background display-inline" onClick={this.addInputs} ><img src={addImage} alt="addImage" className="img-fluid icons_width" /></div>}
                                                            {key !== 0 && <div className="icon_background display-inline" onClick={() => this.removeInputs(key)}><img src={trashImage} alt="trashImage" className="img-fluid icons_width" /></div>}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="text-center testonomial_btns_div">
                                            <input type="button" name="reset" onClick={this.resetForm} value="Reset" className="btn btn-primary reset_btn" />
                                            <input type="button" onClick={this.searchTalent} style={{ margin: "0 10px" }} name="find" value="Find" className="btn btn-primary btn-orange-color my-2 my-sm-0" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(FindTalent);