// Y 위치까지 이동하기 위해 D의 길이만큼 몇번 이동 하는지
// X: 현재 위치
// Y: 도착지
// D: 일정한 점프하는 거리
function solution(X, Y, D) {
  const dist = Y - X;
  const jump = dist / D;
  const jumpCount = Math.floor(jump); 

  return jump ? jumpCount + 1 : jumpCount // 55%
  // return dist % D ? jumpCount + 1 : jumpCount // 100%
}

// Math.ceil을 이용한 풀이
function solution(X, Y, D) {
  return Math.ceil((Y-X)/D)
}