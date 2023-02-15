// import hello from "../hello";
import FizzBuzz from "../FizzBuzz"

describe('FizzBuzz tdd test', () => {

    it('write my first test', () => {
        expect(1).toEqual(1)
    });

    it('Devrait retourner "Fizz" quand n est divisible par 3', async () => {
        let array = await FizzBuzz(3);
        expect(array.length).toEqual("Fizz");
    });

    it('Devrait retourner "Buzz" quand n est divisible par 5', async () => {
        let array = await FizzBuzz(5);
        expect(array.length).toEqual("Buzz");
    });

    it('Devrait retourner "FizzBuzz" quand n est divisible par 3 et par 5', async () => {
        let array = await FizzBuzz(15);
        expect(array.length).toEqual("FizzBuzz");
    });

    it('Devrait retourner n quand n nest pas divisible par 3 ou par 5', async () => {
        let n = 8;
        let array = await FizzBuzz(n);
        expect(array.length).toEqual(n);
    });
});


// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.


// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
