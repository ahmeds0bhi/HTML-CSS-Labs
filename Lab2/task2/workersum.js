this.onmessage = function(){
    let x = 0;
    for( i = 0 ; i < 1000000000; i ++){
    x+= i
    }
    
    this.postMessage(x)
}

