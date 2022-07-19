function show(x){
    if(x>13){
        const result = (x-13)*2;
        console.log(result);
    }
    else if(x<13){
        const result = 13-x;
        console.log(result);
    }
}
show(15);
show(7);