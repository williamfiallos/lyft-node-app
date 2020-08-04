function cutString(str){
    const stringLength = str.length 
    let newArray = [];

    if(stringLength<2) return ""

    for (let i=2; i < stringLength; i+=3) {
        newArray.push(str[i]);
    }

    return newArray.join("")
}

module.exports = { cutString }; 