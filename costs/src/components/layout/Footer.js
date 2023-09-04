import {FaFacebook, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaTiktok/></li>
                <li><FaWhatsapp/></li>
                <li><FaTwitter/></li>
                <li><FaTwitch/></li>
            </ul>
            <p>Our social media</p>
        </footer>
    );
}

export default Footer;