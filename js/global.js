// Mobile menu handler
(() => {
	const menu = document.getElementById('main-navigation');

	// opening
    document.querySelector(".header__menu-toggle").addEventListener("click", () => {
        window.Phaistos.addClass(menu, 'header__navigation--open');
	});
	
	// closing
	[].slice.call(document.querySelectorAll(".header__menu-close, .header__backdrop, .header__submenu-link")).forEach((node) => {
        node.addEventListener('click', () => {
			window.Phaistos.removeClass(menu, 'header__navigation--open');
        });
    });
})();