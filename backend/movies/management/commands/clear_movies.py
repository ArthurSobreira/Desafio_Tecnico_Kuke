from django.core.management.base import BaseCommand
from movies.models import Filme


# Command to remove all movies from the database
class Command(BaseCommand):
	def handle(self, *args, **kwargs):
		Filme.objects.all().delete()
		self.stdout.write(self.style.SUCCESS('Movies cleared successfully!'))
