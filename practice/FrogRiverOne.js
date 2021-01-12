function solution(X, A) {
  let holdValues = new Set();
  for (i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
    if(holdValues.size === X) return i;
  }
  return -1;
}