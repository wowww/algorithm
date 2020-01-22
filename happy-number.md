# LeetCode - Happy Number
https://leetcode.com/problems/happy-number/  

## 문제 설명
Write an algorithm to determine if a number is "happy".  

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.  

각 자리수마다 제곱한 수를 더하여 최종 결과가 1이 되는지 안되는지 판별하여 1이 되면 HappyNumber라고 한다.  

> 예를 들어 19 는  
> 
> **Input**: 19
> **Output**: true
> **Explanation:** 
> 1^2^ + 9^2^ = 82
> 8^2^ + 2^2^ = 68
> 6^2^ + 8^2^ = 100
> 1^2^ + 0^2^ + 0^2^ = 1 
> 
> 최종 결과가 1이므로 이 숫자는 **HappyNumber**입니다.   
> 
> [위키피디아: HappyNumber](https://en.wikipedia.org/wiki/Happy_number)  


## solution.js
``` javascript
const isHappy = (number, dp = []) => {
  if (number === 1) return true;
  
  const result = Array.from(String(number))
    .map(string => Math.pow(+string, 2))
    .reduce((total, number) => (total += number));
  if (dp.includes(result)) return false;
  dp.push(result);

  return isHappy(result, dp);
};

console.log(isHappy(11)); // true
console.log(isHappy(12)); // false
```

## comment
- `Array.from()` 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable objext)를 얕게 복사(shallow-copied)해 새로운 Array 객체를 만듭니다.  

- `String(number)`: String()으로 number를 형변환, 숫자 타입 number를 문자 타입으로 형변환해서 대입합니다.  

- `map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.  

- `MAth.pow()` 함수는 **base**를 **exponent**번 곱한 결과, 즉 base^exponent^ 를 반환합니다.  
    `Math.pow(base, exponent)`

- `reduce()` 메서드는 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환합니다. 
    ``` javascript
    const array = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    // 1 + 2 + 3 + 4
    console.log(array.reduce(reducer)); 
  // expected output: 10
  
  // 5 + 1 + 2 + 3 + 4
  console.log(array.reduce(reducer, 5));
  // expected output: 15
    ```

- `includes()` 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.  
    ``` javascript
    const array = [1, 2, 3];
    
    console.log(array.includes(2)); // true
    
    const myNameSpelling = ['L', 'i', 'a'];
    
    console.log(myNameSpelling.includes('i')); // true
    console.log(myNameSpelling.includes('k')); // false
    ```

- `push()` 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.  

