import React, { forwardRef } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import TipCatalogue from './TipCatalogue';
import Tip from './Tip';
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



const NavBar = forwardRef((props, ref) => {
    const location = useLocation();
    const elements = [
        <Tip image={image1img} summary="At our archery club, you’ll learn that archery is as much a mental discipline as it is a physical skill. The practice of aiming at a distant target helps develop intense concentration, mindfulness, and the ability to stay calm under pressure. These qualities don’t just improve your accuracy—they carry over into your daily life, helping you manage stress, make clearer decisions, and maintain focus in challenging situations. Archery teaches you to block out distractions and center your thoughts, making you a more patient and deliberate person both on and off the range."  />,
        <Tip image={image2img} summary="Archery may seem like an individual sport, but at our club, we cultivate a strong sense of community and teamwork. You'll join a supportive group of archers who encourage and motivate one another. Our club creates opportunities for you to connect with fellow members through team exercises, strategy discussions, and group outings. Whether it’s giving a tip on form or cheering each other on during competitions, you’ll form lasting bonds while improving your skills. The friendships you make here will be just as valuable as the archery techniques you learn."  />,
        <Tip image={image3img} summary="Whether you’re picking up a bow for the first time or you're already hitting bullseyes, our club welcomes everyone. We offer tailored programs for beginners, intermediates, and experienced archers, ensuring that each member is challenged at their own level. Beginners will learn the fundamentals, like stance and aiming, while experienced archers can refine their technique, explore advanced strategies, and even mentor others. Our coaches work closely with members to track progress, so no matter your skill level, you’ll feel supported and see real improvement over time." />,
        <Tip image={image4img} summary="If you thrive in competitive environments or just enjoy a personal challenge, our club offers plenty of opportunities to test your skills. We regularly organize in-club competitions that are designed to be fun and inclusive, encouraging friendly rivalry and personal achievement. For those aiming higher, we provide pathways to regional and inter-school tournaments where you can represent the club and put your training to the test. With structured goals and challenges, you’ll always have something to aim for—whether it's hitting your first bullseye or winning your first competition."  />,
        <Tip image={image5img} summary="Archery offers a full-body workout that strengthens muscles, improves posture, and enhances hand-eye coordination. Regular practice engages your core, shoulders, back, and arms, while also helping to refine your balance and stability. Unlike more strenuous sports, archery is a low-impact activity, making it ideal for people of all fitness levels. Our club ensures that while you're developing your archery skills, you’re also improving your overall physical health. You'll build strength, flexibility, and endurance—all while doing something you love."  />,
        <Tip image={image6img} summary="At our club, we believe archery is a pathway to personal development. Beyond learning how to shoot arrows accurately, you’ll develop discipline, patience, and persistence. Every shot you take is a lesson in self-control and resilience, teaching you to overcome setbacks and continuously improve. Our coaches emphasize goal-setting, both short-term and long-term, helping you track your growth as an archer and as an individual. Archery’s blend of physical and mental challenges ensures you’ll emerge more focused, determined, and adaptable in all areas of life."  />,
        <Tip image={image7img} summary="Our club is staffed by seasoned archery coaches who are passionate about helping members reach their full potential. Whether you’re working on the basics or refining advanced techniques, you’ll benefit from their expertise and personalized guidance. Coaches provide one-on-one feedback, helping you improve everything from your form and stance to your mental approach. They also bring a deep knowledge of archery strategies, allowing you to learn not only how to shoot, but how to plan and think like a true competitor."  />,
        <Tip image={image8img} summary="Safety is at the heart of everything we do. Our club is designed with the highest standards of safety in mind, ensuring that all members can train confidently in a secure environment. We provide clear instruction on safety protocols from day one, including how to handle equipment responsibly and shoot in controlled conditions. With our focus on creating a structured and supportive atmosphere, you’ll be able to develop your skills without any concerns, knowing that you're always in a safe space designed for learning and growth."  />,
        <Tip image={image9img} summary="In today’s fast-paced world, archery offers a rare opportunity to disconnect and refocus your mind. The repetitive, meditative nature of drawing a bow and releasing an arrow can help you de-stress and recharge. Our club provides a calm and welcoming space where you can escape the pressures of daily life, focus on the present moment, and clear your mind. Whether you come for a quiet practice session or to socialize with others, archery offers a unique way to unwind while still challenging yourself mentally and physically."  />,
        <Tip image={image10img} summary="Our club isn’t just a place to practice archery—it’s a community. When you join, you become part of a group of people who share your passion for the sport, from casual hobbyists to dedicated competitors. We regularly host social events, workshops, and group training sessions to strengthen the bond between members. You’ll have the chance to learn from others, share your experiences, and contribute to a vibrant, growing archery community. It’s not just about honing your skills; it’s about being part of something bigger and building lasting friendships along the way.These expanded texts provide a deeper explanation of why joining an archery club is a rewarding experience, covering various angles from personal development to fitness and community." />
    ]
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className='Nav' ref={ref}>
                <nav>
                    <Link to="/" className='link' style={{ color: isActive('/') ? 'black' : 'grey', fontWeight: isActive('/') ? 'bold' : 'normal' }}>Homepage</Link>
                    <Link to="/why-us" className='link' id='why-usLink' style={{ color: isActive('/why-us') ? 'black' : 'grey', fontWeight: isActive('/why-us') ? 'bold' : 'normal' }}>Why Us</Link>
                </nav>
                <hr />
            </div>


            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/why-us' element={<TipCatalogue />} />
                
                <Route path='/why-us/master-the-art-of-focus-and-precision' element={elements[0]}></Route>
                <Route path='/why-us/build-team-spirit-and-camaraderie' element={elements[1]}></Route>
                <Route path='/why-us/accessible-to-all-skill-levels' element={elements[2]}></Route>
                <Route path='/why-us/challenge-yourself-with-competitions-and-goals' element={elements[3]}></Route>
                <Route path='/why-us/improve-physical-fitness-in-a-unique-way' element={elements[4]}></Route>
                <Route path='/why-us/focus-on-personal-growth-and-development' element={elements[5]}></Route>
                <Route path='/why-us/learn-from-experienced-and-passionate-coaches' element={elements[6]}></Route>
                <Route path='/why-us/train-in-a-safe-and-supportive-environment' element={elements[7]}></Route>
                <Route path='/why-us/relieve-stress-and-focus-your-mind' element={elements[8]}></Route>
                <Route path='/why-us/join-a-thriving-community-of-like-minded-enthusiasts' element={elements[9]}></Route>

            </Routes>
        </>
    );
});

export default NavBar;

