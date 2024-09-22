//your JS code here. If required.
let btn = document.getElementById('incrementBtn');
let counter = document.getElementById('counter');

let count = 0;
counter.innerHTML = count;
btn.addEventListener('click',()=>{
	alert(count);
	count++;
	counter.innerHTML = count;
})