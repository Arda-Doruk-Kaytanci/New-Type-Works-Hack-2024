import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer({ scrollRef }) {
    const LinkButton = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const onClickHandler = () => {
            navigate(props.link);
            if (props.scrollRef?.current) {
                props.scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        const isActive = location.pathname === `/${props.link}` || (location.pathname === '/' && props.link === "");

        return (
            <>
                <button
                    onClick={onClickHandler}
                    style={{
                        color: isActive ? 'black' : 'grey',
                        fontWeight: isActive ? 'bold' : 'normal'
                    }}
                    className='link'
                >
                    {props.name}
                </button>
            </>
        );
    }
    const goUp = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div>
            <hr id="footer-hr"></hr>
            <ul id="footer-ul">
                <li><LinkButton name="Homepage" link="" scrollRef={scrollRef}></LinkButton></li>
                <li><button type="button" onClick={goUp} id="goUp" className="link" style={{
                    color: 'grey',
                    fontWeight: 'normal'
                }}>Go Up</button></li>
                <li><LinkButton name="Why Us" link="why-us" scrollRef={scrollRef}></LinkButton></li>
            </ul>
            <footer className='Footer'>Author: Arda Doruk Kaytancı</footer>
        </div>
    )
}

export default Footer;
