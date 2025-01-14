import Link from 'next/link';
import axios from 'axios';
import Header from './components/Header';

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
      <Header />
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/filme/${movie.id}`}>
                <img src={movie.imagem_url} alt={movie.nome} width={100} />
            </Link>
            <h2>{movie.nome}</h2>
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
