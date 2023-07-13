import yfinance as yf
import mplfinance as mpf


from datetime import datetime, timedelta

# Get today's date
today = datetime.today()

# Calculate the date 59 days ago
days_ago = today - timedelta(days=1)

# Format the date if desired
formatted_date = days_ago.strftime('%Y-%m-%d')

# Format today's date as '%Y-%m-%d'
formatted_today = today.strftime('%Y-%m-%d')

# Print the result
print(formatted_date)

# Define the stock symbol and the desired time period
stock_symbol = 'MSFT'
start_date = formatted_date
end_date = formatted_today

# Fetch the historical data from Yahoo Finance
stock_data = yf.download(stock_symbol, start=start_date, end=end_date, interval='30m')

# Convert the stock data to the required format for mplfinance
stock_data['Date'] = stock_data.index
stock_data = stock_data[['Date', 'Open', 'High', 'Low', 'Close', 'Volume']]
stock_data.set_index('Date', inplace=True)

# Plot the candlestick chart
mpf.plot(stock_data, type='candle', title='Stock Chart: ' + stock_symbol, ylabel='Price')

