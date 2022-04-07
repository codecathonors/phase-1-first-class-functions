function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return receivesAFunction
}
//non anon


const returnsAnAnonymousFunction = () => {
    return () => {
        
    }
}