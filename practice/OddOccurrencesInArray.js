// 홀수로 이루어진 배열이 주어지며 빈 배열은 없다.
// 모든 배열의 요소들은 딱 하나의 요소를 제외하고 모두 짝을 이룬다.
// 홀수번(1)인 배열의 요소를 리턴하면 된다.

function solution(A) {
  const obj = A.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {})
  for (let key in obj) {
    if (obj[key] % 2 === 1) {
      return parseInt(key)
    }
  }
}


// XOR 을 활용한 문제풀이법 
function solution(A) {
  var result = 0;
  for (var i = 0; i < A.length; i++) {
    result ^= A[i];
  }

  return result;
}