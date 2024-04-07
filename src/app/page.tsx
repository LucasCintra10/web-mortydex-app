"use client";
import getCharacters from "@/utils/providers/getCharacters";
import { useQuery } from "@tanstack/react-query";
import styles from "./page.module.scss";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { Character } from "@/models/card";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCharacters(),
    queryKey: ["characters"],
  });

  return (
    <main className={styles.main}>
      {isLoading && <Loader />}
      {isError && <p>Error</p>}
      {data?.results.map((character: Character, index: number) => (
        <Card key={index} character={character} />
      ))}
    </main>
  );
}
