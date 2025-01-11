from rest_framework import serializers
from .models import Movie


# Serializer for the Movie model
class MovieSerializer(serializers.ModelSerializer):
	class Meta:
		model = Movie
		fields = ['id', 'name', 'image_url', 'description', 'year']
