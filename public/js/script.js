const contenido = document.getElementById('cont-login');

const registro = document.getElementById('registro');
registro.addEventListener('click', () =>{
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
	  contenido.innerHTML = this.responseText;
	}
	xhttp.open("GET", "/views/registro/registro.html");
	xhttp.send();
});