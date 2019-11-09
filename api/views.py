from django.shortcuts import render
import pandas as pd
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
import os
#import requests
# Create your views here.
class stockValueView(APIView):
	def get(self,request):
		path = os.path.join(settings.BASE_DIR,"api","data.xlsx") 
		df = pd.read_excel(path,sheet_name="Equity Holdings")
		df["totalValue"] = df['Holding Quantity']*df['Current Market Price']
		return Response(df)


