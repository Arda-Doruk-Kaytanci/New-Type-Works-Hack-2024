import TestForm from './TestForm';
import React, { useState } from 'react';
import Crop from './Crop';
function Best4u({ scrollRef }) {
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState([]);

    class CropsClass {
        constructor(point, isdead, name) {
            this.point = point;
            this.isdead = isdead;
            this.name = name
        }
    }

    const crops = [
        "Rice",
        "Wheat",
        "Corn",
        "Soybeans",
        "Barley",
        "Sugarcane",
        "Potatoes",
        "Cassava",
        "Tomatoes",
        "Bananas",
        "Cotton",
        "Coffee",
        "Cocoa",
        "Oranges",
        "Grapes",
        "Onions",
        "Peanuts",
        "Oats",
        "Lettuce",
        "Sorghum",
        "Sunflowers",
        "Carrots",
        "Avocados",
        "Chilies",
        "Pumpkins",
        "Garlic",
        "Radishes",
        "Pineapples",
        "Zucchini",
        "Squash",
        "Apples",
        "Pears",
    ];
    const cropInstances = crops.map(crop => new CropsClass(0, false, crop));
    const [bestCrops, setBestCrops] = useState([cropInstances[1], cropInstances[2], cropInstances[0]]);
    cropInstances[0].point = 5;
    cropInstances[1].point = 4;
    cropInstances[2].point = 3;
    const onClickHandler = (event) => {
        event.preventDefault();
        console.log(isFinished);
        const form = document.getElementById('testForm');

        if (form.checkValidity()) {
            getSelectedValues();

            form.reset();
            setIsFinished(true);
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else {
            alert("Form invalid");
            setIsFinished(false);
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    const getCropData = (cropInstance) => {
        return {
            name: cropInstance.name,
            point: cropInstance.point,
            isdead: cropInstance.isdead
        };
    };
    const listOfCrops = bestCrops.map(getCropData).sort((a, b) => {
        return b.point - a  .point;
    })
    const sortedListOfCrops = listOfCrops.map((crop, index) => (
        <Crop key={index} name={crop.name}  point={crop.point} />
    ));
    function getSelectedValues() {
        const form = document.getElementById('testForm');
        const formData = new FormData(form);
        const results = [];

        for (const [name, value] of formData.entries()) {
            results.push(`${name}: ${value}`);
        }

        setResult(results);
        console.log(result);
    }
    const TestResults = () => {
        return (
            <>
                <div className='normal-list-container'>
                    {sortedListOfCrops}
                </div>
            </>
        )
    }
    return (
        <>
            {isFinished ? (
                <>
                    <TestResults />
                </>
            ) : (
                null
            )}
            <TestForm onClick={onClickHandler} />
        </>
    );
}

export default Best4u;