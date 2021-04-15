function showNav() {
	let nav = document.querySelector('nav');

	nav.classList.toggle('active');
	if (nav.classList.contains('active'))
		return (nav.style.height =
			document.querySelector('nav ul').clientHeight + 'px');
	if (!nav.classList.contains('active')) return (nav.style.height = '');
}

let win = window.innerWidth;
window.addEventListener('resize', function () {
	const nav = document.querySelector('nav');
	if (win <= 768 && window.innerWidth > 768) {
		if (nav.classList.contains('active')) {
			nav.classList.remove('active');
			nav.style.height = '';
		}
	}
	win = window.innerWidth;
});
