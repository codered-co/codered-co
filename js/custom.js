(function () {

	$("#mainHeader").addClass('header-background');

	document.getElementById("open-nav").addEventListener("click", function (event) {
		event.preventDefault();
		document.body.classList.toggle("nav-open");
	});
	
})();

