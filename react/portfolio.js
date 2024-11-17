import React, { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file

const Portfolio = () => {
    const [welcomeText, setWelcomeText] = useState('');
    const completeText = "Welcome on board to swiftBrawn";

    useEffect(() => {
        let index = 0;
        const type = () => {
            if (index < completeText.length) {
                setWelcomeText((prev) => prev + completeText.charAt(index));
                index++;
                setTimeout(type, 100); // Typing speed (100ms)
            }
        };
        type(); // Start the typing effect
    }, []);

    return (
        <div className="typewriter">
            <h1>{welcomeText}</h1>
            <p>Below are my projects working:</p>
            <div className="grid-container">
                <div className="grid-item">
                    <a href="https://swiftbrawn.github.io/OnePageWebsite/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat', textDecoration: 'none' }}>
                        OnePageWebsite
                    </a>
                </div>
                <div className="grid-item">
                    <a href="https://swiftbrawn.github.io/arike/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat', textDecoration: 'none' }}>
                        Online Clothing Store
                    </a>
                </div>
                <div className="grid-item">
                    <a href="https://swiftbrawn.github.io/swiftCode/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat', textDecoration: 'none' }}>
                        Web Developer Site
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
