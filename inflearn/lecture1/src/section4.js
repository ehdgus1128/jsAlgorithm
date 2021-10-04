//----------------
//----------------
// 완전 탐색 (브르투포스)
//----------------
//----------------
// 1. 자리수의 합
/**
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력.
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답.
 * 만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로
 */
const solution4_1 = (len, arr) => {
    // 1.
    /*
    let answer = NaN;
    let sum = 0;
    for(let x of arr){
        let sumOfx = 0;
        for(let y of x.toString()){
            sumOfx += parseInt(y);
        }
        
        if(sum < sumOfx || (sum === sumOfx && answer < x)){
            answer = x;
            sum = sumOfx;
        }
    }
    */
    // 2.
    /*
    let answer = 0, max = Number.MIN_SAFE_INTEGER;

    for(let x of arr){
        let sum = 0, tmp = x;
        // tmp는 10으로 나눈 몫, sum에는 나머지를 누적
        while(tmp){
            sum += (tmp % 10);
            tmp = Math.floor(tmp / 10);
        }
        if(sum > max) {
            max = sum;
            answer = x;
        } else if(sum === max){
            if(x > answer) answer = x;
        }
    }
    */
    // 3. 
    let answer = 0, max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
        if (sum > max) {
            max = sum;
            answer = x;
        }
        else if (sum === max) {
            if (x > answer)
                answer = x;
        }
    }
    return answer;
};
// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution4_1(7, arr));
// output : 137
// 2. 뒤집은 소수
/**
 * 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다.
 * 단, 910을 뒤집으면 19로 숫자화.
 */
const solution4_2 = (arr) => {
    let answer = [];
    // 1.
    /*
    for(let x of arr){
        let reverseStringOfX = '', tmp = x, reverseIntOfX = 0;
        // number를 string으로 바꿔서 뒤집는다.
        // tmp를 10으로 나눈 나머지의 string을 reverseStringOfX에 붙임
        // tmp를 10으로 나눈 몫은 tmp에 다시 넣음. Math.floor(tmp)를 하여 0이 되면 while break
        while(tmp){
            reverseStringOfX += (tmp % 10).toString();
            tmp = Math.floor(tmp / 10);
        }
        // string to int
        reverseIntOfX = parseInt(reverseStringOfX);
        // 소수는 1보다 크다
        if(1 < reverseIntOfX){
            // 2이면 소수
            if(reverseIntOfX === 2) answer.push(2);
            else {
                // 2보다 클 때
                // 2부터 해당 수 이전까지 나누었을 때 나머지가 없으면 소수가 아님
                for(let i = 2; i < reverseIntOfX; i++){
                    if(reverseIntOfX % i === 0) break;
                    else {
                        if(i === reverseIntOfX - 1) answer.push(reverseIntOfX);
                    }
                }
            }
        }
    }
    */
    // 2.
    for (let x of arr) {
        let res = 0;
        while (x) {
            let t = x % 10;
            res = res * 10 + t;
            x = Math.floor(x / 10);
        }
        if (isPrime(res))
            answer.push(res);
    }
    // 3.
    // for(let x of arr){
    //     let res = parseInt(x.toString().split('').reverse().join(''));
    //     if(isPrime(res)) answer.push(res);
    // }
    return answer;
};
function isPrime(num) {
    // 1이하 거르기
    if (num <= 1)
        return false;
    // 짝수 중 2 빼고 거르기
    if (num % 2 === 0)
        return num === 2 ? true : false;
    // 3 이상 루프를 돌리기 위해 제곱근3 (9) 아래인 소수 세개 거르기
    if (num === 3 || num === 5 || num === 7)
        return true;
    // 3 이상 제곱근 이하 홀수 중 약수 거르기
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0)
            return false;
    }
    return true;
}
// let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution4_2(arr));
// output : [23, 2, 73, 2, 3]
// 3. 멘토링
/**
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정함.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 것이 되었다면, A학생은 M번의 수학테스트에서
 * 모두 B학생보다 등수가 앞서야 된다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우의 수를 출력
 */
const solution4_3 = (arr) => {
    let answer = 0;
    // 1.
    /*
    if(arr.length > 0){
        if(arr[0].length > 0){
            // 최소 배열 초기화로 주어진 배열의 첫 배열 요소
            let minArr = arr[0];
            // 첫 배열 요소를 넣었으므로 1부터 루프를 돌려 최소 값을 비교
            for(let i = 1 ; i < arr.length ; i++){
                for(let j = 0 ; j < arr[0].length; j++){
                    if(arr[i][j] < minArr[j]) minArr[j] = arr[i][j];
                    // 루프 마지막에는 각 요소 크기 비교
                    if(i === arr.length - 1 && j === arr[0].length - 1){
                        for(let k = 0; k < minArr.length - 1 ; k++){
                            for(let t = 1; t < minArr.length ; t++){
                                if(minArr[k] != minArr[t]) answer++;
                            }
                        }
                    }
                }
            }
        }
    }
    */
    // 2.
    // (멘토, 멘티) 경우의 수 : n명 X n명
    let m = arr.length, n = arr[0].length;
    // 학생 번호에 해당하는 경우의 수 루프
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i !== j) {
                let cnt = 0;
                // m개의 줄만큼 루프를 돌며 어떤 멘토가 멘티 번호를 계속 앞서는지
                for (let k = 0; k < m; k++) {
                    // pi, pj는 멘토, 멘티가 있는 위치 index
                    let pi = 0, pj = 0;
                    for (let s = 0; s < n; s++) {
                        if (arr[k][s] === i)
                            pi = s;
                        if (arr[k][s] === j)
                            pj = s;
                    }
                    if (pi < pj)
                        cnt++;
                }
                if (cnt === m)
                    answer++;
                // (3,1) (3,2) (4,2)
            }
        }
    }
    return answer;
};
// let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
// console.log(solution4_3(arr));
// output : 3
// 4. 졸업선물
/**
 * 선생님이 가지고 있는 예산으로 최대 몇 명에게 선물을 사줄 수 있는지 구하는 프로그램
 * 선생님은 상품 하나를 50% 할인해서 살 수 있는 쿠폰을 가지고 있다. 배송비는 할인에 포함 X
 * 입력은 예산과 각 학생들이 받고 싶은 상품의 가격과 배송비 리스트
 * 상품가격은 짝수로만 입력
 */
const solution4_4 = (n, arr) => {
    let answer = 0;
    // 1.
    /*
    // 상품비가 작은->큰 순으로 정렬
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        if(arr[i + 1][0] < arr[i][0]){
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
        }
    }
    // 배열의 앞에서부터 예산에서 총 합을 빼기, 답++
    // 총 합이 남은 예산보다 크면 상품비 / 2 + 배송비를 빼봄
    // 쿠폰 사용 여부를 flag
    let flag = true;
    for(let x of arr){
        let sum = x[0] + x[1];
        if(n - sum >= 0) {
            answer++;
            n = n - sum;
        } else {
            if(flag){
                flag = false;
                sum = x[0] / 2 + x[1];
                if(n - sum >= 0) {
                    answer++;
                    n = n - sum;
                } else {
                    flag = true;
                }
            } else break;
        }
    }
    */
    // 2.
    // 큰 순 정렬 후 하나씩 반값 할인 후 나머지 원소들의 합을 빼봐서 제일 큰 카운트 max
    // 22 43 45 66 103
    let m = arr.length;
    arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    for (let i = 0; i < m; i++) {
        let money = n - (arr[i][0] / 2 + arr[i][1]);
        let cnt = 1;
        for (let j = 0; j < m; j++) {
            if (j !== i && (arr[j][0] + arr[j][1]) > money)
                break;
            if (j !== i && (arr[j][0] + arr[j][1]) <= money) {
                money -= arr[j][0] + arr[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
};
// let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
// console.log(solution4_4(28, arr));
// output : 4
// 5. K번째 큰 수
/**
 * 갖고 있는 카드 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 한다.
 * 같은 카드가 여러장 있을 수 있다.
 * 3장을 뽑을 수 있는 모든 경우를 기록한다. 기록한 값 중 K번째로 큰 수를 출력한다.
 * 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 ... 이고 K가 3이라면 K번째 큰 값은 22
 */
const solution4_5 = (k, arr) => {
    let answer = -1;
    // 1.
    /*
    let len = arr.length, tmpArr : number[] = [];
    // arr.sort((a, b) => b - a);
    for(let i = len - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] < arr[j + 1]){
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    loop1 :
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            for(let f = 0; f < len; f++){
                if(i < j && j < f){
                    let sum = arr[i] + arr[j] + arr[f];
                    if(tmpArr.indexOf(sum) === -1){
                        tmpArr.push(sum);
                        if(tmpArr.length === k){
                            answer = sum;
                            break loop1;
                        }
                    }
                }
            }
        }
    }
    */
    // 2.
    // 모든 경우 : 10C3
    // 중복 제거 : Set
    let tmp = new Set();
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let f = j + 1; f < n; f++) {
                tmp.add(arr[i] + arr[j] + arr[f]);
            }
        }
    }
    let a = Array.from(tmp).sort((a, b) => b - a);
    answer = a[k - 1];
    return answer;
};
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution4_5(3, arr));
// output : 143
