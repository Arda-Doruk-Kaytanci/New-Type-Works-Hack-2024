import React from "react";
import { Link } from "react-router-dom";

function TestLink(props) {
    if(props.catalogue === true)
    {
        return (
            <Link to={`/tests/${props.name.toLowerCase().replace(/ /g, "-")}`} >
                <div className="testWidget">
                    <img src={props.image} alt={props.name} className="testImage" />
                    <h3 className="testName">{props.name}</h3>
                </div>
            </Link>
        );
    }
    return (
        <Link to={`/tests/${props.name.toLowerCase().replace(/ /g, "-")}`} >
            <div className="testWidget">
                <img src={props.image} alt={props.name} className="testImage" />
                <h3 className="testName">{props.name}</h3>
            </div>
        </Link>
    );
}

export default TestLink;