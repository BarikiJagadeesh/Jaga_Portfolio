import React from 'react';
import styles from './Contact.module.css';
import constacts from '../../Assets/ContactData.json';

const Contact = () => {
  return (
    <div id='contact' className={styles.ContactContainer}>
     <div className={styles.imgContainer}>
        {
            constacts.map((obj,ind)=>{
                return <a href={obj.link} target='_blank' rel='noreferrer'><img className={styles.constactImg} src={obj.icon} alt={obj.name}/></a>
            })
        }
     </div>
    </div>
  )
}

export default Contact
