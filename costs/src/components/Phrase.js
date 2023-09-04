import styles from './Phrase.module.css';

function Phrase() {
    return (
        <div className={styles.phraseContainer}>
            <p className={styles.phraseContent}>this is one component with one phrase!</p>
        </div>
    );
}

export default Phrase;