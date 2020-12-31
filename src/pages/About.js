import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Alex. I'm a full stack engineer with experience in MongoDB, PostgreSQL, React, Express JS, Node JS and Ruby on Rails</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>Current working on a website for a cafe that allows for online payment & click and collect. You can check it out <a href="https://github.com/AlexQ6/Mern-project-part-B" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage soon. </p>

            
            </Content>
        </div>
    );

}

export default AboutPage;