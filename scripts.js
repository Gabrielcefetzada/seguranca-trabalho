
let dropMenu = document.getElementsByClassName('dropdown-content');
let servicoBtn = document.getElementsByClassName('servico-drop');

for(let i = 0; i < servicoBtn.length; i++){
		servicoBtn[i].addEventListener('mouseover', function mostraDrop() {
			if(dropMenu[0].style.display === 'block' && dropMenu[1].style.display === 'block' && dropMenu[2].style.display === 'block'){
				dropMenu[0].style.display = 'none';
				dropMenu[1].style.display = 'none';
				dropMenu[2].style.display = 'none';
			} else {
				dropMenu[0].style.display = 'block';
				dropMenu[1].style.display = 'block';
				dropMenu[2].style.display = 'block';
			}
		});
	}

