from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Filme
from .serializers import MoviesListSerializer, MovieDetailSerializer


# View for listing all movies
class MoviesListView(APIView):
	def get(self, request):
		movies = Filme.objects.all()
		serializer = MoviesListSerializer(movies, many=True)
		return Response(serializer.data)

# View for getting details of a movie
class MovieDetailView(APIView):
	def get(self, request, pk):
		try:
			# Get the movie by primary key
			movie = Filme.objects.get(pk=pk)
			serializer = MovieDetailSerializer(movie)
			return Response(serializer.data)
		except Filme.DoesNotExist:
			return Response({"error": "Movie not found"}, 
				status=status.HTTP_404_NOT_FOUND)
