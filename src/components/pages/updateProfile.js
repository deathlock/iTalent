import React from 'react';

class UpdateProfile extends React.Component {
    render() {
        return (
            <section>
                <div className="container margin0">
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group mb-2">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" name="email" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="nickname" className="form-label">Nick Name</label>
                                <input type="text" className="form-control" name="nickname" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group mb-2">
                                <label htmlFor="exp" className="form-label">Experience in years</label>
                                <input type="number" className="form-control" name="exp" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="designation" className="form-label">Designation</label>
                                <input type="text" className="form-control" name="designation" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="primary_skills" className="form-label">Primary Skills</label>
                                <input type="text" className="form-control" name="primary_skills" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="secondary_skills" className="form-label">Secondary Skills</label>
                                <input type="text" className="form-control" name="secondary_skills" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group mb-2">
                                <label htmlFor="education" className="form-label">Education</label>
                                <input type="text" className="form-control" name="education" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="Jpskills" className="form-label">JP Skills</label>
                                <input type="text" className="form-control" name="Jpskills" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="Jplevel" className="form-label">JP Level</label>
                                <input type="text" className="form-control" name="Jplevel" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="Jpcertification" className="form-label">JP Certification</label>
                                <input type="text" className="form-control" name="Jpcertification" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group mb-2">
                                <label htmlFor="Per_hr_charge" className="form-label">Per hour charge</label>
                                <input type="number" className="form-control" name="Per_hr_charge" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="english_skill" className="form-label">English Skills</label>
                                <input type="text" className="form-control" name="english_skill" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="english_level" className="form-label">English level</label>
                                <input type="text" className="form-control" name="english_level" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="english_certification" className="form-label">English Certification</label>
                                <input type="text" className="form-control" name="english_certification" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-inline profile-padding">
                            <div className="form-group mb-2">
                                <label htmlFor="DOB" className="form-label">DOB</label>
                                <input type="date" className="form-control" name="DOB" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input type="text" className="form-control" name="location" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select className="form-control" name="gender" >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="ext_platform" className="form-label">External Platform</label>
                                <input type="text" className="form-control" name="ext_platform" />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-secondary btn-grey-color my-2 my-sm-0">Cancel</button>
                <button style={{ margin: "0 10px" }} className="btn btn-primary btn-orange-color my-2 my-sm-0">Submit</button>
            </section>
        )
    }
}

export default UpdateProfile;