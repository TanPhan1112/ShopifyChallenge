import React, { useState, useEffect } from "react";
import axios from 'axios';

function Home() {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
            .then(result => {
                const content = result.data.photos;
                setData(content);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    let imageArray = [];
    for (let i = 0; i < data.length; i++) {
        imageArray.push(data[i].img_src);
    }

    return (
        <div>
            <div className="container">
                <h1>Welcome to my app!!!</h1>
                {imageArray.map((image, index) => <li key={index}><img src={image} alt="nasa"></img></li>)}
            </div>
        </div>
    );
}

export default Home;