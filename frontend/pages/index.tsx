import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

type Movie = {
  id: number;
  nome: string;
  imagem_url: string;
};

type Props = {
  movies: Movie[];
};

// Formatar e deixar responsivo
const Home = ({ movies }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Movies Catalog</title>
      </Head>
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
    </div>
  );
};

// Get data from API and pass it as props to the component
export const getStaticProps = async () => {
  // Request is made to '/api/filmes' endpoint
  const response = await axios.get('http://127.0.0.1:8000/api/filmes/');
  // Response is stored in 'movies' variable
  const movies: Movie[] = response.data;

  return {
    props: { movies },
    revalidate: 10,
  };
};

export default Home;
