import React from 'react';

import Button from '../atoms/button/button';
//import IBarChart from '../common/chart/iBarChart';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="left-section">
                        <h1>Looking for a part-time or project based talent?</h1>
                        <span>Work with the best freelance talent from around the world on secure,flexible and cost-effective platform.</span>
                        <Button type="button" name="button" value="Get Started" />
                    </div>
                    <div className="right-section">
                        {/* <IBarChart /> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;