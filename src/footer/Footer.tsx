import React from 'react';
import styles from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Marat Abdulin</h2>
                <ul className={styles.socialList}>
                    <li className={styles.socialItem}>
                        <a href="#" className={styles.link}>Facebook</a>
                    </li>
                    <li className={styles.socialItem}>
                        <a href="#" className={styles.link}>Twitter</a>
                    </li>
                    <li className={styles.socialItem}>
                        <a href="#" className={styles.link}>Linkedin</a>
                    </li>
                    <li className={styles.socialItem}>
                        <a href="#" className={styles.link}>Instagram</a>
                    </li>
                </ul>
                <p className={styles.rights}>All rights reserved 2022</p>
            </div>


        </div>
    );
};

export default Footer;
