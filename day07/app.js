const list = [1, 2, 4, 2, 1, 4, 6, 8, 9, 2]

function printCount(arr) {
 const aa = new Object
 arr.forEach((e) => {
   if(aa[e]){
     aa[e]+ 1 
   }else{
     aa[e] = 1  
   }
  });
  
  return aa
// const item = {}
// arr.forEach(x => { item[x] = (item[x] || 0 ) + 1
  
// });
// return item 
}

console.log(printCount(list))

// 希望印出：
// 1: 2
// 2: 3
// 4: 2
// 6: 1
// 8: 1
// 9: 1
// s = ""
// a= "1112031584"

// for (i = 1 ; i < length[a] ; i++ ){
//     if (a[i] % 2 == a [i- 1 ] % 2 ) {
//         s += max(a[i], a[i-1])
//     }
// }
// goto_url('www.multisoft.se/' + s )