import React from 'react';
import BGimage from '../../assets/images/image.png';
import { withRouter } from 'react-router-dom';

//import IBarChart from '../common/chart/iBarChart';

class Home extends React.Component {
    getStarted = () => {
        this.props.history.push("/find-talent");
    }

    render() {
        return (
            <React.Fragment>
                <div className="shape"></div>
                <div className="row ">
                    <div className="col-12 col-xl-5 col-lg-5 col-md-5">
                        <div className="section_details_padding">
                            <div className="looking-for-a-project">Looking for a part-time or project based talent?</div>
                            <div className="work-with-the-best-freelance">Work with the best freelance talent from around the world on our secure,
                            flexible and cost-effective platform.</div>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-orange-color my-2 my-sm-0 get_started" onClick={this.getStarted} type="submit">Get Started</button>
                        </div>
                    </div>
                    <div className="col-12 col-xl-7 col-lg-7 col-md-7">
                        <div className="section_outer_div">
                            <div className="section_right_image">
                                <img src={BGimage} alt="bg" className="img-fluid" />
                            </div>
                            <div className="chart_image">
                                {/* <img src ="images/chart.png" className="img-fluid" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Home);