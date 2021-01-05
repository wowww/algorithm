function solution(A, K) {
  const moveCount = K % A.length;
  if (moveCount === 0) return A;
  
  let moveItems = [];
  for (let i=0; i<moveCount; i++) {
      const item = A.pop();
      moveItems.unshift(item);
  }
  
  return moveItems.concat(A);
}