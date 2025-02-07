import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
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

// Receives a list of movies as props and displays them in a grid layout
const Home = ({ movies }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Movies Catalog</title>
      </Head>
      <Header />
      <main className="flex-grow px-8 pb-16">
        <h1 className="text-center text-3xl font-bold my-8">Movies Catalog</h1>
        <ul className=" grid gap-8 justify-items-center 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <li key={movie.id} className="text-center">
              <Link href={`/filme/${movie.id}`}>
                {/* The movie banner is fetched from 'imagem_url' field */}
                <Image
                  src={movie.imagem_url} alt={movie.nome} width={200} height={300}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                />
              </Link>
              {/* The movie name is fetched from 'nome' field */}
              <h2 className="mt-4 font-medium text-lg font-bold">{movie.nome}</h2>
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
  try {
    // Request is made to '/api/filmes' endpoint
    const response = await axios.get('http://127.0.0.1:8000/api/filmes/');
    // Response is stored in 'movies' variable
    const movies: Movie[] = response.data;

    return {
      props: { movies },
      revalidate: 10,
    };
  } catch (error) {
    // If the request fails, return an error
    return { notFound: true, };
  }
};

export default Home;
