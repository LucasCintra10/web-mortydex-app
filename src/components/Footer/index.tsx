import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <Image src="/footer.svg" alt="Logo" width={120} height={120} />
        <p>Developed by Lucas Cintra </p>
        <p>All rights reserved.</p>
        <p>2024</p>
      </div>
    </footer>
  );
};

export default Footer;
