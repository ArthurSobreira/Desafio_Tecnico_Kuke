from django.db import models


# Model for the movie object
class Filme(models.Model):
	nome = models.CharField(max_length=255)
	imagem_url = models.URLField()
	descricao = models.TextField()
	ano = models.IntegerField()

	def	__str__(self):
		return self.nome
