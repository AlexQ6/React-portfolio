import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Alex. I'm a full stack engineer with experience in MongoDB, PostgreSQL, React, Express JS, Node JS and Ruby on Rails.</p>

            <p>Current working on a website for a cafe that allows for online payment & click and collect. You can check it out <a href="https://github.com/AlexQ6/Mern-project-part-B" target="_blank" rel="noopener noreferrer">here</a>, or on the home page soon. </p>

            <p>Want to get in touch? <a href="mailto:alex.qiang36@gmail.com">Email me</a> or message me on Linkedin.</p>
            </Content>
        </div>
    );

}

export default AboutPage;