//your JS code here. If required.
// Function to generate a random delay between 1 and 3 seconds
function randomDelay() {
    return Math.floor(Math.random() * 3000) + 1000; // Returns a number between 1000 and 3000 ms
}

// Create an array of three promises
const promises = Array.from({ length: 3 }, (_, i) => {
    return new Promise((resolve) => {
        const delay = randomDelay();
        setTimeout(() => {
            resolve({ promiseName: `Promise ${i + 1}`, time: (delay / 1000).toFixed(3) }); // Resolve with name and time
        }, delay);
    });
});

// Add initial loading row
const output = document.getElementById('output');
output.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

// Use Promise.all to wait for all promises to resolve
Promise.all(promises).then((results) => {
    // Calculate total time taken
    const totalTime = results.reduce((sum, result) => sum + parseFloat(result.time), 0).toFixed(3);
    
    // Clear loading row
    output.innerHTML = '';

    // Populate the table with results
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${result.promiseName}</td><td>${result.time}</td>`;
        output.appendChild(row);
    });

    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
});
