function receivesAFunction(callback){
    console.log(callback());
}


const returnsANamedFunction=()=>{return returnsANamedFunction};



function returnsAnAnonymousFunction(){
    return(()=> console.log('I am a Legend'))
}