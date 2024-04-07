import Image from "next/image";
import styles from "./styles.module.scss";
import { CardInfo } from "@/models/card";
import { motion } from "framer-motion";

const Card = ({ name, image, status }: CardInfo) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
    <div className={styles.card}>
      <Image src={image} alt={name} width={200} height={200} />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.status}>
            <div className={styles.statusIcon} style={{ backgroundColor: status === "Alive" ? "green" : status === "Dead" ? "red" : "gray" }}></div>
            {status === "Alive" ? "Vivo" : status === "Dead" ? "Morto" : "Desconhecido"}
            </p>
      </div>
    </div>
    </motion.div>
  );
};

export default Card;
