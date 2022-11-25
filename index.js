function distanceFromHqInBlocks(hq){
    if(hq === 43){
        return(1);
    }
    else {
        return (8);
    }
}
function distanceFromHqInFeet(block){
    if(block===43) {
        const length = (block-42)*264;
        return length; 
    } else{
        return (2112);
    }
}
function distanceTravelledInFeet (d,b)
{
    if (b>d)
    {
        const long = (b - d)*264;
        return (long);
    }else if (d > b) {
        const long = (d-b)*264;
        return (long);
    }
}
function calculatesFarePrice(start, destination){
    const cal = distanceTravelledInFeet(start, destination)
    let nop;
    if(cal<=400)
    {
        nop = 0;
    }else if (cal>400 && cal<2000){
        nop = 2.56;
    }
    else if(cal>2000&&cal<2500)
    { nop = 25;
    } else if (cal>2500) {
        nop= 'cannot travel that far';
    }
    return nop;
}