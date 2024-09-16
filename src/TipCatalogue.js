import React from "react";
import TipLink from "./TipLink";
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
    <TipLink key={1} name="Don’t Respond to Pop-Up Ads" src={image1img}></TipLink>,
    <TipLink key={2} name="Rely on Trusted Sources for Help" src={image2img}></TipLink>,
    <TipLink key={3} name="Know the Warning Signs of Scams" src={image3img}></TipLink>,
    <TipLink key={4} name="Be Cautious of Public Wi-Fi" src={image4img}></TipLink>,
    <TipLink key={5} name="Learn About Two-Factor Authentication (2FA)" src={image5img}></TipLink>,
    <TipLink key={6} name="Be Careful of Offers That Seem Too Good to Be True" src={image6img}></TipLink>,
    <TipLink key={7} name="Keep Software and Devices Updated" src={image7img}></TipLink>,
    <TipLink key={8} name="Use Strong, Unique Passwords" src={image8img}></TipLink>,
    <TipLink key={9} name="Protect Your Personal Information" src={image9img}></TipLink>,
    <TipLink key={10} name="Be Skeptical of Unexpected Emails and Messages" src={image10img}></TipLink>,
];

function imageCatalogue() {
    return (
        <>
            <div id="Tipcontainer">{images}</div>
        </>
    );
}
export default imageCatalogue