//your JS code here. If required.
let btn = document.getElemntbyId('incrementBtn');
let counter = document.getElementId('counter');

let count = 0;
counter.innerHTML = count;
btn.addEventListener('click',()=>{
	alert(count);
	count++;
	counter.innerHTML = count;
})