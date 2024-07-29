import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div id='about' className={styles.AboutContainer}>
      <div className={styles.AbountData}>
        <p className={styles.aboutHeading}>About Myself</p>
        <p className={styles.MyIntro}>I have compleated the MCA in Sri Venkateswara University. I enjoy creating unique and simplistic user interfaces and Web sites in creative ways.</p>
        <hr/>
        <ul>
            <li>Web design</li>
            <li>MERN Stack Developer</li>
            <li>API Integration</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
        </ul>
        <hr/>
        <p className={styles.MyPassion}>I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Web Development experience I continually look for new and better ways to make tech accessible by all.</p>
      </div>
    </div>
  )
}

export default About
