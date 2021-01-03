// Binary Gap
// 2진수로 변환했을 때 1과 1 사이의 연속적인 0의 길이(length)가 가장 긴 것을 리턴

function solution(N) {
  var binaryNumber = N.toString(2);
  var binaryGaps = binaryNumber.slice(binaryNumber.indexOf('1'), binaryNumber.lastIndexOf('1'));
  var zeroCounted = binaryGaps.split('1').map(zero => zero.length);

  return zeroCounted.length ? Math.max(...zeroCounted) : 0;
}