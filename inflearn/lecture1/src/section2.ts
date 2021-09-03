//----------------
//----------------
// 1, 2차원 배열 탐색
//----------------
//----------------

// 1. 큰 수 출력하기
// N개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력, 첫 번째 수는 무조건 출력
const solution1 = (arr : number[]) => {
    let answer:number[];

    // 1.
    answer.push(arr[0]);
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i - 1] < arr[i]) answer.push(arr[i]);
    }

    return answer;
}

// let arr=[7, 3, 9, 5, 6, 12];
// console.log(solution1(arr));

// 2. 보이는 학생
// 선생님이 N명의 학생을 일렬로 세웠다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 안 보임)
const solution2 = (arr : number[]) => {
    let answer: number = 0;

    // 1.
    let max:number = arr[0];
    answer++;
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]) {
            answer++;
            max = arr[i];
        }
    }

    return answer;
}

// let arr=[130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution2(arr));

// 3. 가위바위보
// 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력. 비길 경우에는 D를 출력.
// 가위, 바위, 보 정보는 1:가위, 2:바위, 3:보
// 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력
const solution3 = (a:number[], b:number[]) => {
    let answer:[] | string = [];

    // 1.
    // if(0 < a.length){
    //     for(let i = 0; i < a.length ; i++){
    //         answer.push(gameRule(a[i], b[i]));
    //     }
    // }

    // 2.
    answer = '';
    for(let i = 0; i < a.length; i++){
        if(a[i] === b[i]) answer += 'D ';
        else {
            if(
                (a[i] === 1 && b[i] === 3)
                || (a[i] === 2 && b[i] === 1)
                || (a[i] === 3 && b[i] === 2)
             ) answer += 'A ';
            else answer += 'B ';
        }
    }

    return answer;
}

function gameRule(a:number,b:number):string {
    let result:string;
    if(a === 1 && b === 3) {
        result = 'A';
    } else if(a === 3 && b === 1) {
        result = 'B';
    } else {
        if(a === b) result = 'D';
        else if(a < b) result = 'B';
        else if(b < a) result = 'A';
    }
    return result;
}

// let a=[2, 3, 3, 1, 3];
// let b=[1, 1, 2, 2, 3];
// console.log(solution3(a, b));

// 4. 점수계산
/*
OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진
시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기
로 하였다. 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가
답이 맞는 처음 문제는 1점으로 계산한다. 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째
문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계
산한다.
예를 들어, 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 틀린 경
우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 총 점수는
1+1+2+3+1+2=10 점이다.
 1 0 1 1 1 0 0 1 1 0
채점 1 0 1 1 1 0 0 1 1 0
점수 1 0 1 2 3 0 0 1 2 0
시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
*/

const solution4 = (arr:number[]) => {
    let answer = 0, cnt = 0;

    // 1.
    // answer += arr[0];
    // for(let i = 1; i < arr.length; i++){
    //     if(arr[i - 1] !== arr[i]) {
    //         cnt = 0;
    //         answer += arr[i];
    //     } else {
    //         if(arr[i] === 1){
    //             cnt++;
    //             answer += cnt + 1;
    //         }
    //     }
    // }

    // 2.
    for(let x of arr){
        if(x === 1){
            cnt++;
            answer+=cnt;
            console.log(cnt);
        } else cnt = 0;
    }

    return answer;
}

// let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution4(arr));

// 5. 등수구하기
// N명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력
// 같은 점수가 입력될 경우 높은 등수로 동일 처리
const solution5 = (arr:number[]) => {
    let answer = [];

    // 1.
    // for(let i = 0; i < arr.length; i++){
    //     let rank = 1;
    //     for(let j = 0; j < arr.length; j++){
    //         if(arr[i] < arr[j]) rank++;
    //         if(j === arr.length - 1) answer.push(rank);
    //     }
    // }

    // 2.
    let n = arr.length;
    answer = Array.from({length:n}, () => 1);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(arr[j] > arr[i]) answer[i]++;
        }
    }

    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution5(arr));