

let elementoServico = document.getElementsByClassName('elemento-servico'); 
let pServicos = document.getElementsByClassName('p-servico');
let pServicos2 = document.getElementsByClassName('p-servico2');

for(let i = 0; i < pServicos.length; i++){
	if(pServicos[i].className == 'p-servico') {
   pServicos[i].innerHTML = pServicos[i].innerHTML.substring(0,100); // limitar caracteres
 }
}

for(let i = 0; i < pServicos2.length; i++){
	if(pServicos2[i].className == 'p-servico2') {
   pServicos2[i].innerHTML = pServicos2[i].innerHTML.substring(0,2000); // expandir caracteres
 }
}

for(let i = 0; i < elementoServico.length; i++){
	elementoServico[i].addEventListener('click', function expandeElemento(){ // expandir elementos
		if(elementoServico[i].style.height === '30rem'){
			elementoServico[i].style.height = '8rem';		
				pServicos2[i].style.display = 'none';
				pServicos[i].style.display = 'block';

		} else {
			elementoServico[i].style.height = '30rem';
				pServicos2[i].style.display = 'block';
				pServicos[i].style.display = 'none';
		}		
	})
}

// tirar letras em maiusculo - PRONTO
// bug do submenu nos contatos - fazer com css - PRONTO
// textos grandes lá - problema tamanho div expandida
// redes sociais
// inserir links nos submenus - PRONTO
// corrigir opções do select do form de contato
// Logo
