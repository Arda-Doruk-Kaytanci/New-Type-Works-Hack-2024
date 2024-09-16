import React, { useState } from 'react'

function Tip(props) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };
    <button className='more-info-btn' onClick={toggleMoreInfo}>
        {showMoreInfo ? 'Show Less' : 'More Info'}
    </button>

    return (
        <div className='tipconta'>
            <img src={props.image} alt={props.name}></img>
            <br />
            <p>
                {props.summary}
            </p>
            <br />
            <p>Key Words <br />
                <ul>
                    {Object.entries(props.keywords).map(([key, value], index) => (
                        <li key={index}>
                            {index + 1}. {key}
                            <br />
                            {value}
                        </li>
                    ))}
                </ul>
            </p>
            <br />
            <p>Key Points <br />
                <ul>
                    {Object.entries(props.keypoints).map(([key, value], index) => (
                        <li key={index}>
                            {index + 1}.
                            {key}
                            <br />
                            {value}
                        </li>
                    ))}
                </ul>
            </p>
            <br />
            <button className='more-info-btn' onClick={toggleMoreInfo}>
                {showMoreInfo ? 'Show Less' : 'Extra Tips'}
            </button>
            <br />
            {showMoreInfo && (
                <div className='extra-info'>
                    <ul>
                        {Object.entries(props.extra).map(([key, value], index) => (
                            <li key={index}>
                                {index + 1}.
                                <br />
                                {key}
                                <br />
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Tip