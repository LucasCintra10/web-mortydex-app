import Image from "next/image";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/header.svg" alt="Logo" width={120} height={120} />
    </header>
  );
};

export default Header;
