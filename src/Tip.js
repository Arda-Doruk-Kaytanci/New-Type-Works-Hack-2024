import React from 'react'

function Tip(props) {

    return (
        <div className='tipconta'>
            <img src={props.image} alt={props.name}></img>
            <br />
            <p>
                {props.summary}
            </p>
            <br />
        </div>
    )
}
export default Tip