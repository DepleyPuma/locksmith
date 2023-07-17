document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".nav");
	const navBtn = document.querySelector(".burger-btn");
	const allNavItems = document.querySelectorAll(".nav__item");

	const handleNav = () => {
		nav.classList.toggle("show");

		allNavItems.forEach((item) => {
			item.addEventListener("click", () => {
				nav.classList.remove("show");
			});
		});
	};

	const addShadow = () => {
		if (window.scrollY >= 500) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	};

	window.addEventListener("scroll", addShadow);
	navBtn.addEventListener("click", handleNav);
});
