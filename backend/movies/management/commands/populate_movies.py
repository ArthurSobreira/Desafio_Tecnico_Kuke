from django.core.management.base import BaseCommand
from movies.models import Filme
import json


# Command to populate the database with movies
class Command(BaseCommand):
	def handle(self, *args, **kwargs):
		file_path = 'movies/data/movies_data.json'

		with open(file_path, 'r') as file:
			data = json.load(file)

		# Create a Filme object for each movie in the data
		for movie_data in data:
			Filme.objects.create(
				nome=movie_data['nome'],
				imagem_url=movie_data['imagem_url'],
				descricao=movie_data['descricao'],
				ano=movie_data['ano']
			)

		self.stdout.write(self.style.SUCCESS('Movies populated successfully!'))
