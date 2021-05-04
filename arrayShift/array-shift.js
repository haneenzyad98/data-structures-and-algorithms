module.exports=function insertShiftArray (arr,val){
   
    let m=Math.ceil(arr.length/2)
    let newarr=[]
   
    for(let i=0;i<arr.length;i++){
        newarr[i]=arr[i]
    }

    for(let i=m;i<arr.length;i++){
     newarr[i+1]=arr[i]
    }
    newarr[m]=val;
       
     return newarr;
    // console.log(newarr)
}
// insertShiftArray([2,4,6,8],5);