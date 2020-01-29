# Node.js 입력 받기

프로그래머스같이 경우 입력이 자동으로 되기 때문에 함수만 작성하면 된다. 그러나 구름ide 또는 백준 알고리즘 같은 경우 테스트 케이스 입력을 받기 위한 코드를 작성해야 한다. Node.js로 입력받는 방법을 간단하게 정리해본다.  

## readline 실행
```
$ node 파일명
```
터미널 창에서 'node 파일명'을 입력해준다.


## readline
``` javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  console.log("hello !", line);
  rl.close();
}).on("close", function() {
  process.exit();
});
```

위 코드는 사용자로 부터 한 줄의 입력만 받고 프로그램이 종료되게 된다. 만약 위의 코드에서

``` javascript
re.colse();
```
부분이 없다면 무한으로 입력을 받으며 받은 만큼 실시간으로 console.lg를 찍게 된다.  

간단한 예로 두 수를 공백으로 구분지어 입력받은 후 합을 구해 출력하는 코드를 살펴보자.  

``` javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    console.log(input[0] + input[1]);
    process.exit();
  });

// 입력 : 1 2
// 출력 : 3
```

여기서 알아두어야할 것은 이 코드를 콘솔에서 실행하게 되면 close 이벤트에 걸리지 않아서 console.log가 찍히지 않고 입력만 계속해서 받게 된다. 그 이유는 콘솔에서 실행했기 때문이다. 콘솔에서는 interactive shell이 계속 열려있기 때문에 자동으로 close가 호출되지 않는다. 그러나 이 코드를 구름 ide에서 실행하게 되면 [EOF](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC_%EB%81%9D)에 걸리게 되어 정상적으로 console.log가 찍힌다.  

> 백준 사이트나 구름 ide 같은 경우 알고리즘을 테스트하기 위한 테스트 데이터들이 파일에 존재한다. 콘솔에서 실행하면 키보드로부터 입력을 받기 때문에 계속해서 입력 이벤트를 대기하게 되지만, 파일을 받게 되는 경우에는 파일의 데이터가 끝이 나면 저동으로 EOF에 걸려 close되어 코드가 끝나는 것이다.
 

만약 두 줄, 세 줄의 입력을 받아야 한다면 아래와 같이 사용할 수 있다.  
``` javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    console.log(input);
    process.exit();
});
```
## 여러줄 입력
```
Ctrl + D
```
## close하는 방법
```
Ctrl + C
```

## 참고
[https://wooooooak.github.io](https://wooooooak.github.io/node.js/2018/09/26/Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0/)