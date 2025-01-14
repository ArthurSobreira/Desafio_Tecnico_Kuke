import Link from 'next/link';
import axios from 'axios';

type Movie = {
  id: number;
  nome: string;
  imagem_url: string;
};

type Props = {
  movies: Movie[];
};

const Home = ({ movies }: Props) => {
  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/filme/${movie.id}`}>
                <img src={movie.imagem_url} alt={movie.nome} width={100} />
                <h2>{movie.nome}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/filmes/');
  const movies: Movie[] = response.data;

  return {
    props: { movies },
  };
};

export default Home;
