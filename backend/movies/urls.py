from django.urls import path
from .views import MoviesListView, MovieDetailView


urlpatterns = [
    # URL pattern for listing all movies
    path('filmes/', MoviesListView.as_view(), name='movies-list'),
    # URL pattern for getting details of a movie
    path('filmes/<int:pk>/', MovieDetailView.as_view(), name='movie-detail'),
]
