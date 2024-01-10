this.onmessage = function ()
{
    let  y = 0;
    for( i = 1 ; i <  1000000000; i ++){
        y-= i
    }

    this.postMessage(y)
}