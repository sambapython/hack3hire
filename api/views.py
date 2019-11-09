from django.shortcuts import render
import pandas as pd
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
import os
#import requests
# Create your views here.
class stockValueView(APIView):
	# To find the toatl exposure of euity stock
	def get(self, request, isin=None):
		path = os.path.join(settings.BASE_DIR,"api","data.xlsx") 
		equity_holding = pd.read_excel(path,sheet_name="Equity Holdings")
		equity_holding["totalEquityExposure"] = equity_holding['Holding Quantity']*equity_holding['Current Market Price']
		futures_holdings = pd.read_excel(path, sheet_name="Futures Holdings")
		nifty_index = pd.read_excel(path,sheet_name="NIFTY Index")
		bank_nifty_index = pd.read_excel(path, sheet_name="BANK NIFTY Index")
		itnifty_index = pd.read_excel(path, sheet_name="ITNIFTY Index")
		NIFTY_Futures=futures_holdings[futures_holdings["Future Contract"] == "NIFTY Futures"]
		BANKNIFTY_Futures=futures_holdings[futures_holdings["Future Contract"] == "BANKNIFTY Futures"]
		NIFTYIT_Futures = futures_holdings[futures_holdings["Future Contract"] == "NIFTYIT Futures"]
		BANKNIFTY_Futures_val = BANKNIFTY_Futures['Lot Size']*BANKNIFTY_Futures['Holding Lots']*BANKNIFTY_Futures['Current Market Price of FUTURES contract']
		NIFTYIT_Futures_val = NIFTYIT_Futures['Lot Size']*NIFTYIT_Futures['Holding Lots']*NIFTYIT_Futures['Current Market Price of FUTURES contract']
		NIFTY_Futures_val = NIFTY_Futures['Lot Size']*NIFTY_Futures['Holding Lots']*NIFTY_Futures['Current Market Price of FUTURES contract']
		futures_holdings["totalfeatureHoldings"]=futures_holdings["Lot Size"].map(lambda x:0)
		data = []
		for ind in futures_holdings.index:
		    row= futures_holdings.loc[ind]
		    lors = row["Long or Short"]
		    if lors != "Long":
		        hold = -1*row['Holding Lots']
		    else:
		        hold = row['Holding Lots']
		    val = row['Lot Size']*hold*row['Current Market Price of FUTURES contract']
		    data.append(val)
		futures_holdings["totalfeatureHoldings"] = data
		nifty_index["total nifty index"] =  nifty_index.Weightage.map(lambda x:(x/100.0)*NIFTY_Futures_val)
		bank_nifty_index["total bank nifty index"]= bank_nifty_index.Weightage.map(lambda x:(x/100.0)*BANKNIFTY_Futures_val)
		itnifty_index["total it nifty index"] = itnifty_index.Weightage.map(lambda x:(x/100.0)*NIFTYIT_Futures_val)
		resp = []
		futures_holdings["Unique Identifier"] = futures_holdings["Unique Identifier"].map(lambda x:x.split('.')[0])
		for isin,ind in zip(equity_holding.ISIN,equity_holding.index):
		    stock_row = equity_holding.loc[ind]
		    row = {}
		    row["UNIQUE IDENTIFIER"] = isin
		    row["EQUITY"] = stock_row["Stock Name"]
		    row["Level"] = "U"
		    futures_holdings_row = futures_holdings[futures_holdings["Unique Identifier"]==isin]
		    if not futures_holdings_row.empty:
		        futures_holdings_val = float(futures_holdings_row['totalfeatureHoldings'])
		    else:
		        futures_holdings_val=0
		    nifty_index_row = nifty_index[nifty_index['ISIN']==isin]
		    if not nifty_index_row.empty:
		        nifty_index_row_val = float(nifty_index_row["total nifty index"])
		    else:
		        nifty_index_row_val=0
		    bank_nifty_index_row = bank_nifty_index[bank_nifty_index["ISIN"]==isin]
		    if not bank_nifty_index_row.empty:
		        bank_nifty_index_val=float(bank_nifty_index_row["total bank nifty index"])
		    else:
		        bank_nifty_index_val=0
		    itnifty_index_row = itnifty_index[itnifty_index["ISIN"]==isin]
		    if not itnifty_index_row.empty:
		        itnifty_index_val = float(itnifty_index_row["total it nifty index"])
		    else:
		        itnifty_index_val=0

		    cmp = stock_row["totalEquityExposure"]+\
		    futures_holdings_val+nifty_index_row_val+bank_nifty_index_val+itnifty_index_val
		    row["CURRENT MARKET PRICE"] = cmp
		    resp.append(row)
		return Response(resp)