
# Movie Catalog Project

Este projeto consiste em um sistema simples de catalogo de filmes, dividido em duas partes:

1. **Backend** : Responsável por fornecer a API que gerencia e disponibiliza os dados dos filmes.
2. **Frontend** : Uma interface que consome a API do backend e apresenta os filmes ao usuário. *(Em desenvolvimento)*

Atualmente, a parte do backend está concluída e pronta para uso.

## Backend - Como Rodar o Projeto

### Requisitos

* Python 3.8 ou superior
* Virtualenv (opcional, mas recomendado)
* SQLite3 (ou outro banco de dados configurado no Django)

### Passos para Executar o Backend

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/seu-usuario/movie-catalog.git
   cd movie-catalog
   ```
2. **Criar e ativar o ambiente virtual**

   * Unix/macOS:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   * Windows:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
3. **Instalar as dependências**

   ```bash
   pip install -r requirements.txt
   ```
4. **Realizar as migrações**

   ```bash
   python manage.py migrate
   ```
5. **Rodar o servidor de desenvolvimento**

   ```bash
   python manage.py runserver
   ```

   O servidor será iniciado e a API estará acessível em `http://127.0.0.1:8000/api/filmes/`.

### Endpoints Disponíveis

1. **Listagem de Filmes**
   * **Método:** `GET`
   * **Endpoint:** `/api/filmes/`
   * **Descrição:** Retorna uma lista de todos os filmes cadastrados no sistema.
2. **Detalhes de um Filme**
   * **Método:** `GET`
   * **Endpoint:** `/api/filmes/{id}/`
   * **Descrição:** Retorna os detalhes completos de um filme específico com base no seu `id`.

### População de Dados

Você pode popular o banco de dados com filmes fictícios utilizando o script `populate_movies.py`:

1. Crie um arquivo `movies_data.json` com os dados desejados.
2. Execute o comando abaixo para iniciar o shell do Django:

   ```bash
   python manage.py shell
   ```
3. No shell interativo, rode o seguinte código:

   ```python
   from movies.utils import populate_movies
   populate_movies('movies_data.json')
   ```

   Isso irá popular o banco de dados com os filmes presentes no arquivo JSON.

### Limpeza de Dados

Para limpar todos os filmes do banco de dados, execute o seguinte comando no shell do Django:

```bash
python manage.py shell
```

No shell interativo, execute:

```python
from movies.models import Filme
Filme.objects.all().delete()
```

Isso irá remover todos os filmes cadastrados no banco de dados.

---

## Frontend - Como Rodar o Projeto

*(Esta seção será preenchida quando o desenvolvimento do frontend estiver concluído.)*

---

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo [LICENSE](https://chatgpt.com/c/LICENSE) para mais detalhes.
