"use client";
import styles from "./styles.module.scss";
import getCharacter from "@/utils/providers/getCharacter";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CharacterPage({ params }: any) {
  const id = params.id;

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCharacter(id),
    queryKey: ["character"],
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <main className={styles.main}>
      {isLoading && <Loader />}
      {isError && <div>Something went wrong</div>}
      {data && (
        <motion.div className="container" variants={container} initial="hidden" animate="visible">
          <div className={styles.card}>
            <motion.div variants={item}>
              <Image src={data?.image} alt={data?.name} width={200} height={200} className={styles.image} />
            </motion.div>
            <div className={styles.bar} />
            <div className={styles.info}>
              <motion.div variants={item}>
                <p>
                  <h4>Name:</h4> {data?.name}
                </p>
              </motion.div>
              <motion.div variants={item}>
                <p>
                  <h4>Gender:</h4> {data?.gender}
                </p>
              </motion.div>
              <motion.div variants={item}>
                <p>
                  <h4>Status:</h4> {data?.status}
                </p>
              </motion.div>
              <motion.div variants={item}>
                <p>
                  <h4>Species:</h4> {data?.species}
                </p>
              </motion.div>
              <motion.div variants={item}>
                <p>
                  <h4>Origin:</h4> {data?.origin?.name}
                </p>
              </motion.div>
              <motion.div variants={item}>
                <p>
                  <h4>Last Seen:</h4> {data?.location?.name}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
