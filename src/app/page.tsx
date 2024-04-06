"use client";
import getCharacters from "@/utils/providers/getCharacters";
import { useQuery } from "@tanstack/react-query";
import styles from "./page.module.scss";
import Card from "@/components/Card";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCharacters(),
    queryKey: ["characters"],
  });

  return (
    <main className={styles.main}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data?.results.map((character: any) => (
        <Card key={character.id} name={character.name} image={character.image} status={character.status} />
      ))}
    </main>
  );
}
