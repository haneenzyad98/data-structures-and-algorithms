module.exports=function BinarySearch (sortedarray,searchkey){
    let index=0;
     for(let i=0;i<sortedarray.length;i++){
     if(searchkey===sortedarray[i]){
       
       index=i;
       // console.log(searchkey)
          return  index;
      
     }
     }return -1;
 } 
     
