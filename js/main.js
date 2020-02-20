var toggleButton = document.querySelector('.toggle');
var navList = document.querySelector('.navmenu');
var closeNav = document.querySelector('.close-nav');

var escpCloser = function (evt){
	if (evt.keyCode === 27) {
		modal.classList.remove('modal-show');
		document.removeEventListener('keyup',escpCloser);
	}
};

toggleButton.addEventListener('click', function(){
	navList.classList.toggle('active');
});

closeNav.addEventListener('click',function(){
	navList.classList.remove('active');
	document.removeEventListener('keyup',escpCloser);
})
