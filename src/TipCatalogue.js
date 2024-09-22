import React from "react";
import TipLink from "./WhyUsLink";
import image1img from "./Images/image1.png"
import image2img from "./Images/image2.png"
import image3img from "./Images/image3.png"
import image4img from "./Images/image4.png"
import image5img from "./Images/image5.png"
import image6img from "./Images/image6.png"
import image7img from "./Images/image7.png"
import image8img from "./Images/image8.png"
import image9img from "./Images/image9.png"
import image10img from "./Images/image10.png"


const images = [
    <TipLink key={1} name="Master the Art of Focus and Precision" src={image1img}></TipLink>,
    <TipLink key={2} name="Build Team Spirit and Camaraderie" src={image2img}></TipLink>,
    <TipLink key={3} name="Accessible to All Skill Levels" src={image3img}></TipLink>,
    <TipLink key={4} name="Challenge Yourself with Competitions and Goals" src={image4img}></TipLink>,
    <TipLink key={5} name="Improve Physical Fitness in a Unique Way" src={image5img}></TipLink>,
    <TipLink key={6} name="Focus on Personal Growth and Development" src={image6img}></TipLink>,
    <TipLink key={7} name="Learn from Experienced and Passionate Coaches" src={image7img}></TipLink>,
    <TipLink key={8} name="Train in a Safe and Supportive Environment" src={image8img}></TipLink>,
    <TipLink key={9} name="Relieve Stress and Focus Your Mind" src={image9img}></TipLink>,
    <TipLink key={10} name="Join a Thriving Community of Like-Minded Enthusiasts" src={image10img}></TipLink>,
];

function imageCatalogue() {
    return (
        <>
            <div id="Tipcontainer">{images}</div>
        </>
    );
}
export default imageCatalogue