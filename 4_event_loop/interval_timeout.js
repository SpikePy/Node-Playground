console.log('Start Interval');

const interval = setInterval(() => {
    console.log(Date())
}, 1_000);

setTimeout(() => {
    clearInterval(interval)
    console.log('Stop Interval');
}, 10_000);
