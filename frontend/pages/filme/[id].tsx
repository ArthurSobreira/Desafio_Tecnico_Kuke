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

const MovieDetails = ({ movie }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${movie.nome} (${movie.ano})`}</title>
      </Head>
      <Header />
      <main className="flex-grow">
        <h1>{movie.nome}</h1>
        <Image src={movie.imagem_url} alt={movie.nome} width={200} height={300} />
        <p><strong>Descrição:</strong> {movie.descricao}</p>
        <p><strong>Ano de Lançamento:</strong> {movie.ano}</p>
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
