// 1. SORT

// Selection Sort
// avg : n^2
function selectionSort (arr, len){
    let minIndx = 0;
    for(let i = 0; i < len; i++){
        minIndx = i;
        for(let j = 0; j < len; j++){
            if(i < j){
                if(arr[minIndx] > arr[j]) minIndx = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[minIndx];
        arr[minIndx] = tmp;
    }
    return arr;
}

// Bubble Sort
// avg : n^2
function bubbleSort (arr, len){
    for(let i = len - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

// Insertion Sort
// avg : n^2
function insertionSort (arr, len){
    if(len > 1){
        for(let i = 1; i < len; i++){
            let key = arr[i];
            let j = i - 1;
            while(j >= 0 && arr[j] > key){
                arr[j + 1] = arr[j];
                j--;
            }
            // key가 가장 작은 수라 j가 -1이 될 때까지 탐색을 하면
            // j + 1인 0번째에 가장 작은 수가 삽입된다.
            arr[j + 1] = key;
        }
    }
    return arr;
}

// Merge Sort
// avg : nlog2n
// https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html

const testArr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(selectionSort(testArr, 10));
// console.log(bubbleSort(testArr, 10));
// console.log(insertionSort(testArr, 10));

//========================================================================================

// 2. REMOVE DUPLICATES

// Sorted Array


//========================================================================================

// 번외 문제

// 어떤 문자열은 A와 B로만 이루어져 있고, B가 2번만 등장하는 특징이 있다.
// N의 길이를 가진 이 문자열을 사전 순으로 배열할 때, K번째 문자열의 두번째 B의 위치를 구하시오.
// ex) N은 문자열의 길이이다. N = 5 일 때, K = 1 -> AAABB, K = 2 -> AABAB ... K = 2 일 때, 두 번째 B의 위치는 5
// 문제 1. N = 10, K = 24 일 때, 두번째 B의 위치 P의 이진수를 구하시오

function findB(N, K) {
    let answer = 0; // 2번째 B의 위치
    
    if(N > 2){
        let cur = 1; // K 번째까지의 순서 (문자열을 생성 했으므로 1번째부터)
        let str = ''; // 문자열

        for(let i = 0; i < N; i++){ // 처음 문자열 생성 (BA가 맨 뒤로 오는 문자열)
            if(i === N - 2) str += 'B';
            else str += 'A';
        }
        console.log(str);
        for(let i = N - 3; 0 <= i; i--){ // 뒤에서 두번째 B를 한칸씩 앞으로 옮기며 루프
            // console.log(i, str)
            if(str[i] != 'B'){ // 한칸씩 앞으로 이동하면서 B로 치환하므로 i+1 은 무조건 B
                var strArr = str.split('');
                strArr[i] = 'B';
                strArr[i + 1] = 'A';
                str = strArr.join('');
            }
            // console.log(str);
            for(let j = N - i - 2; 0 <= j; j--){ // 두번째 B를 첫번째 B를 만나기 전까지 맨 뒤에서 부터 한칸씩 이동하면서 K번째 위치를 찾는다
                var copyStr = str; // 첫번째 B가 이동하는 str을 복사
                var strArr = copyStr.split('');
                strArr[i + j + 1] = 'B';
                copyStr = strArr.join('');
                cur++;
                answer = i + j + 1 + 1; // + 1을 하는 이유는 순서가 0부터 시작하므로
                if(cur === K) return answer.toString(2);
            }
        }
    } else if(N <= 2) answer = 1;

    return answer.toString(2);
}

// console.log(findB(10, 24));