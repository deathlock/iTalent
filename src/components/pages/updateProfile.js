import React from 'react';
import localforage from 'localforage';
import  {withRouter} from 'react-router-dom';
import { API_URL, API_HEADERS } from '../../utils/api';
import axios from 'axios';
import ProgressBar from 'react-percent-bar';

class UpdateProfile extends React.Component {
    state = {
        profilePer: 0,
        user: {},
        messageError: "",
        messageSuccess: ""
    }

    async componentDidMount() {
        let profilePer = await localforage.getItem("completePercentage");
        let user = await localforage.getItem("user");
        if (profilePer) {
            this.setState({
                profilePer
            });
        }
        if (user) {
            this.setState({
                user
            });
        }
    }

    onSubmit = () => {
        const _this = this;
        if (this.state.user.Name === "" || this.state.user.Nickname === "" || this.state.user.Phone === "") {
            this.setState({
                messageError: "Please fill mandatory fields."
            });
            return;
        } else {
            axios.post(API_URL + "reg_update/v1/api", {
                "E_mail": _this.state.user.E_mail,
                "data": _this.state.user
            }, {
                headers: API_HEADERS
            })
                .then((response) => {
                    if (response.data.status) {
                        localforage.setItem('user', response.data.data, function (err) {
                            localforage.setItem('completePercentage', response.data.completePercentage, function (err) {
                            _this.setState({
                                messageSuccess: "You profile is updated.",
                                profilePer: response.data.completePercentage
                            })
                        });
                        });
                    } else {
                        _this.setState({
                            messageError: "Something went wrong."
                        })
                    }
                })
                .catch((error) => {
                    _this.setState({
                        messageError: "Something went wrong."
                    })
                })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            if(this.state.messageError !== "" || this.state.messageSuccess !== "")
            this.setState({
                messageError: "",
                messageSuccess: ""
            })
        }, 10000);
    }

    goHome = () => {
        this.props.history.push("/")
    }

    render() {
        
        return (
            <section>
                <div style={{ paddingBottom: "20px", display: "flex" }} className="container">
                    <h6 style={{ marginRight: "20px" }}>your profile is completed {this.state.profilePer}%</h6>
                    <ProgressBar colorShift={false} borderColor="black" fillColor="#ff6158" percent={this.state.profilePer} />
                </div>
                <div className="container margin0">
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group  col-lg-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" disabled value={this.state.user.E_mail} className="form-control" name="email" />
                            </div>
                            <div className="form-group col-lg-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" disabled onChange={(ev) => this.setState({ user: { ...this.state.user, "Phone": ev.target.value } })} value={this.state.user.Phone} className="form-control" name="phone" />
                            </div>
                            <div className="form-group col-lg-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" style={this.state.user.Name === "" ? { borderColor: "red" } : {}} onChange={(ev) => this.setState({ user: { ...this.state.user, "Name": ev.target.value } })} value={this.state.user.Name} name="name" />
                            </div>
                            <div className="form-group col-lg-3">
                                <label htmlFor="nickname" className="form-label">Nick Name</label>
                                <input type="text" className="form-control" style={this.state.user.Nickname === "" ? { borderColor: "red" } : {}} onChange={(ev) => this.setState({ user: { ...this.state.user, "Nickname": ev.target.value } })} value={this.state.user.Nickname} name="nickname" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group  col-lg-3">
                                <label htmlFor="exp" className="form-label">Experience in years</label>
                                <input type="number" className="form-control" value={this.state.user.Exp} onChange={(ev) => this.setState({ user: { ...this.state.user, "Exp": ev.target.value } })} name="Exp" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="designation" className="form-label">Designation</label>
                                <input type="text" className="form-control" value={this.state.user.Designation} onChange={(ev) => this.setState({ user: { ...this.state.user, "Designation": ev.target.value } })} name="designation" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="primary_skills" className="form-label">Primary Skills</label>
                                <input type="text" className="form-control" value={this.state.user["Primary Skills"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Primary Skills": ev.target.value } })} name="primary_skills" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="secondary_skills" className="form-label">Secondary Skills</label>
                                <input type="text" className="form-control" value={this.state.user["Secondary Skills"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Secondary Skills": ev.target.value } })} name="secondary_skills" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group  col-lg-3">
                                <label htmlFor="education" className="form-label">Education</label>
                                <input type="text" value={this.state.user["Education"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Education": ev.target.value } })} className="form-control" name="education" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="Jpskills" className="form-label">JP Skills</label>
                                <input type="text" className="form-control" value={this.state.user["Jpskills"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Jpskills": ev.target.value } })} name="Jpskills" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="Jplevel" className="form-label">JP Level</label>
                                <input type="text" className="form-control" value={this.state.user["Jplevel"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Jplevel": ev.target.value } })} name="Jplevel" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="Jpcertification" className="form-label">JP Certification</label>
                                <input type="text" className="form-control" value={this.state.user["Jpcertification"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Jpcertification": ev.target.value } })} name="Jpcertification" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group  col-lg-3">
                                <label htmlFor="Per_hr_charge" className="form-label">Per hour charge</label>
                                <input type="number" className="form-control" value={this.state.user["Per_hr_charge"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Per_hr_charge": ev.target.value } })} name="Per_hr_charge" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="english_skill" className="form-label">English Skills</label>
                                <input type="text" className="form-control" value={this.state.user["EngSkills"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "EngSkills": ev.target.value } })} name="english_skill" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="english_level" className="form-label">English level</label>
                                <input type="text" className="form-control" value={this.state.user["EngLevel"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "EngLevel": ev.target.value } })} name="english_level" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="english_certification" className="form-label">English Certification</label>
                                <input type="text" className="form-control" value={this.state.user["EngCertification"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "EngCertification": ev.target.value } })} name="english_certification" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group  col-lg-3">
                                <label htmlFor="DOB" className="form-label">DOB</label>
                                <input type="date" className="form-control" value={this.state.user["DOB"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "DOB": ev.target.value } })} name="DOB" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input type="text" className="form-control" value={this.state.user["Location"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Location": ev.target.value } })} name="location" />
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select className="form-control" value={this.state.user["Gender"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Gender": ev.target.value } })} name="gender" >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-group  col-lg-3">
                                <label htmlFor="ext_platform" className="form-label">External Platform</label>
                                <input type="text" className="form-control" value={this.state.user["Ext_Platform"]} onChange={(ev) => this.setState({ user: { ...this.state.user, "Ext_Platform": ev.target.value } })} name="ext_platform" />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.messageSuccess !== "" &&
                    <div className="row">
                        <span style={{ color: "green", display: "block", margin: "20px auto" }}>{this.state.messageSuccess}</span>
                    </div>
                }
                {
                    this.state.messageError !== "" &&
                    <div className="row">
                        <span style={{ color: "red", display: "block", margin: "20px auto" }}>{this.state.messageError}</span>
                    </div>
                }
                <div class="text-center">
                    <button className="btn btn-secondary btn-grey-color my-2 my-sm-0" onClick={this.goHome}>Cancel</button>
                    <button style={{ margin: "0 10px" }} onClick={this.onSubmit} className="btn btn-primary btn-orange-color my-2 my-sm-0">Submit</button>
                </div>
            </section>
        )
    }
}

export default withRouter(UpdateProfile);