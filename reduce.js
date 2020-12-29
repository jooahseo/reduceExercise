
function extractValue(arr, key) { // I don't think this is right. 
    const newarr = [];
    arr.reduce(function(elem , next){
        newarr.push(next[key]);
    },arr[0][key])
    return newarr;

}


function vowelCount(str) {
    const vowels = 'aeiou';
    const strArr = str.split('');
    return strArr.reduce(function(acc, next){
        let lower = next.toLowerCase();
        if(vowels.includes(lower)){
            if(acc[lower]){
                acc[lower] +=1;
            }else{
                acc[lower] =1;
            }
        }
        return acc;
    },{})
}


function addKeyAndValue(arr, key, value) {
    arr.reduce(function(acc, current){
        current[key] = value;
        return acc;
    },[])
    return arr;
}


function partition(arr, callback) {
    return arr.reduce(function(acc, current){
        if(callback(current)){
            acc[0].push(current);
        }else{
            acc[1].push(current);
        }
        return acc;
    },[[],[]])
}
