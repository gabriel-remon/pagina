export const validarCampoVacio = (e) => {
    const input = e.target;
    input.value.trim() ? clearError(input) : setError(input, "Campo requerido");
  };
  const validarLongitudMinima = (input, minimo) =>
  input.value.trim().length >= minimo;

export const validarNumero = (e) =>{
    const input = e.target;
    const numero = parseInt(e.target.value);
    if(Number.isInteger(numero))  {clearError(input); e.target.value = parseInt(e.target.value)}else setError(input, "Formato invalido");
};

const setError = (input, mensaje) => {
    /*
  const $small = input.nextElementSibling;
  $small.textContent = mensaje || `${input.name} requerido`;
  $small.classList.add("danger");
*/
input.classList.remove("inputOk");
input.classList.add("inputError");
};
const clearError = (input) => {
    /*
  const $small = input.nextElementSibling;
  $small.textContent = "";
  $small.classList.remove("danger");
*/
  input.classList.remove("inputError");
  input.classList.add("inputOk");
};
