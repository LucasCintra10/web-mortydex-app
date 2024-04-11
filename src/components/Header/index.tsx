import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/header.svg" alt="Logo" width={120} height={120} />
      </Link>
    </header>
  );
};

export default Header;
