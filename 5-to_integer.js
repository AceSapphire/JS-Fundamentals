const args = process.argv.slice(2);
const firstArg = args[0];
const num = parseInt (firstArg);
if (!num && num !== 0) {
   console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
