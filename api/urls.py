from django.urls import path,include
from api.views import stockValueView

urlpatterns = [
    path('riskexposure/',stockValueView.as_view())
]
