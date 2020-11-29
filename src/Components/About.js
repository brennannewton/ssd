import React, { Component } from 'react'
import ProfPic from '../img/Profile_Pic.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="conatiner">
                <div className="row abt-row m-0 w-100">
                    <div className="col-10 col-sm-5 mx-auto col-lg-2">
                        <img src={ProfPic} alt="Emma in her glasses" className="img-fluid mx-auto my-4"/>
                    </div>
                    <div className="col-10 col-sm-5 mx-auto col-lg-7 my-auto">
                        <h5 className="info-title">My Story</h5>
                        <p>In 2018, I was diagnosed with bipolar disorder. I had all this manic energy, so I decided to channel it into making new jewelry out of old jewelry. I began searching for discarded beauty in the world and giving it new life. After learning the basics of wire wrapping, I transformed my passion and skills into a business - Second Sight Design.</p>
                    </div>
                </div>
                <div className="row m-0 w-100">
                    <div className="col-9 mx-auto my-5">
                        <h5 className="info-title">My Mission</h5>
                        <p>Simply put, I want to spread crystals to people. While doing so, I want to remind people the power of second chances. This business gives me, old jewelry, and the planet a second chance with every piece that’s crafted.</p>
                        <h5 className="info-title mt-5">My Vision</h5>
                        <p>I eventually want to be a gallery artist and create high-end designs to make my work more accessible. I also want to start silversmithing, which will give my customers more options as my business expands.</p>
                    </div>
                </div>
            </div>
        )
    }
}
