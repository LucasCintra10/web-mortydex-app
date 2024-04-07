import Image from "next/image";
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image src="/loading.gif" alt="Loading" width={200} height={200} />
    </div>
  );
};

export default Loader;
