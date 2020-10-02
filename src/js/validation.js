  function validationMinMax(formValue){ //o html tem algumas regras também, como valor aceito, de 0 a 999
  if(formValue.value){ //sendo value o valor atual
    const value = parseInt(formValue.value) //parseInt para transformar as Strings recebidas em Integer 
    const minValue = parseInt(formValue.min) 
    const maxValue = parseInt(formValue.max) 
    if(value < minValue) { // se o valor inserido é menor que o valor que o formulário exige
      formValue.value = formValue.min; //será inserido o  valor mínimo
    }
    if(value > maxValue) { //caso o valor inserido seja maior que o maxValue 
      formValue.value = formValue.max; // o valor inserido será o máximo que o formulário aceita
    }
  }
}

