import React from 'react';

const tData = [
    {
        image: "image",
        name: "Lucy Williams",
        data: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 1",
        name: "Lucy Williams 1",
        data: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 2",
        name: "Lucy Williams 2",
        data: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 3",
        name: "Lucy Williams 3",
        data: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    }, 
    {
        image: "image 4",
        name: "Lucy Williams 4",
        data: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    },
    {
        image: "image 5",
        name: "Lucy Williams 5",
        data: "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real masterpiece.",
        designation: "Product Manager"
    }

]
class Testimonials extends React.Component {
    state = {
        active: 0
    }

    render() {
        return(
            <div>
                <h1>Why do people praise about <b>iTalent?</b></h1>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default Testimonials;