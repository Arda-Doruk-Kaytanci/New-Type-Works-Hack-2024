import React from 'react'
import TipLink from "./WhyUsLink";
import tip1img from "./Images/image1.png"
import tip4img from "./Images/image4.png"
import tip10img from "./Images/image10.png"
import tip3img from "./Images/image3.png"
import homepageImg1 from "./Images/homepageImg1.png"
import homepageImg2 from "./Images/HomepageImg2.png"
import homepageImg3 from "./Images/homepageImg3.png"
function HomePage() {

    const featuredTips = [
        <TipLink key={1} name="Master the Art of Focus and Precision" src={tip1img} home={true}></TipLink>,
        <TipLink key={2} name="Challenge Yourself with Competitions and Goals" src={tip4img} home={true}></TipLink>,
        <TipLink key={3} name="Join a Thriving Community of Like-Minded Enthusiasts" src={tip10img} home={true}></TipLink>,
        <TipLink key={4} name="Accessible to All Skill Levels" src={tip3img} home={true}></TipLink>,
    ];

    return (
        <div className='HomePage'>
            <article className="homepageArticle1">
                <img src={homepageImg1} alt='summary of the informations' className="homepageImg" />
                <p>Discover the excitement of archery at our school! Whether you're a complete beginner or an experienced archer, our club offers a supportive environment for everyone to learn and improve their skills. With expert guidance and hands-on practice, you'll master the art of archery in no time. Come join us and experience the thrill of hitting the bullseye while building confidence and precision.</p>
            </article>
            <article className="homepageArticle">
                <img src={homepageImg2} alt='summary of the informations' className="homepageImg2" />
                <p>At the Archery Club, we not only focus on personal improvement but also prepare for exciting competitions. With regular training sessions, you'll be ready to face challenges alongside your teammates. Whether it's inter-school competitions or fun in-club challenges, there's always an opportunity to showcase your skills. Join the fun, improve your aim, and represent our school in thrilling archery tournaments!</p>
            </article>
            <article className="homepageArticle1">
                <img src={homepageImg3} alt='summary of the informations' className="homepageImg" />
                <p>Archery isn't just about hitting a target; it's about strategy, focus, and teamwork. Our club promotes an environment where members discuss techniques, plan strategies, and support each other. In our meetings, you'll learn how to plan your shots, analyze wind conditions, and improve your form—all while enjoying a fun, team-oriented atmosphere. Be part of our community and elevate your archery skills with friends!</p>
            </article>
            <article className='brief'>
                {featuredTips}
            </article>
        </div>
    );
}
export default HomePage;