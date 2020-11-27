document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573126340605";

  let resp = document.querySelector("#respuesta");
  let nombre = document.querySelector("#name").value;
  let correo = document.querySelector("#email").value;
  let comentario = document.querySelector("#comments").value;


  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_DANIEL SUAREZ DEV_*%0A
		*Frontend Developer Freelancer*%0A%0A
		*Hola me llamo...*%0A
		${nombre}%0A
		*Email:*%0A
		${correo}%0A
		*Comentario:*%0A
		${comentario}`;

  if (nombre === "" || correo === "" || comentario === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${nombre}`;

  window.open(url);
});