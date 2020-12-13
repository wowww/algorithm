# 프로그래머스 - 문자열 내 p와 y의 개수

``` javascript
function solution(s){
    var answer = false;
    var p = s.toLowerCase().split("p");
    var y = s.toLowerCase().split("y");
    
    if (p.length === y.length) {answer = true}
    return answer;
}
```