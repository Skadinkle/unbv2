	// Get UNBv2 Root
function onGetPath(path) {
	path = path.match(/(^.*[\\\/]|^[^\\\/].*)/i);
	if(path != null) {
		return path[0];
	} else {
		alert("Missing Path: Unable to find element.");
		return false;
	}
}
root = onGetPath(document.getElementById("styles").href) + "./../";

	// Get Page Data
blankEmbed = "";
function onPageOpen(url, name) {

		// Save Data
	localStorage.unbv2_url = url;
	localStorage.unbv2_name = name;
	window.location = root + "./pages/page.html";
}

	// Add Page Contents
window.onload = function () {
	weh = false;
	var iframe = document.getElementById("iframe");
	if (typeof(iframe) != "undefined" && iframe != null) {
		onAddPage(localStorage.unbv2_url, localStorage.unbv2_name);
	}
		function onAddPage(url, name) {
			if (weh == false) {
			document.getElementById("title").innerHTML = name;
			document.getElementById("iframe").src = "https://" + atob(url);
			weh = true;
		}
	}
}