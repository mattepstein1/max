function countdown() {
    const countToDate = new Date('2024-12-29T09:30:00').getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display result
    document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // When countdown finishes
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerText = "The specified time has arrived!";
    }
}

// Update the countdown every 1 second
const interval = setInterval(countdown, 1000);
