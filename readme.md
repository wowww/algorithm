# 프로그래머스 - 완주하지 못한 선수

## 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.  

마라톤에 참여한 선수들의 이름이 담긴 배열 `paticipant`와 완주한 선수들의 이름이 담긴 배열 `completion`이 주어질 때, 완주하지 못한 선수들의 이름을 return 하도록 solution 함수를 작성해주세요.

## 제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 paticipant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 입출력 예
<img width="655" alt="스크린샷 2020-01-08 오후 12 03 41" src="https://user-images.githubusercontent.com/58850132/71947116-27b08700-320f-11ea-8bea-fe95b570f019.png">

## solution.js
``` javascript
function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for (let index = 0; index < participant.length; index++) {
    if (participant[index] !== completion[index]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[index];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}
```

## comment
처음에 참여자 배열 안에서 완주하지 못한 사람 1명을 랜덤으로 선발해내는 문제인 줄 알고 멘붕이 왔었다..   
입출력 예를 보니 이미 배열안에 참가자와 완주자가 들어가 있기때문에 !==으로 비교만 하면 되는 문제임을 알았다.  
문제를 잘 읽고 해결해나가야겠다.  
