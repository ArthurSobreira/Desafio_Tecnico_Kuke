from django.contrib import admin
from .models import Filme


class FilmeAdmin(admin.ModelAdmin):
	list_display = ('nome', 'ano')
	search_fields = ('nome',)
	list_filter = ('ano',)

# Register the Filme model
admin.site.register(Filme, FilmeAdmin)
