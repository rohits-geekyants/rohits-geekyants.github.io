window.onload = () => {
	if (window.location.toString().includes("example")) {
		document.querySelector(".onPageNav").style.display = "none";
	}
	var script = document.createElement("script");
	var script1 = document.createElement("script");

	script.src = "https://www.googletagmanager.com/gtag/js?id=UA-177268399-1";
	var t = document.createTextNode(
		"window.dataLayer = window.dataLayer || [];function gtag() {	dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-177268399-1');"
	);
	script1.appendChild(t);
	document.head.appendChild(script);
	document.head.appendChild(script1);
};
