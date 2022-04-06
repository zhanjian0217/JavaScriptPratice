const list = [1, 2, 4, 2, 1, 4, 6, 8, 9, 2]

function printCount(arr) {
  // 實作內容
}

console.log(printCount(list))




const filteredArray = list.filter(function(ele , pos){
  return list.indexOf(ele) == pos;
}) 

console.log(filteredArray);


// 希望印出：
// 1: 2
// 2: 3
// 4: 2
// 6: 1
// 8: 1
// 9: 1