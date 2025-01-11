from django.db import models


# Model for the movie object
class Movie(models.Model):
	name = models.CharField(max_length=255)
	image_url = models.URLField()
	description = models.TextField()
	year = models.IntegerField()

	def	__str__(self):
		return self.name
