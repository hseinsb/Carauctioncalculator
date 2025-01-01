function calculateMaxBid() {
    const erv = parseFloat(document.getElementById('erv').value);
    const titleStatus = document.getElementById('titleStatus').value;
    const rc = parseFloat(document.getElementById('rc').value);
    const af = parseFloat(document.getElementById('af').value);
    const th = parseFloat(document.getElementById('th').value);
    const lc = parseFloat(document.getElementById('lc').value);
    const oc = parseFloat(document.getElementById('oc').value);
    const profitPercent = parseFloat(document.getElementById('profit').value) / 100;

    let adjustedERV, totalCosts, desiredProfit, maxBid;

    if (titleStatus === 'salvage') {
        adjustedERV = erv * 0.8; // Depreciated ERV
        totalCosts = rc + af + th + lc + oc; // Total costs excluding salvage title costs
        desiredProfit = adjustedERV * profitPercent; // Profit from depreciated value
        maxBid = adjustedERV - (totalCosts + desiredProfit); // Max bid based on depreciated value
    } else { // Clean title
        totalCosts = rc + af + th + lc + oc;
        desiredProfit = erv * profitPercent;
        maxBid = erv - (totalCosts + desiredProfit); // Subtract from the original ERV
    }

    document.getElementById('result').innerHTML = `Maximum Bid Price: $${maxBid.toFixed(2)}`;
}
