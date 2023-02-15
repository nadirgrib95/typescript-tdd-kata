export default function fizzBuzzKata(n: number): String[] {

  let arrayNotFizzed: number[] = new Array();
  let arrayFizzed: String[] = new Array();

  let j = 1;
  for (let i = 0; i < n; i++) {

      arrayNotFizzed[i] = j;
      j++;
  }

  for (let k = 0; k < n; n++) {
      if (arrayNotFizzed[k] / 3 && arrayNotFizzed[k] / 5) {

          arrayFizzed[k] = "FizzBuzz";
      } else if (n / 5) {

          arrayFizzed[k] = "Buzz";
      } else if (n / 3) {

          arrayFizzed[k] = "Fizz";
      } else {

          arrayFizzed[k] = arrayNotFizzed[k].toString();
      }
  }

  for (let q = 0; q < n; q++) {
      console.log(arrayFizzed[q]);
  }

  return arrayFizzed;
}
