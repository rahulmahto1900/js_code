<script>
		let parentElement = document.querySelectorAll('.parent');
		
		parentElement.forEach(element => {
			element.addEventListener("click", function () {
				[...element.parentElement.children].forEach(el => el.classList.remove('active'))
				element.classList.add('active');
			});
		})

	</script>
