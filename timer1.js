const args = process.argv.slice(2);
const timer = function(time) {
  for (let i = 0; i < time.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time[i] * 1000); // Multiply by 1000 to convert seconds to milliseconds
  }
}
const seconds = args.sort(function(a, b) {
  return a - b;
});

timer(seconds);





