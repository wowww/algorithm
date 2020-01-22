# LeetCode - Sing Number
https://leetcode.com/problems/single-number/   

## 문제 설명
Given a non-empty array of integers, every element appears twice except for one. Find that single one.  

**Note**:  
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?  

비어있지 않은 정수 배열에서, 하나는 뺀 모든 요소들은 두개씩 들어있다. 하나뿐인 요소를 찾아라.  
알고리즘은 선형 시간의 복잡도(O(n))를 가져야 한다. 추가적인 메모리를 사용하지 않고 가능한가?  

> 예제 1  
> 
> **Input**: [2, 2, 1]
> **Output**: 1
> 

> 예제 2
> **Input**: [4, 1, 2, 1, 2]
> **Output**: 4 

## solution.js
``` javascript
function singleNumber(numbers) {
	return numbers.reduce((prev, current) => prev ^ current, 0);
};
```

``` javascript
const singleNumber = function(nums) {
  let numbers = {};

  for (let i = 0; i < nums.length; i++){
      if(!numbers[nums[i]]){
          numbers[nums[i]] = true;
      }
      else{
          delete numbers[nums[i]];
      }
  }
  return Object.keys(numbers)[0];
};
```
## comment
- 비트 연산자
    |연산자|사용법|설명|
    |:---:|:--:|:--|
    |[비트단위 논리곱](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND)|`a & b`|두 피연산자의 각 자리 비트의 값이 둘다 1일 경우 해당하는 자리에 1을 반환합니다.|
    |[비트단위 논리합](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR)|`a | b`|두 피연산자의 각 자리 비트의 값이 둘다 0일 경우 해당하는 자리에 0을 반환합니다. |
    |[비트단위 배타적 논리합]()|`a ^ b`|두 피연산자의 각 자리 비트의 값이 같을 경우 해당하는 자리에 0을 반환합니다. [두 피연산자의 각 자리 비트의 값이 다를 경우 해당하는 자리에 1을 반환합니다.]|
    |[비트단위 부정](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT)|`~ a`|피연산자의 각 자리의 비트를 뒤집습니다. |
    |[왼쪽 시프트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift)|`a << b`|오른쪽에서 0들을 이동시키면서, a의 이진수의 각 비트를 b비트 만큼 왼쪽으로 이동시킨 값을 반환합니다. |
    |[부호 전파 오른쪽 시프트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift)|`a >> b`|사라지는 비트를 버리면서, a의 이진수의 각 비트를 b비트만큼 이동시킨 값을 반환합니다.|
    |[부호 없는 오른쪽 시프트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift)|`a >>> b`|사라지는 비트를 버리고 왼쪽에서 0을 이동시키면서 a의 이진수의 각 비트를 b비트만큼 이동시킨 값을 반환합니다.|    
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators  
    
- `delete` 연산자는 객체의 속성을 제거합니다. 제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수합니다.  
    ``` javascript
    delete object.property
    delete object['property']
    ```
    `object` 객체의 이름 또는 평가했을 때 객체를 반환하는 표현식.
    `property` 제거하려는 속성.  
    
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/delete  
