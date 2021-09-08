//----------------
//----------------
// 문자열 탐색
//----------------
//----------------

// 1. 회문문자열
/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 아니면 "NO"
 * 회문을 검사할 때 대소문자 구분하지 않음.
 */
const solution3_1 = (str:string):string => {
    let answer = "NO";

    // 1.
    // 가운데를 잘라서 첫 값과 마지막 값을 하나씩 비교.
    // if(str){
    //     let n = str.length;
    //     for(let i = 0; i < Math.floor(n / 2); i++){
    //         if(str[i].toUpperCase() !== str[n - i - 1].toUpperCase()) {
    //             answer = "NO";
    //             break;
    //         } else answer = "YES";
    //     }
    // }

    // 2.
    // answer = "YES";
    // str = str.toLowerCase();
    // let len = str.length;

    // for(let i = 0; i < Math.floor(len / 2); i++){
    //     if(str[i] !== str[len - i - 1]) return 'NO';
    // }

    // 3.
    // split reverse join method
    answer = "YES";
    str = str.toLowerCase();
    
    if(str !== str.split('').reverse().join('')) answer = 'NO';

    return answer;
}
// let str="goooGt";
// console.log(solution3_1(str));

// 2. 유효한 팰린드롬
/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열은 팰린드롬
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 아니면 "NO"
 * 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않음.
 */
const solution3_2 = (str:string):string => {
    let answer = 'YES';

    // 영어만 뽑는 정규표현식
    // str = str.replace(/[^a-zA-Z]/gi,'').toLowerCase();
    str=str.toLowerCase().replace(/[^a-z]/g, '');

    // 1.
    // let len = str.length;
    // for(let i = 0; i < Math.floor(len / 2); i++){
    //     if(str[i] !== str[len - i - 1]) return 'NO';
    // }

    // 2.
    let len = str.length;
    
    if(str !== str.split('').reverse().join('')) answer = 'NO';

    return answer;
}
// let str="found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution3_2(str));

// 3. 숫자만 추출
/**
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다.
 * 만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이다.
 * 추출하여 만들어지는 자연수는 100000000을 넘지 않는다.
 */
const solution3_3 = (str) => {
    let answer;

    // 1.
    // let maxNum = 100000000;
    // answer = parseInt(str.replace(/[^0-9]/g,''));
    // if(maxNum < answer) answer = NaN;

    // 2.
    // isNaN() / Number() 사용, parseInt() 사용하지 않기
    answer = 0;
    for(let x of str){
        if(!isNaN(x)) answer = answer*10 + Number(x);
    }

    return answer;
}
// let str="g0en2T0s8eSoft";
// console.log(solution3_3(str));

// 4. 가장 짧은 문자거리
/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력
 */
const solution3_4 = (str:string, t:string) => {    

    // 1.
    /*
    let answer = '';
    console.time("calculatingTime")

    let len = str.length;
    let currFind = str.indexOf(t);
    if(-1 < currFind) {
        let pastFind = -1;
        for(let i = 0; i < len;i++){
            if(i <= currFind) { // 현재 찾은 t 위치보다 i가 작거나 같으면
                if(-1 < pastFind){ // 전에 찾은 t 위치가 있으면, 중간 값을 찾아서 i 비교
                    answer = midByAnswer(currFind, pastFind, answer, i);
                } else answer += currFind - i; // 현재 위치에서 i를 빼기
            } else {
                if(-1 < currFind){ // 이전 찾은 값이 있으면,
                    // 새로운 t 위치를 찾아서 현재 찾은 값에 넣음
                    pastFind = currFind;
                    currFind = str.indexOf(t, pastFind + 1);
                    
                    if(-1 < currFind){ // 새로운 t를 찾으면, 중간 값을 찾아서 i 비교
                        answer = midByAnswer(currFind, pastFind, answer, i);
                    } else answer += i - pastFind;
                } else { // 이전 찾은 값이 없으면, i에서 이전 값을 빼기
                    answer += i - pastFind;
                }
            }
        }
    }
    
    console.timeEnd('calculatingTime'); // 0.103ms
    */

    // 2.
    // for문을 양방향으로 한번씩 돈다. : O(n)
    // 좌우로 돌면서 좌우에 있는 t 위치에서의 최소거리 : t가 아니면 ++, t면 0
    // 좌측에서 시작할 때는 최소거리('P')를 큰 값으로, 우측에서 시작할 때는 0으로
    // 좌우에서 최소거리('P') 중 작은 값으로 교체
    let answer:number[] = [];
    let p = 1000;
    for(let x of str){
        if(x === t){
            p = 0;
            answer.push(p);
        }
        else {
            p++;
            answer.push(p);
        }
    }

    p = 1000;
    for(let i = str.length - 1; 0 <= i; i--){
        if(str[i] === t){
            p = 0;
        }
        else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    
    return answer;
}

const midByAnswer = (currFind, pastFind, answer, i) =>{
    let mid = Math.floor((currFind + pastFind) / 2);                    
    if(i <= mid) answer += i - pastFind;
    else answer += currFind - i;
    return answer;
}
// 10121013210
// 012345678910
// 10122101110
// 65432101234
// let str="teachermode";
// console.log(solution3_4(str, 'e'));
// 출력 : 10121012210

// 5. 문자열 압축
/**
 * 알파벳 대문자로 이루어진 문자열을 입력 받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축
 * 반복횟수가 1인 경우는 생략.
 */
const solution3_5 = (str:string):string =>{
    let answer = '';

    // 1.
    // 첫문자는 answer에 붙이고 반복되는 횟수를 1로 초기화
    answer += str[0];
    let repeatCnt = 1;
    for(let i = 1; i < str.length; i++){
        if(str[i] !== str[i - 1]) { // 현재 값과 이전 값이 같지 않으면,
            if(1 < repeatCnt) answer += String(repeatCnt); // 반복 횟수가 1보다 크면 반복 횟수를 붙임
            answer += str[i]; // 현재 값을 붙임
            repeatCnt = 1;
        } // 현재 값과 이전 값이 같으면 반복 횟수만 늘림
        else repeatCnt++;
    }

    // 2.
    // let cnt = 1;
    // str += ' ';
    // for(let i = 0; i < str.length - 1; i++){
    //     if(str[i] === str[i + 1]) cnt++;
    //     else {
    //         answer += str[i];
    //         if(cnt > 1) answer += String(cnt);
    //         cnt = 1;
    //     }
    // }

    return answer;
}
// let str="KKHSSSSSSSE";
// console.log(solution3_5(str));
// 출력 : K2HS7E