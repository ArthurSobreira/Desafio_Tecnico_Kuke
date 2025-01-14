import { GetServerSideProps } from 'next';
import axios from 'axios';
import Head from 'next/head';
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
        <img src={movie.imagem_url} alt={movie.nome} width={200} />
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
  // Request is made to '/api/filmes/{id}/' endpoint
  const response = await axios.get(`http://127.0.0.1:8000/api/filmes/${id}`);
  // Response is stored in 'movie' variable
  const movie: Movie = response.data;

  return {
    props: { movie },
  };
};

export default MovieDetails;
