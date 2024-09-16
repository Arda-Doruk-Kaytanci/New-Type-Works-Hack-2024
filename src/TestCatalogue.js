import React, { useState } from "react";
import TestLink from "./TestLink"
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


function TestCatalogue() {
    const [searchTerm, setSearchTerm] = useState('');
    const tests = [
        <TestLink name="Don’t Respond to Pop-Up Ads" catalogue={true} image={image10img}/>,
        <TestLink name="Rely on Trusted Sources for Help" catalogue={true} image={image9img}/>,
        <TestLink name="Know the Warning Signs of Scams" catalogue={true} image={image8img}/>,
        <TestLink name="Be Cautious of Public Wi-Fi" catalogue={true} image={image7img}/>,
        <TestLink name="Learn About Two-Factor Authentication (2FA)" catalogue={true} image={image6img}/>,
        <TestLink name="Be Careful of Offers That Seem Too Good to Be True" catalogue={true} image={image5img}/>,
        <TestLink name="Keep Software and Devices Updated" catalogue={true} image={image4img}/>,
        <TestLink name="Use Strong, Unique Passwords" catalogue={true} image={image3img}/>,
        <TestLink name="Protect Your Personal Information" catalogue={true} image={image2img}/>,
        <TestLink name="Be Skeptical of Unexpected Emails and Messages" catalogue={true} image={image1img}/>,
    ]


    const filteredtests = tests.filter(test => test.props.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <>
            <section className="search-section">
                <input
                    name="search"
                    type="text"
                    placeholder="Search tests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </section>
            <div id="Testcontainer">{filteredtests}</div>
        </>
    );
}
export default TestCatalogue