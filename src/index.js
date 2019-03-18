module.exports = function check(str, bracketsConfig) {
   let i=0;
   let iteration=str.length;
   let firstBracket;
   let secondBracket;
   while(i<iteration){
    for( let i=0; i<=bracketsConfig.length-1;i++)
    {
    firstBracket=bracketsConfig[i][0];
    secondBracket=bracketsConfig[i][1];
    SumBracket=firstBracket+secondBracket;
    str=str.replace(SumBracket,"");

};
   if(str=="")
   {return true;};
   i++;}
    if(str=="")
    {
    return true;
    }
    else{ 
    return false;
    }
}


