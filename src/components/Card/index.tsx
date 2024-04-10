import Image from "next/image";
import styles from "./styles.module.scss";
import { Character } from "@/models/card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface CardProps {
  key: number;
  character: Character;
}

const Card = ({ key, character }: CardProps) => {
  const router = useRouter();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div
        className={styles.card}
        key={key}
        onClick={() => {
          router.push(`/character/${character.id}`);
        }}
      >
        <Image src={character.image} alt={character.name} width={100} height={100} className={styles.image} />
        <div className={styles.info}>
          <p className={styles.name}>{character.name}</p>
          <p className={styles.species}>{character.species}</p>
          <p className={styles.origin}>{character.origin.name}</p>
          <p className={styles.status}>
            <div
              className={styles.statusIcon}
              style={{
                backgroundColor: character.status === "Alive" ? "green" : character.status === "Dead" ? "red" : "gray",
              }}
            ></div>
            {character.status}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
