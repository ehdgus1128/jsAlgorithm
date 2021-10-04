// SORT

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
console.log(insertionSort(testArr, 10));
//========================================================================================