import React from 'react'
import ProjectComponent from './ProjectComponent'
import AboutContent from './AboutContent'
import ContactComponent from './ContactComponent'
import ImgComponent from './ImgComponent'

const PageContent = () => {

    const PROJECTS = [
        { title: 'Summer House', image: 'https://www.w3schools.com/w3images/house5.jpg' },
        { title: 'Brick House', image: 'https://www.w3schools.com/w3images/house2.jpg' },
        { title: 'Renovated', image: 'https://www.w3schools.com/w3images/house3.jpg' },
        { title: 'Barn House', image: 'https://www.w3schools.com/w3images/house4.jpg' },
        { title: 'Summer House2', image: 'https://www.w3schools.com/w3images/house5.jpg' },
        { title: 'Brick House2', image: 'https://www.w3schools.com/w3images/house2.jpg' },
        { title: 'Renovated2', image: 'https://www.w3schools.com/w3images/house3.jpg' },
        { title: 'Barn House2', image: 'https://www.w3schools.com/w3images/house4.jpg' },
    ]

    return (
        <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
            <div className="w3-container w3-padding-32" id="projects">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
            </div>
            <div className="w3-row-padding">
                <ProjectComponent projects={PROJECTS}>

                </ProjectComponent>
                <AboutContent />
                <ContactComponent />
                <ImgComponent />

            </div>
        </div>
    );
};

export default PageContent
