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

navBtn.addEventListener("click", handleNav);
