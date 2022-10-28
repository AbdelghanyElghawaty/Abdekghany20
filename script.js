var size = +prompt("Enter the size");
var arr = [];
var element = 0 ;
var count = 0 ;
for(var i = 0 ; i < size ; i++ )
{
 var n = +prompt("Enter the number : ")
 arr.push(n);
 var tempelement = arr[i] ;
 var tempcount = 0 ;
 for(var j = 0 ; j < size ; j++ )
 {
   if( arr[j] == tempelement)
   tempcount++;
   if(tempcount > count )
   {
    count = tempcount ;
    element = tempelement ; 
   }
 }
}
alert ("Most frequant Number is : " + element  +" || Times of frequant is  : " + count );