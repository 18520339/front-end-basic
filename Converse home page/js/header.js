window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	var search_box = document.getElementById('search-box');

	if (
		document.body.scrollTop > 80 ||
		document.documentElement.scrollTop > 80
	) {
		search_box.style.width = '10%';
		search_box.getElementsByTagName('span')[0].style.display = 'none';
		search_box.style.justifyContent = 'center';
	} else {
		search_box.style.width = '43%';
		search_box.getElementsByTagName('span')[0].style.display = 'block';
		search_box.style.justifyContent = 'space-between';
	}
}
