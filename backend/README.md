# Movie Catalog API

> *This is a simple movie catalog API built with **Django** and **Django REST Framework (DRF)**.*
> *It allows you to list and access movie details. The API is ready to be consumed by a frontend application*
> *(**Next.js** in this project's case) and has the following endpoints:*

## API Endpoints

### 1. Movie Listing

- **Method:** `GET`
- **Endpoint:** `/api/filmes/`
- **Description:** Returns a list of all movies registered in the system. The movies are returned with the following fields:

	- `id`: Unique identifier of the movie (auto-generated).
	- `nome`: Movie name.
	- `imagem_url`: URL of the movie image.

**Example response:**

```json
[
    {
        "id": 1,
        "nome": "The Godfather",
        "imagem_url": "https://example.com/images/the-godfather.jpg"
    },
    {
        "id": 2,
        "nome": "The Matrix",
        "imagem_url": "https://example.com/images/matrix.jpg"
    }
]
```

<br>

### 2. Movie Details

- **Method:** `GET`.
- **Endpoint:** `/api/filmes/{id}/`.
- **Description:** Returns the details of a specific movie. The details include the following fields:

	- `id`: Unique identifier of the movie (auto-generated).
	- `nome`: Movie name.
	- `imagem_url`: URL of the movie image.
	- `descricao`: Detailed description of the movie.
	- `ano`: Movie's release year.

**Example response:**

```json
{
    "id": 1,
    "name": "The Godfather",
    "image_url": "https://example.com/images/the-godfather.jpg",
    "description": "Don Vito Corleone is the head of a powerful mafia family in New York. The story follows his son Michael...",
    "year": 1972
}
```
