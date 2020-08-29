import React from 'react';

const tData = [
    {
        image: "image",
        name: "Lucy Williams",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 1",
        name: "Lucy Williams 1",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 2",
        name: "Lucy Williams 2",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 3",
        name: "Lucy Williams 3",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 4",
        name: "Lucy Williams 4",
        testimonial: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 5",
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

    render() {
        return (
            <div>
                <h1>Why do people praise about <b>iTalent?</b></h1>
                <div>
                    <div>
                        <p>{this.state.data.testimonial}</p>
                        <span><b>{this.state.data.name}</b></span>
                        <span>{this.state.data.designation}</span>
                    </div>
                    <div>
                        {
                            tData.map((el, key) => {
                                return <span className={this.state.active == key ? "active" : ""} key={key} onClick={() => this.changeTestimonial(key)} onMouseOver={() => this.changeTestimonial(key)}>{el.image}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;