
let servico = document.getElementsByClassName("servico");

for(let i = 0; i < servico.length; i++){

	servico[i].addEventListener("click", function displayServicoContent(){

		let s = document.getElementsByClassName("s");
		let arrow = document.getElementsByClassName("fa");

		if(s[i].style.display === "block"){
			s[i].style.display = "none";
			servico[i].style.maxHeight = "50px";
			arrow[i].innerHTML = "&#xf107";
		} else {
			s[i].style.display = "block";
			servico[i].style.maxHeight = "250px";
			arrow[i].innerHTML = "&#xf106";
		}
	});
}