import yfinance as yf
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta

# Get today's date
today = datetime.today()

# Calculate the date 59 days ago
days_ago = today - timedelta(days=1)

# Format the date if desired
formatted_date = days_ago.strftime('%Y-%m-%d')

# Format today's date as '%Y-%m-%d'
formatted_today = today.strftime('%Y-%m-%d')

# Define the list of tickers you want to download data for
tickers = ['AAPL', 'GOOGL', 'MSFT', 'AMZN']

def download_stock_data(ticker):
    print(f"Downloading data for {ticker}...")
    data = yf.download(ticker, start=formatted_date, end=formatted_today)  # Specify the desired date range
    #data.to_csv(f"{ticker}.csv")  # Save data to a CSV file
    print('completed')

# Create a thread pool with a specified number of threads
num_threads = 4  # Adjust the number of threads based on your system capabilities
with ThreadPoolExecutor(max_workers=num_threads) as executor:
    executor.map(download_stock_data, tickers)