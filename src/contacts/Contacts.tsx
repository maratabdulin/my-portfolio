import React from 'react';
import styles from "../contacts/Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.form} action="">
                    <label className={styles.label}>
                        <span>Name:</span>
                        <input type="text"/>
                    </label>
                    <label className={styles.label}>
                        <span>Telephone:</span>
                        <input type="number"/>
                    </label>
                    <label className={styles.label}>
                        <span>Your comment:</span>
                        <textarea placeholder='Write something' style={{resize:"none"}}></textarea>
                    </label>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
        ;
};

export default Contacts;
