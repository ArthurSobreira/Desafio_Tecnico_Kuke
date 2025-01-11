from rest_framework import serializers
from .models import Filme


# Serializer for the Filme model
class FilmeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Filme
		fields = ['id', 'nome', 'imagem_url', 'descricao', 'ano']
