# Movie Catalog Project

> *This project aims to build a movie catalog web application, divided into two main layers:*
> * *Backend: Responsible for providing a **RESTful API** that manages and delivers movie data. This layer was developed using **Django** and **Django REST Framework (DRF)**, ensuring a robust and scalable backend.*
> * *Frontend: An interface built with **Next.js** that will consume the data provided by the backend and display it to the user in an interactive and responsive web application.*

## Backend - Responsibilities and Operation

* The backend serves as the foundation of the Movie Catalog project, providing data management and an API interface for the frontend. Built with Django and Django REST Framework (DRF), it ensures reliable data handling and smooth front-end communication (for more information about the API,  visit its [README](backend/README.md)).

### Steps to Run the Backend

* Make sure you clone the repository with the following command:
  
   ```bash
   $> git clone git@github.com:ArthurSobreira/Desafio_Tecnico_Kuke.git
   ```

* Create and activate the virtual environment:

   * Unix/macOS
     ```bash
     $> python3 -m venv venv
     $> source venv/bin/activate
     ```
  
   * Windows
     ```bash
     $> python -m venv venv
     $> venv\Scripts\activate
     ```

* Enter the backend folder:

   ```bash
   $> cd backend/
   ```

* Install backend dependencies:

    ```bash
   $> pip install -r requirements.txt
   ```

* Perform database migrations:

   ```bash
   $> python3 manage.py migrate
   ```

* Run the development server:

   ```bash
   $> python3 manage.py runserver
   ```

The server will be started and the API will be accessible at `http://127.0.0.1:8000/api/filmes/`.

### Population and Data Cleaning

* By default, the database will be empty when you start the program, so it is necessary to populate it, and for this, we will use some movies of [movies_data.json](backend/movies/data/movies_data.json) file, by running the following command:

   ```bash
   $> python3 manage.py populate_movies
   ```

* You can also clear movies that are already present in the database with the following command:

   ```bash
   $> python3 manage.py clear_movies
   ```

* Once the database is populated, run the server and access `http://127.0.0.1:8000/api/filmes/` to see the newly updated movies:

   ```bash
   $> python3 manage.py runserver
   ```

---

## Frontend - Responsibilities and Operation

* The frontend is the user interface of the Movie Catalog project, responsible for displaying the list of movies and the details of each movie. Built with Next.js and Tailwind CSS, it offers a responsive and modern user experience (for more information on how it works, visit its [README](frontend/README.md)).

### Steps to Run the Backend

* First of all, make sure the API is running and accessible at `http://127.0.0.1:8000/api/filmes/`, then, in another terminal instance, enter the frontend folder:

   ```bash
   $> cd frontend/
   ```

* Install frontend dependencies:

   * With npm
     ```bash
     $> npm install
     ```
  
   * With yarn
     ```bash
     $> yarn install
     ```

* Run the development server:

   * With npm
     ```bash
     $> npm run dev
     ```
  
   * With yarn
     ```bash
     $> yarn dev
     ```

The development server will be started and the application will be available at `http://localhost:3000`.
