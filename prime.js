const count = Number(process.argv[2]);

if (isNaN(count)) {
  console.log('The program collects prime numbers up to the entered number\n\nUsage:\nnode prime.js [number]\n');
  process.exit(0);
}

console.log('\nMax number:', count.toLocaleString(), '\n');

let time = Date.now();

const prime = [];

for (let i = 3; i <= count; i += 2) {
  let isPrime = true;

  for (const j of prime) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) prime.push(i);
}

prime.unshift(2);

time = (Date.now() - time) / 1000;

console.log(prime.length, 'prime numbers found in', time, 'sec');
console.log(prime);
