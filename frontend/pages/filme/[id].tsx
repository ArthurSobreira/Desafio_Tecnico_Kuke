import { GetServerSideProps } from 'next';
import axios from 'axios';

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
    <div>
      <h1>{movie.nome}</h1>
      <img src={movie.imagem_url} alt={movie.nome} width={200} />
      <p>{movie.descricao}</p>
      <p><strong>Ano de Lançamento:</strong> {movie.ano}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  const response = await axios.get(`http://127.0.0.1:8000/api/filmes/${id}`);
  const movie = response.data;

  return {
    props: { movie },
  };
};

export default MovieDetails;
