const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s", "t","u","v","w","x","y","z"];
const getIndex = (numberHouse, index) => {

    if((numberHouse + index) >= arr.length){
        let aux = ( numberHouse + index) - arr.length;
        return aux;
    }else{
        return index+numberHouse;
    }    
};

const myGetIndex = (numberHouse, index) => {

    let position = (index - numberHouse);
    //console.log(position);
    if( position >= 0){
        return position;
    }else{
        let aux = ( numberHouse - index);
        console.log(arr.length + " " +position);
        return (arr.length) + (position);
    }
};

module.exports ={

    decrypt(numberHouse, strToDecript){
        let strDecripted = "";
        try {
            let strExit = "";
            for (let i = 0; i < strToDecript.length; i++) {

                if(strToDecript[i] == " " || strToDecript[i] == "."){
                    strExit = strToDecript[i];
                }else{
                    let index = arr.indexOf(strToDecript[i]);
    
                    let newIndex = getIndex(numberHouse, index)
    
                     strExit = arr[newIndex+1];
                }
                strDecripted += strExit;
            }
            console.log(strToDecript);
            console.log(strDecripted);
            return strDecripted;
        } catch (error) {
            console.error(error);
        }
    },

    myDecrypt(numberHouse, strToDecript){
        let strDecripted = "";
        try {
            let strExit = "";
            for (let i = 0; i < strToDecript.length; i++) {

                if(strToDecript[i] == " " || strToDecript[i] == "."){
                    strExit = strToDecript[i];
                }else{
                    let index = arr.indexOf(strToDecript[i]);

                    let newIndex = myGetIndex(numberHouse, index)

                    strExit = arr[newIndex];
                }
                strDecripted += strExit;
            }
            console.log(strToDecript);
            console.log(strDecripted);
            return strDecripted;
        } catch (error) {
            console.error(error);
        }
    }

};