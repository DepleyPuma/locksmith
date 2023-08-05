document.addEventListener("DOMContentLoaded", function () {
	const navMobile = document.querySelector(".nav-mobile");
	const navDesktop = document.querySelector(".nav-desktop");
	const navBtn = document.querySelector(".burger-btn");
	const allNavItems = document.querySelectorAll(".nav__item");
	const footerYear = document.querySelector(".footer__year");

	const handleNav = () => {
		navMobile.classList.toggle("show");
		document.body.classList.toggle("sticky-body");

		allNavItems.forEach((item) => {
			item.addEventListener("click", () => {
				navMobile.classList.remove("show");
				document.body.classList.remove("sticky-body");
			});
		});
	};

	const addShadow = () => {
		if (window.scrollY >= 200) {
			navDesktop.classList.add("shadow-bg");
		} else {
			navDesktop.classList.remove("shadow-bg");
		}
	};

	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};

	handleCurrentYear();
	window.addEventListener("scroll", addShadow);
	navBtn.addEventListener("click", handleNav);
});
