
let dropMenu = document.getElementsByClassName('dropdown-content');
let servicoBtn = document.getElementsByClassName('servico-drop');

for(let i = 0; i < servicoBtn.length; i++){
		servicoBtn[i].addEventListener('click', function mostraDrop() {
			if(dropMenu[i].style.display === 'none'){
				dropMenu[i].style.display = 'block';
			} else {
				dropMenu[i].style.display = 'none';
			}
		});
	}

