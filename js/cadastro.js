function validar() {
  const nome = document.forms["meuFormulario"]["nome"].value;
  const email = document.forms["meuFormulario"]["email"].value;

  if (nome === "") {
      alert("Preencha o campo com seu nome");
      return false;
  }

  if (email === "") {
      alert("Preencha o campo com seu e-mail");
      return false;
  }
   return true;
}

