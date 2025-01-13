from rest_framework import serializers
from .models import Filme


# Serializer for listing all movies
class MoviesListSerializer(serializers.ModelSerializer):
	class Meta:
		model = Filme
		fields = ['id', 'nome', 'imagem_url']

# Serializer for getting details of a movie
class MovieDetailSerializer(serializers.ModelSerializer):
	class Meta:
		model = Filme
		fields = ['id', 'nome', 'imagem_url', 'descricao', 'ano']
