exchangeRateInUSD = {
    "usd": 1,
    "cyn": 7.31,
    "eur": 0.87,
    "jpy": 140,
    "idr": 16885,
}

function convertCurrency(source, target, amount) {
    if (source === null || target === null || amount === null) {
        return null;

    }

    // Convert source to USD
    let amountInUSD = amount / exchangeRateInUSD[source];

    // Convert USD to target
    let convertedAmount = amountInUSD * exchangeRateInUSD[target];
    return convertedAmount;
}
