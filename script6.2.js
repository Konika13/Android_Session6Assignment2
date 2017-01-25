 function sort(){

var arr=[108,151,66,75,164,85,53,96];

for(var i=0;i<arr.length;i++)
     {
            if(arr[i]>arr[i+1])
                 {
                     var b=arr[i];
                     arr[i]=arr[i+1];
                     arr[i+1]=b;
                }
     }
console.log(arr[arr.length-1])
}