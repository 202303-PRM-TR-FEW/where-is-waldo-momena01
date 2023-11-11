const whereIsWaldo = (arr) => {
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] !== arr[0][0]) {
                return [row + 1, col + 1];
            }
        }
    }
    return "No Waldo found";
}
console.log(whereIsWaldo([
    ["O", "O", "P", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"]
]));
console.log(whereIsWaldo([
    ["c", "c", "c", "c"],
    ["c", "c", "c", "d"]
]));
/* itreate over outer array
    compare it with other arraies if no match
    itreate over inner array
    compare indexes if there is no match
        return out index, inner index */
//----------------------------------------------
/* write fun find the different letter and retarn (num of arr , num of index)*/
