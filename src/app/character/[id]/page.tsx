"use client"
import styles from './styles.module.scss';
import getCharacter from '@/utils/providers/getCharacter';
import { useQuery  } from '@tanstack/react-query';  

export default function CharacterPage({params}: any) {

  const id = params.id;

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCharacter(id),
    queryKey: ["character"],
  });


  return (
    <main className={styles.main}>
        <h1>BONECO</h1>
    </main>
  );
}