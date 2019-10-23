//isIsogram("Dermatoglyphics") == true
//isIsogram("aba") == false
//isIsogram("moOse") == false // -- ignore letter case

/*function isIsogram(str){
    let arr = str.toLowerCase().split('');
    let isIsogram = true;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                isIsogram = false;
                break;
            }
        }
    }

    console.log(isIsogram);
}*/

// second solution
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}

// third solution
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}

//isIsogram("Dermatoglyphics");
//isIsogram("aba")
isIsogram("moOse")
