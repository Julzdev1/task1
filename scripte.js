const domElements = {
  formElement: document.querySelector('.form-button'),
  inputElement: document.querySelector('.section-2-formelement'),
  firstnameElement : document.querySelector('.name'),
  lastnameElement : document.querySelector('.last'),
  emailElement : document.querySelector('.email'),
  passwordElement : document.querySelector('.password'),
}


const printError = (message) =>{
return `<img src="./icon-error.svg" alt="" class="section-2-formErrorIcon">
        <small>${message}</small>
    `
}

domElements.formElement.addEventListener('click',(e)=>{
    e.preventDefault()

    Array.from(document.querySelectorAll('.section-2-formError')).forEach(e=>e.innerHTML= '');

   const firstnameElementValue=  domElements.firstnameElement.value
   const lastnameElementValue = domElements.lastnameElement.value
   const emailElementValue= domElements.emailElement.value
   const passwordElementValue= domElements.passwordElement.value

   if(!firstnameElementValue){
      domElements.firstnameElement.nextElementSibling.insertAdjacentHTML('beforeend', printError('First Name cannot be empty'))
   }
    if(!lastnameElementValue){
        domElements.lastnameElement.nextElementSibling.insertAdjacentHTML('beforeend', printError('Last Name cannot be empty'))
     }
    if(!passwordElementValue){
        domElements.passwordElement.nextElementSibling.insertAdjacentHTML('beforeend', printError('Password cannot be empty'))
    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailElementValue))){
        domElements.emailElement.nextElementSibling.insertAdjacentHTML('beforeend', printError('Looks like this is not an email'))
    }
})
