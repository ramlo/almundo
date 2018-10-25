module.exports = function(t) {
    
    let func = {
        ini:0,
        fin:0,
        mIndex:0,
        img:0
    }

    if (!(validate(t))){
        return "El valor debe ser mayor igual a 1 y entero"
    }
    let acum = getFunctionDetails(t);
    setFunctionDetails(acum)
    console.log(func);

    function validate(num){
     return (num<1 || (num % 1 !== 0))?false:true
    }

    function getFunctionDetails (num) {
        let acum=3;
        while(acum < num){
            acum+=acum;
        }
        if(acum-2>num){
            acum=acum/2
        }
        return acum;
    }

    function setFunctionDetails(acum){
        func.mIndex=acum
        func.ini=acum-2
        func.fin=func.ini+func.mIndex-1
        func.img=-t + func.fin+1;
    }
 return func.img;
}