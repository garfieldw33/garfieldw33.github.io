
var key=[1,23,21,34,102,129];
var original="GARFIELD AND WENDY ARE STUDENTS of DEREK";
//var key="BIG";
//var original="THE BUTCHER THE BAKER AND THE CANDLESTICK MAKER";
function inputEnc() {
    original = document.getElementById("texts").value;  
    key = document.getElementById("keys").value;  


    encrypted=mainF(key,original);
    document.getElementById("encrypted_results").innerHTML = encrypted;
    document.getElementById("decrypted_results").innerHTML = "* * *";

    window.alert("Encrypted result :"+encrypted);

}

function inputDec() {
    original = document.getElementById("texts").value;  
    key = document.getElementById("keys").value;  

    decrypted=main_dec(key,original);
    document.getElementById("decrypted_results").innerHTML = decrypted;
    document.getElementById("encrypted_results").innerHTML = "* * *";
    window.alert("Decrypted result:"+decrypted);

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function randomKey(cleaned_len) {

    
    key_new=[];
    for (let i=0;i<cleaned_len;i++){
        key_new.push(getRndInteger(0,100));
    }
    return key_new;

}

function mainF(key,original){
    key=key.split(" ");
    key_temp=[];
    for(var i = 0; i < key.length; i++) {
        if (key[i]!="") key_temp.push(parseInt(key[i]))
        //key[i]=parseInt(key[i]);
    }
    key=key_temp;
    
    var cleaned = original.split(" ").join("").toUpperCase(); //toUpperCase
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//0-25
    

    
    var cleaned_len=cleaned.length;
    var key_len=key.length;

    var key_new=[],result="",show_key="";

    if (key_len==0) {
        key_new=randomKey(cleaned_len)
        for (let i=0;i<cleaned_len;i++){
            show_key=show_key+key_new[i]+" ";
        }
        document.getElementById("key_used").innerHTML = "[Random keys] "+show_key;
    }else{
        for (let i=0;i<cleaned_len;i++){
            key_new.push(key[i%key_len]);
            show_key=show_key+key[i%key_len]+" ";
        }
        document.getElementById("key_used").innerHTML = show_key;
    }

    
    for (let i=0;i<cleaned_len;i++){
        key_this=(key_new[i]+alphabet.indexOf(cleaned[i]))%26
        //ori_num=alphabet.indexOf(cleaned[i])
        result=result+alphabet[key_this]
    }
    
   return result;
}

function main_dec(key,original){
    key=key.split(" ");
    key_temp=[];
    for(var i = 0; i < key.length; i++) {
        if (key[i]!="") key_temp.push(parseInt(key[i]))
        //key[i]=parseInt(key[i]);
    }
    key=key_temp;
    
    var cleaned = original.split(" ").join("").toUpperCase(); //toUpperCase
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//0-25
    
    var cleaned_len=cleaned.length;
    var key_len=key.length;

    var key_new=[],result="",show_key="";

    if (key_len==0) {
        key_new=randomKey(cleaned_len)
        window.alert("Decrypted result may be pointless without sepecified keys");
        for (let i=0;i<cleaned_len;i++){
            show_key=show_key+key_new[i]+" ";
        }
        document.getElementById("key_used").innerHTML = "[Need key to decrypt][Random keys] "+show_key;
        //return "[Need key to decrypt]"
    }else{
        for (let i=0;i<cleaned_len;i++){
            key_new.push(key[i%key_len]);
            show_key=show_key+key[i%key_len]+" ";
        }

        document.getElementById("key_used").innerHTML = show_key;
    }

    
    for (let i=0;i<cleaned_len;i++){
        key_this= 26-(key_new[i]%26-alphabet.indexOf(cleaned[i]))
        if (key_this<0) key_this=key_this+26
        if (key_this>25) key_this=key_this-26
        //ori_num=alphabet.indexOf(cleaned[i])
        result=result+alphabet[key_this]
    }
    
   return result;
}
function custom_close(){
    //https://blog.csdn.net/qq_42445490/article/details/88819013
    if 
    (confirm("Sure to leave?")){
    window.opener=null;
    window.open('','_self');
    window.close();
    }
    else{}
}


//encrypted=mainF(key,original);

//window.alert(original+"\n"+key);
//window.alert(encrypted);
