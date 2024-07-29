import React from 'react';
import styles from './Portfolio.module.css';
import project from '../../Assets/MyPorjects.json';

const Portfolio = () => {
  return (
    <div id='portfolio' className={styles.PortContainer}>
      <div className={styles.Skills}>
        <div>
            <p className={styles.PortHeading}>My Projects</p>
        </div>
        <div className={styles.ProjectContainer}>
            {
                project.map((obj, ind)=>{
                    return <div className={styles.ProjectItem} key={ind}>
                        <h3>{obj.name}</h3>
                        <p>
                        <b>Description :</b>{obj.discription}</p>
                        <p><b>Technologies Used :</b>{obj.technologies_Used}</p>
                        <p><b>Developer Tools :</b>{obj.Devtools}</p>
                        <p><b>My Role :</b>{obj.Role}</p>
                        <img src=''/>
                    </div>
                })
            }
        </div>

      </div>
    </div>
  )
}

export default Portfolio
