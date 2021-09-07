//----------------
//----------------
// 기본 문제 풀이
//----------------
//----------------

// 2. 삼각형 판별하기
let solution = (a,b,c)=>{
    let answer="YES", max;
    let tot = a + b + c;
    if(a > b) max = a;
    else max = b;
    if(c > max) max = c;
    if((tot - max) <= max) answer = 'no'
    return answer;
}


// console.log(solution(6, 7, 11));


// 3. 연필개수
function solution1_3(n){
    let answer;
    answer=Math.ceil(n/12); //올림
    // answer=Math.floor // 내림
    // answer=Math.round // 반올림
    // answer=Math.sqrt //제곱근
    return answer;
}

// console.log(solution1_3(178));


// 4. 1부터 N까지의 합
function solution1_4(n){
    let answer=0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
    }
    
    return answer;
}

// console.log(solution1_4(10));

// 5. 최솟값 구하기
function solution1_5(arr){
    let min;
    for(let i = 0; i < arr.length; i++){
        if(i === 0) min = arr[0]
        else {
            if(Number.parseInt(arr[i],10) < parseInt(min,10)) min = arr[i]
        }
    }
    return min;
}

// let arr=[5, 7, 10, 3, 2, 9, 11, '1원'];
// console.log(solution1_5(arr));

// 6. 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램
function solution1_6(arr){
    let tot = 0, min = Number.MAX_SAFE_INTEGER, results = [];

    for(let i = 0; i < arr.length; i++){
        let x = arr[i];        
        if(x % 2 === 1) {
            tot += x;
            if(x < min) min = x;
        }
    }

    results.push(tot);
    results.push(min);
    return results;
}

// let arr=[12, 77, 38, 41, 53, 92, 85];
// console.log(solution1_6(arr));

// 7. 10부제
// 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력
function solution1_7(day, arr){
    let answer=0;
    let dayToStr = day+"";
    // 방법 1.
    // 정규식을 사용하여 비교
    // day = (day+"").replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // 이스케이프 처리
    // let regExp = new RegExp(day + '$','gi');    
    // arr.forEach(element => {
    //     if(regExp.exec(element)) {
    //         answer++;
    //     }
    // });

    // 방법 2.
    // 마지막 문자를 찾아서 day와 비교
    arr.forEach(value => {
        let valueToStr = (value+"");
        let valueToStrLen = valueToStr.length;
        // 2-1. 마지막 문자열 자르기
        // slice(문자열 시작 index, )
        // if(valueToStr.slice(-1,valueToStrLen) === dayToStr) answer++;
        // if(valueToStr.slice(-1) === dayToStr) answer++;
        // if(valueToStr.slice(valueToStrLen-1) === dayToStr) answer++;
        // if(valueToStr.slice(valueToStrLen-1,valueToStrLen) === dayToStr) answer++;

        // substring(문자열 시작 index, 끝 index)
        // if(valueToStr.substring(valueToStrLen - 1, valueToStrLen) === dayToStr) answer++;
        // if(valueToStr.substring(valueToStrLen - 1) === dayToStr) answer++;

        // substr(문자열 시작 index, 자를 length)
        // if(valueToStr.substr(valueToStrLen - 1) === dayToStr) answer++;
        // if(valueToStr.substr(valueToStrLen - 1,1) === dayToStr) answer++;

        // charAt(가져올 index)
        // if(valueToStr.charAt(valueToStrLen - 1) === dayToStr) answer++;
    })

    // 방법 3.
    for(let x of arr){
        if(x%10==day) answer++;
    }

    return answer;
}

// let arr=[25, 23, 11, 47, 53, 17, 33];
// console.log(solution1_7(3, arr));

// [추가] foreach, map, filter, reduce

// foreach
let a= [10, 11, 12, 13, 14, 15];
let answer = a.forEach(function(v, i){
    // console.log(v,i,this)
},[1,2]);

// function forEach(predicate, thisArg) {
//     for(let i = 0; i < a.length; i++){
//         predicate(a[i], i);
//     }
// }

// map : 원본 배열과 return 되는 배열은 길이가 같다
let answer2 = a.map((v,i)=>{    
    if(v%2 === 0) return v*v;
},[1,2])

// function map(predicate, thisArg){
//     let list = [];
//     for(let i = 0; i < a.length; i++){
//         list.push(predicate(a[i], i));
//     }
//     return list;
// }

// filter
let answer3 = a.filter((v,i)=>{    
    return v%2 === 1;
},[1,2])

// function filter(predicate, thisArg){
//     let list = [];
//     for(let i = 0; i < a.length; i++){
//         if(predicate(a[i], i)) list.push(a[i]);
//     }
//     return list;
// }

// reduce : acc에 return되는 값이 넘어옴, v는 배열 각 요소
let answer4 = a.reduce((acc,v)=>(acc + v),0)
// function reduce(predicate, value){
//     let result = value;
//     for(let i = 0; i < a.length; i++){
//         result =  predicate(result, a[i]);
//     }
//     return result;
// }


// 8. 일곱난쟁이
// 9개의 100을 넘지 않은 자연수 배열이 주어졌을 때 7개의 자연수만의 합이 100이다. 나머지 2개 수를 구하라.
function solution1_8(arr){
    let result = arr;
    let sum = result.reduce((a,b) => a+b,0);

    loop1 :
    for(let i = 0; i < arr.length - 1; i++){
        loop2 :
        for(let j = i + 1 ; j < arr.length; j++){
            if(sum - (arr[i] + arr[j]) === 100){
                result.splice(j,1);
                result.splice(i,1);
                break loop1;
            }
        }
    }
    return result;
}

// let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution1_8(arr));

// 9. A를 #으로
function solution1_9(str){
    let answer = '';

    // 1. 정규식
    // answer = str.replace(/A/g,'#');

    // 2. for
    // for(let element of str ){
    //     if(element === 'A') answer += '#'
    //     else answer += element
    // }
    return answer;
}

// let str="BANANA";
// console.log(solution1_9(str));

// 10. 문자 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지, 문자열의 길이는 100을 넘지 않음
function solution1_10(str, searchChar){
    let answer = 0;
    
    // 1. for of
    // for(let ele of str){
    //     if(ele === searchChar) answer++;
    // }

    // 2. match
    // let re = new RegExp(searchChar,'g');
    // let matchResult = !str.match(re) ? [] : str.match(re);
    // answer = matchResult.length;

    // 3. indexOf
    // let pos = str.indexOf(searchChar);
    // while(pos !== -1){
    //     answer++;
    //     pos = str.indexOf(searchChar, pos + 1);
    // }

    // 4. split
    // answer = str.split(searchChar).length;
    // if(answer > 0) answer--;

    return answer;
}

// let str="COMPUTERPROGRAMMING";
// console.log(solution1_10(str, 'R'));

// 11. 대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
function solution1_11(str){
    let answer = 0;

    // 1. match
    // let re = new RegExp('[A-Z]','g');
    // answer = !str.match(re) ? 0 : str.match(re).length;
    
    // 2. split
    // let re = new RegExp('[A-Z]','g');
    // answer = str.split(re).length - 1;

    // 3. charCodeAt
    // 문자열을 아스키코드로 변환, 대문자는 65 ~ 90
    // for(let element of str){
    //     let asciOfElement = element.charCodeAt(0);
    //     if(65 <= asciOfElement && asciOfElement <= 90) answer++;
    // }

    // 4. uppercase
    // for(let element of str){
    //     if(element.toUpperCase() === element) answer++;
    // }

    return answer;
}
// let str="KoreaTimeGood";
// console.log(solution1_11(str));

// 12. 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력 받아 대문자로 모두 통일하여 문자열을 출력
function solution1_12(str){
    let answer = '';

    // 1. toUpperCase
    // for(let element of str){
    //     answer += element.toUpperCase();
    // }

    // 2. charCodeAt
    // for(let element of str){
    //     let asciOfElement = element.charCodeAt();
    //     if(97 <= asciOfElement && asciOfElement <= 122) answer += element.toUpperCase();
    //     else answer += element;
    // }

    // 3. charCodeAt 2
    // for(let x of s){
    //     let num=x.charCodeAt();
    //     if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
    //     else answer+=x;
    // }

    return answer;
}

// let str="ItisTimeToStudy";
// console.log(solution1_12(str));

// 13. 대소문자 변환
// 대문자와 소문자가 같이 존재하는 문자열을 입력 받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력
const solution1_13 = (str) => {
    let answer = '';

    // 1.
    // for(let element of str){
    //     if(element === element.toUpperCase()) answer += element.toLowerCase();
    //     else if(element === element.toLowerCase()) answer += element.toUpperCase();
    // }

    // 2.
    // for(let element of str){
    //     let elementCharCode = element.charCodeAt();

    //     if(65 <= elementCharCode && elementCharCode <= 90) answer += String.fromCharCode(elementCharCode + 32);
    //     else if(97 <= elementCharCode && elementCharCode <= 122) answer += String.fromCharCode(elementCharCode - 32);
    // }

    return answer;
};

// console.log(solution1_13("StuDY"));

// 14. 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력
const solution1_14 = (arr) => {
    let answer = '', maxLen = Number.MIN_SAFE_INTEGER;

    // 1. 
    // for of : array, for in : object
    for(let element of arr){
        if(maxLen < element.length) {
            maxLen = element.length;
            answer = element;
        }
    }

    return answer;
}

// let str=["teacher", "time", "student", "beautiful", "good"];
// console.log(solution1_14(str));

// 15. 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
const solution1_15 = (str) => {
    let answer = '';
    
    // 1.
    // let strLen = str.length;
    // if(strLen % 2 === 0){
    //     answer += str[(strLen / 2) - 1];
    //     answer += str[(strLen / 2)];
    // } else answer += str[Math.floor(strLen / 2)];

    // 2.
    // substring, substr, slice
    const mid = Math.floor(str.length / 2);
    if(str.length % 2 === 1) {
        // answer = s.substring(mid, mid + 1);
        // answer = str.substr(mid, 1);
        answer = str.slice(mid, mid + 1);
    } else {
        // answer = s.substring(mid - 1, mid + 1);
        // answer = str.substr(mid - 1, 2);
        answer = str.slice(mid - 1, mid + 1);
    }

    return answer;
}

// console.log(solution1_15("study"));

// 16. 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력. 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지.
const solution1_16 = (str) => {
    let answer = '';

    // 1.
    // for (let element of str){
    //     if(answer.indexOf(element) === -1) answer += element;
    // }

    // 2.
    for (let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === i) answer += str[i];
    }

    return answer;
}

// console.log(solution1_16("ksekkset"));

// 17. 중복단어제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력, 출력하는 문자열은 원래의 입력순서를 유지
const solution1_17 = (str) => {
    let answer = new Array();

    // 1.
    // for(let element of str){
    //     if(answer.indexOf(element) === -1) answer.push(element);
    // }

    // 2.
    answer = str.filter((value, i) => str.indexOf(value) === i)

    return answer;
}

// let str=["good", "time", "good", "time", "student"];
// console.log(solution1_17(str));