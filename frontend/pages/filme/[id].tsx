import { GetServerSideProps } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Movie = {
  id: number;
  nome: string;
  imagem_url: string;
  descricao: string;
  ano: string;
};

type Props = {
  movie: Movie;
};

// Receives a movie as props and displays its details
const MovieDetails = ({ movie }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${movie.nome} (${movie.ano})`}</title>
      </Head>
      <Header />
      <main className="flex-grow px-8 pb-16">
        <h1 className="text-center text-3xl font-bold my-8">{movie.nome}</h1>
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
          <div className="w-full sm:w-1/3">
            {/* The movie banner is fetched from 'imagem_url' field */}
            <Image
              src={movie.imagem_url} alt={movie.nome} width={300} height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:w-2/3">
            {/* The movie description is fetched from 'descricao' field */}
            <p className="text-lg"><strong>Movie Description:</strong> {movie.descricao}</p>
            {/* The movie release year is fetched from 'ano' field */}
            <p className="mt-2 text-lg"><strong>Release Year:</strong> {movie.ano}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Get data from API and pass it as props to the component
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  try {
    // Request is made to '/api/filmes/{id}/' endpoint
    const response = await axios.get(`http://127.0.0.1:8000/api/filmes/${id}`);
    // Response is stored in 'movie' variable
    const movie: Movie = response.data;

    return {
      props: { movie },
    };
  } catch (error) {
    // If the request fails, return an error
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      return { notFound: true, };
    } else {
      return {
        props: { error: 'Unexpected error occurred', },
      };
    }
  }
};

export default MovieDetails;
