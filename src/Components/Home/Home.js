import React from 'react';
import styles from './Home.module.css';
import MenuData from '../../Assets/MenuData.json';

const Home = () => {
  return (
    <div id='home' className={styles.HomeContainer}>
      <div className={styles.MenuContainer}>
        <ul className={styles.MenuList}>
            {
                MenuData.map((obj, ind)=>{
                    return <li key={ind}><a href={obj.link}>{obj.name}</a></li>
                })
            }
        </ul>
      </div>

      <div className={styles.HomeData}>
        <p className={styles.title}>Bariki Jagadeesh</p>
        <p className={styles.titleDescription}>Web Developer</p>
      </div>
    </div>
  )
}

export default Home
