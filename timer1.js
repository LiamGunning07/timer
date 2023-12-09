const args = process.argv.slice(2);
const seconds = args.filter(arg => !isNaN(arg) && arg >= 0).sort(function(a, b) {
  return a - b;
});

const timer = function(time) {
  for (let i = 0; i < time.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time[i] * 1000); // Multiply by 1000 to convert seconds to milliseconds
  }
};

if (seconds.length > 0) {
  timer(seconds);
} else {
  console.log("No valid positive numbers provided. Ending program.");
}