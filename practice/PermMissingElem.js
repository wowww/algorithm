function solution(A) {
  A.sort((a, b)=> { return a - b}); // 오름차순 순으로 정렬
  for(i = 0; i < A.length; i++) {
    if(i+1 !== A[i]) {
      return i + 1
    }
  }
  return A.length + 1;
}
