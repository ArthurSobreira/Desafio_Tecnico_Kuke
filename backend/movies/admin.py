from django.contrib import admin
from .models import Movie


class MovieAdmin(admin.ModelAdmin):
	list_display = ('name', 'year')
	search_fields = ('name',)
	list_filter = ('year',)

# Register the Movie model
admin.site.register(Movie, MovieAdmin)
