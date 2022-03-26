const morseCode = { A:".-" , B:"-..." , C:"-.-." , D:"-.." , E:"." , F:"..-." , G:"--." , H:"...." , I:".." , J:".---" , K:"-.-" , L:".-.." , M:"--" , N:"-." , O:"---" , P:".--." ,Q:"--.-" , R:".-." , S:"..." , T:"-" , U:"..-" , V:"...-" , W:".--" , X:"-..-" , Y:"-.--" , Z:"--.." , 1:".----" , 2:"..---" , 3:"...--" , 4:"....-" , 5:"....." , 6:"-...." , 7:"--..." , 8:"---.." , 9:"----." , 0:"-----"}

function decodeMorse(code){
    return transNumber(code)
}
function getSingleWord(content){
    const word = content.split("   ") //因為每個單詞中間都是用三個空格分開，所以我這裡用三個空格作條件給split分成一個單詞一個字串，做成單一功能的函式
    // console.log(word);
    return word
}

function transNumber(input){ 
    const singleWord = getSingleWord(input)
    let result = []
    singleWord.forEach(x =>{ 
        const arr = x.split(' ') //因為每個單字中間都用一個空格作分開，所以我這裡這裡依序將剛剛分開的單詞用單空格分成單字，不加在剛剛那個函式的原因是因為我是要依序，如果放在剛剛那個函式內會變成一個一個字就沒有意義了
        console.log(arr);
        let codeNumber =[]  
        arr.forEach(x => { //這裡將每個單字用我建立的找value函式找出每個單字的value然後依序推進一開始建立的陣列
        codeNumber.push(findKeyByValue(morseCode , x))
    })
    const stack = String(codeNumber)//這裡之所以要重新宣告一個變數是因為我把codeNumber宣告在函式內，如果不這樣做，每次會有重複的東西加上新的東西
    result.push(stack)
    result.push(" ") //因為我是用一個單詞一個單詞依序做所以每個單詞推進陣列內接著再放進一個空格
    })
    return String(result).replace(/,/g , "") //最後這裡是將逗號去掉
}
function findKeyByValue(data , value){ //這裡是我上網找到的方法，用我一開始建立的Object物件的value去找key
    return Object.keys(data).find(x => data[x] === value)//先用keys這個語法找出一開始建立所有物件的keys然後用find函式去將資料庫內的value與我輸入的value做比對，找出絕對相等的回傳
}
  
//   console.log(decodeMorse("..   .-.. --- ...- .   -.-- --- ..-"))  // 印出 I LOVE YOU
//   console.log(decodeMorse("... --- ..."))  // 印出 SOS

  decodeMorse("..   .-.. --- ...- .   -.-- --- ..-")
  decodeMorse("... --- ...")