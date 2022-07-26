import React from 'react';
import styles from "../contacts/Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.form} action="">
                    <label>
                        Name:
                        <input type="text"/>
                    </label>
                    <label>
                        Telephone:
                        <input type="number"/>
                    </label>
                    <textarea placeholder='Write something'/>
                </form>
            </div>
        </div>
    )
        ;
};

export default Contacts;
