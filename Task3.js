function task3(val){
	var arr = [];
  
	 for(i=1; i <= val; i++){
			if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
        arr.push("yu-gi-oh");
			}
      else if(i % 2 === 0 && i % 3 === 0){
			  arr.push("yu-gi");
			}
      else if(i % 2 === 0 && i % 5 === 0){
			  arr.push("yu-oh");
			}
			else if(i % 2 === 0){
			  arr.push("yu");
			}
			else if(i % 3 === 0){
			  arr.push("gi");
			}
			else if(i % 5 === 0){
				arr.push("oh");
			}
		}
	 console.log(arr);
}
task3(100);
task3(10);