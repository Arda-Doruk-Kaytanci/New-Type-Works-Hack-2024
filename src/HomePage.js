import React from 'react'
import TipLink from "./TipLink";
import tip1img from "./Images/image1.png"
import tip4img from "./Images/image4.png"
import tip10img from "./Images/image10.png"
import tip3img from "./Images/image3.png"
import homepageImg1 from "./Images/homepageImg1.png"
import homepageImg2 from "./Images/homepageImg2.png"
import homepageImg3 from "./Images/homepageImg3.png"
function HomePage() {

    const featuredTips = [
        <TipLink key={1} name="Don’t Respond to Pop-Up Ads" src={tip1img} home={true}></TipLink>,
        <TipLink key={2} name="Be Cautious of Public Wi-Fi" src={tip4img} home={true}></TipLink>,
        <TipLink key={3} name="Be Skeptical of Unexpected Emails and Messages" src={tip10img} home={true}></TipLink>,
        <TipLink key={4} name="Know the Warning Signs of Scams" src={tip3img} home={true}></TipLink>,
    ];

    return (
        <div className='HomePage'>
            <article className="homepageArticle1">
                <img src={homepageImg1} alt='summary of the informations' className="homepageImg" />
                <p>It’s important to be aware of common scams that can trick you online. Scammers may send you emails, messages, or even call you pretending to be from a trusted company or bank. They might ask for your personal information, like passwords or bank details, but you should never share this information with anyone who contacts you unexpectedly. Always be cautious of unfamiliar emails and links, especially if they ask for sensitive information. If something feels suspicious, don’t respond, and reach out to a trusted family member or friend for advice.</p>
            </article>
            <article className="homepageArticle">
                <img src={homepageImg2} alt='summary of the informations' className="homepageImg2" />
                <p>Protecting yourself online is easier when you practice good habits. Start by creating strong passwords that include numbers, symbols, and a mix of letters, and avoid using the same password for different accounts. It’s also a good idea to enable extra protection, like two-factor authentication, which sends you a special code to confirm your identity when logging in. Finally, make sure to update your computer or phone regularly to protect against new threats. These small steps can go a long way in keeping your information safe.</p>
            </article>
            <article className="homepageArticle1">
                <img src={homepageImg3} alt='summary of the informations' className="homepageImg" />
                <p>It’s always okay to ask for help when you come across something unfamiliar online. Whether it’s a family member, a trusted friend, or a local community group, having someone to turn to can give you peace of mind. If you’re unsure about an email, phone call, or website, reach out for advice before taking any action. Building a network of people you trust can help you stay informed about the latest scams and ensure that you always have support when navigating the online world.</p>
            </article>
            <article className='brief'>
                {featuredTips}
            </article>
        </div>
    );
}
export default HomePage;