function countOccurrences(arr, value) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }

    return count;
}

 console.log(countOccurrences([1, 2, 3, 1, 2, 1], 1)); 
console.log(countOccurrences(['a', 'b', 'a', 'c'], 'a')); 