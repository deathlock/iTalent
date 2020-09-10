import React from 'react';
import {  withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeftArrow from '../../../assets/images/left-arrow.png';
import RightArrowHighlight from '../../../assets/images/right-arrow-highlight.png';
import LeftArrowHighlight from '../../../assets/images/left-arrow-highlight.png';
import RightArrow from '../../../assets/images/right-arrow.png';

class Navigator extends React.Component {
    state = {
        active: this.props.active,
        links: this.props.links
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            active: nextProps.active,
            links: nextProps.links
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.links.length > 0 &&
                    <React.Fragment>
                        <ul className="list-group list-unstyled slider">
                            <li className={this.state.active !== this.state.links.length - 1 ? "active" : ""}
                            onClick={() => {
                                if(this.state.active === this.state.links.length - 1) return;
                                this.props.updateActiveLink(this.state.active+1);
                                this.props.history.push(this.state.links[this.state.active+1]);
                            }}
                            ><img alt="leftarrow" src={this.state.active !== this.state.links.length - 1 ? RightArrowHighlight : RightArrow} className="img-fluid" /></li>
                            {this.state.links.map((el, key) => {
                                return (
                                    <li key={key}
                                        className={this.state.active === key ? "active" : ""}
                                        onClick={() => {
                                            this.props.updateActiveLink(key);
                                            this.props.history.push(el);
                                        }}></li>
                                );
                            })}
                            <li className={this.state.active !== 0 ? "active" : ""}
                            onClick={() => {
                                if(this.state.active === 0) return;
                                this.props.updateActiveLink(this.state.active-1);
                                this.props.history.push(this.state.links[this.state.active-1]);
                            }}
                            ><img alt="rightarrow" src={this.state.active !== 0 ? LeftArrowHighlight : LeftArrow} className="img-fluid" /></li>
                        </ul>
                    </React.Fragment>
                }
            </div>
        );
    }
}

Navigator.propTypes = {
    active: PropTypes.number,
    links: PropTypes.array,
    updateActiveLink: PropTypes.func
}

Navigator.defaultProps = {
    active: 0,
    links: [],
    updateActiveLink: () => { }
}

export default withRouter(Navigator);