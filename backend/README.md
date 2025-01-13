# Movie Catalog API

Esta é uma API simples para catalogo de filmes, criada com Django e Django REST Framework (DRF). Ela permite listar e acessar detalhes de filmes. A API está pronta para ser consumida por uma aplicação frontend (Next.js no caso deste projeto) e possui os seguintes endpoints:

## Endpoints da API

### 1. Listagem de Filmes

**Método:** `GET` <br>
**Endpoint:** `/api/filmes/` <br>
**Descrição:** Retorna uma lista de todos os filmes cadastrados no sistema. Os filmes são retornados com os seguintes campos:

- `id`: Identificador único do filme (auto gerado).
- `nome`: Nome do filme.
- `imagem_url`: URL da imagem do filme.

**Exemplo de resposta:**

```json
[
    {
        "id": 1,
        "nome": "O Poderoso Chefão",
        "imagem_url": "https://example.com/images/poderoso-chefao.jpg"
    },
    {
        "id": 2,
        "nome": "Matrix",
        "imagem_url": "https://example.com/images/matrix.jpg"
    }
]
```


### 2. Detalhes de um Filme

**Método:** `GET` <br>
**Endpoint:** `/api/filmes/{id}/` <br>
**Descrição:** Retorna os detalhes de um filme em específico. Os detalhes incluem os seguintes campos:

- `id`: Identificador único do filme (auto gerado).
- `nome`: Nome do filme.
- `imagem_url`: URL da imagem do filme.
- `descricao`: Descrição detalhada do filme.
- `ano`: Ano de lançamento do filme.

**Exemplo de resposta:**

```json
{
    "id": 1,
    "nome": "O Poderoso Chefão",
    "imagem_url": "https://example.com/images/poderoso-chefao.jpg",
    "descricao": "Don Vito Corleone é o chefe de uma poderosa família mafiosa em Nova York. A história segue seu filho Michael...",
    "ano": 1972
}
```
