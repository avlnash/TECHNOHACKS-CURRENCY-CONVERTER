document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '') {
        alert('Please enter an amount');
        return;
    }

    // Fetch the exchange rate from an API (example using ExchangeRate-API)
    const apiKey = 'ef4f7328affbdf2b2827edc5'; // Replace with your API key
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                const rate = data.conversion_rate;
                const convertedAmount = (amount * rate).toFixed(2);
                document.getElementById('result').innerText = 
                    `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                alert('Error fetching exchange rate');
            }
        })
        .catch(error => console.error('Error:', error));
});
