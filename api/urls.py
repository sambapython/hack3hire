from django.urls import path,include
from api.views import stockValueView

urlpatterns = [
    path('stockValue/',stockValueView.as_view())
]
