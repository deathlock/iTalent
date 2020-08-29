import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                        <span className={this.state.active !== this.state.links.length - 1 ? "active" : ""} >Right arrow</span>
                        <ul>
                            {this.state.links.map((el, key) => {
                                return (
                                    <li key={key} 
                                        className={this.state.active == key ? "active" : ""} 
                                        onClick={() => this.props.updateActiveLink(key)}><Link to={el}>{el}</Link></li>
                                );
                            })}
                        </ul>
                        <span className={this.state.active !== 0 ? "active" : ""}>Left arrow</span>
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
    updateActiveLink: () => {}
}

export default Navigator;