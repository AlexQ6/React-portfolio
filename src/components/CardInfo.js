import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});
    const cardRef = useRef(null);
    useEffect(() => {
        if (cardRef.current) {      
            cardRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }  
    });

    return(
        <animated.div className="g-card-info" ref={cardRef} style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
            <br></br>
            <a href={props.repoLink} target="_blank" rel="noopener noreferrer">Github</a>
        </animated.div>
    );

}

export default CardInfo;