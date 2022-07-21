// Exercise 6
function validate() {
  let nameCondition = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
  //"3" apariciones del elemento [x]
  let emailCondition = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  //[\w-] es lo mismo que [A-Za-z0-9_-].
  // tiene que contener un @
  let addressCondition =  /^.{3,}$/;;
  // tiene q tener @, puede ser.es q solo es de 2 caracteres i letras de a a la z mayus o minus
  
  let lastNameCondition = /^[a-zA-ZÀ-ÿ\s]{3,}$/;


  let passwordCondition = /^(?=.*[0-9])(?=.*[a-zA_Z]).{4,8}/;
  // coincidira con 0-9 si va seguido de a-zA_Z ( numeros, letras i entre 4 i 8 caracteres)

  let phoneCondition = /^\d{9}$/;
  //d{9}: Busca cualquier dígito (número arábigo). Equivalente a [0-9]. Por ejemplo, /\d/ o /[0-9]/

  // Get the input fields
  let name = document.getElementById("fName");
  let email = document.getElementById("fEmail");
  let adress = document.getElementById("fAddress");
  let lastname = document.getElementById("fLastN");
  let password = document.getElementById("fPassword");
  let phoneNumber = document.getElementById("fPhone");

  // Validate fields entered by the user: name, phone, password, and email
  if (name.value.match(nameCondition)) {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
  }else if(!name.value.match(nameCondition)) {
    name.classList.remove("is-valid");
    name.classList.add("is-invalid");
  }


  if (email.value.match(emailCondition)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  } else if(!email.value.match(emailCondition)) {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  }


  if (adress.value.match(addressCondition)) {
    adress.classList.remove("is-invalid");
    adress.classList.add("is-valid");
  } else if(!adress.value.match(addressCondition)) {
    adress.classList.remove("is-valid");
    adress.classList.add("is-invalid");
  }


  if (lastname.value.match(lastNameCondition)) {
    lastname.classList.remove("is-invalid");
    lastname.classList.add("is-valid");
  } else if(!lastname.value.match(lastNameCondition)) {
    lastname.classList.remove("is-valid");
    lastname.classList.add("is-invalid");
  }


  if (password.value.match(passwordCondition)) {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  } else if(!password.value.match(passwordCondition)) {
    password.classList.remove("is-valid");
    password.classList.add("is-invalid");
  }

  
  if (phoneNumber.value.match(phoneCondition)) {
    phoneNumber.classList.remove("is-invalid");
    phoneNumber.classList.add("is-valid");
  } else if(!phoneNumber.value.match(phoneCondition)) {
    phoneNumber.classList.remove("is-valid");
    phoneNumber.classList.add("is-invalid");
  }
}
