
var key="HeLLOworld";
var original="GARFIELD AND WENDY ARE STUDENTS of DEREK";
//var key="BIG";
//var original="THE BUTCHER THE BAKER AND THE CANDLESTICK MAKER";
function input() {
    original = document.getElementById("texts").value;  
    key = document.getElementById("keys").value;  

    encrypted=mainF(key,original);
    document.getElementById("encrypted_results").innerHTML = encrypted;
    window.alert("Result:"+encrypted);

}

function mainF(key,original){
    key=key.split(" ").join("").toUpperCase();
    var cleaned = original.split(" ").join("").toUpperCase();
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//0-25
    
    function nextLetter(letter,num)
    {
        let place=alphabet.indexOf(letter)+num;
        if(place<=25) {
            return alphabet[place];
        }else{
            return alphabet[place-26];
        }
    }
    
    var cleaned_len=cleaned.length;
    var key_len=key.length;
    
    var key_new="",result="";
    
    for (let i=0;i<cleaned_len;i++){
        key_new=key_new+key[i%key_len]
    }
    
    for (let i=0;i<cleaned_len;i++){
        key_letter=key_new[i]
        ori_num=alphabet.indexOf(cleaned[i])
        result=result+nextLetter(key_letter,ori_num)
    }
    
   return result;
}


//encrypted=mainF(key,original);

//window.alert(original+"\n"+key);
//window.alert(encrypted);
