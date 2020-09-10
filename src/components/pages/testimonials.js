import React from 'react';
import commaImg from '../../assets/images/comma.png';
import oneImage from '../../assets/images/01.png';
import twoImage from '../../assets/images/02.png';
import threeImage from '../../assets/images/03.png';
import fourImage from '../../assets/images/04.png';
import fiveImage from '../../assets/images/05.png';
import sixImage from '../../assets/images/06.png';
import LeftArrow from '../../assets/images/left-arrow.png';
import RightArrowHighlight from '../../assets/images/right-arrow-highlight.png';
import LeftArrowHighlight from '../../assets/images/left-arrow-highlight.png';
import RightArrow from '../../assets/images/right-arrow.png';

const tData = [
    {
        image: oneImage,
        name: "Lucy Williams",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: twoImage,
        name: "Lucy Williams 1",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: threeImage,
        name: "Lucy Williams 2",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: fourImage,
        name: "Lucy Williams 3",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: fiveImage,
        name: "Lucy Williams 4",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: sixImage,
        name: "Lucy Williams 5",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    }

]
class Testimonials extends React.Component {
    state = {
        active: 0,
        data: tData[0]
    }

    changeTestimonial = (key) => {
        this.setState({
            active: key,
            data: tData[key]
        });
    }

    leftArrowFn = () => {
        if (this.state.active > 0) {
            this.setState({ active: this.state.active - 1, data: tData[this.state.active - 1] })
        }
    }

    rightArrowFn = () => {
        if (this.state.active !== tData.length - 1) {
            this.setState({ active: this.state.active + 1, data: tData[this.state.active + 1] })
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            if (this.state.active !== tData.length - 1) {
                this.setState({ active: this.state.active + 1, data: tData[this.state.active + 1] })
            } else {
                this.setState({ active: 0, data: tData[0] })
            }
        }, 5000)
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center testonomial_heading">Why do people praise about <span className="red-color">iTalent?</span>
                </h1>
                <div className="row ">
                    <div className="col-12 col-md-6 testonomial_left_pannel">
                        <div className="comma_img_div">
                            <img src={commaImg} alt="comma" className="img-fluid comma_img" />
                        </div>
                        <p className="testonimal_left_description">
                            {this.state.data.testimonial}
                        </p>
                        <h4 className="testonimal_sub_heading">
                            {this.state.data.name}
                        </h4>
                        <div className="testonimal_sub_description">{this.state.data.designation}</div>
                    </div>
                    <div className="col-12 col-md-6 testimonial-image-container">
                        <img src={this.state.data.image} alt="testimonial" className="img-fluid testimonial-image" />
                    </div>
                </div>
                <div className="row">
                    <ul className="list-inline verticle-slider text-center">
                        <li className="list-inline-item" onClick={this.leftArrowFn}><a><img src={this.state.active > 0 ? LeftArrowHighlight : LeftArrow} alt="left-arrow" className="img-fluid slider_img" /></a></li>
                        {
                            tData.map((e, key) => {
                                return <li className={`list-inline-item ${this.state.active === key ? "active" : ""}`} key={key} onClick={() => this.changeTestimonial(key)} onMouseEnter={() => this.changeTestimonial(key)} ></li>
                            })
                        }
                        <li className="list-inline-item" onClick={this.rightArrowFn}><a><img src={this.state.active < tData.length - 1 ? RightArrowHighlight : RightArrow} alt="right-arrow" className="img-fluid slider_img" /></a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Testimonials;