var status_menu = 0;
var menu = document.querySelector(".menu");
var items_menu = document.querySelector(".content-items")
var botao_menu = document.querySelector(".button-menu")

function menuClick() {
	if (status_menu == 0) {
		menu.classList.add("menu-active");
		items_menu.style.marginWidth = "20px"
		items_menu.style.display = "block"
		botao_menu.style.backgroundColor = "transparent"
		status_menu = 1;
	} else {
		menu.classList.remove("menu-active");
		items_menu.style.marginWidth = "0px"
		items_menu.style.display = "none"
		botao_menu.style.backgroundColor = "rgba(0,0,0, 0.2)"
		status_menu = 0;
	}
}