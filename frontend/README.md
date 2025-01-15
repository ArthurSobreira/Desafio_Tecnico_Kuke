# Next.js Frontend Application

> *This application is a movie catalog developed with **Next.js**, **Tailwind CSS**, and uses **Axios** to make HTTP requests.*
> *The application allows users to view a list of movies and get details about each movie. The application*
> *communicates with a backend API developed in Django to fetch movie data. Here are the two main responsibilities of this application:*

## 1. Movie Listing Page

* The home page ([index.tsx](pages/index.tsx)) displays a list of movies with their images and names. The request for this page is make to the Django API using the `getStaticProps` function:

```tsx
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
```

<br>

## 2. Movie Details Page

* Each movie in the list has a link that leads to a details page ([[id].tsx](pages/filme/[id].tsx)), where additional information about the movie is displayed. Like the main page, the details page makes a request to Django API to fetch detailed information about a specific movie identified by an `id` attribute, this time using the `getServerSideProps` function:

```tsx
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
```

<br>

> Here are some additional details about the project's frontend: The header ([Header.tsx](pages/components/Header.tsx))
> includes navigation links and an avatar that leads to the my GitHub profile, while the footer
> ([Footer.tsx](pages/components/Footer.tsx)) displays copyright information. The navigation is responsive,
> adapting to different screen sizes to ensure a consistent user experience across devices. In addition,
> the application effectively handles API request errors, displaying appropriate error messages to keep
> the user informed about the application's status.
