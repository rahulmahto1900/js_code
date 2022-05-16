//click on element, add class on current element and remove class from all siblings

let childEle = document.querySelectorAll('.childElement');
childEle.forEach(element => {
	element.addEventListener("click", function () {
		[...element.parentElement.children].forEach(el => el.classList.remove('active')); 
		element.classList.add('active');
	});
})

