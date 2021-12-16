let formData = {
  firstName: '',
  email: '',
  message: '',
  lastName: '',
};

const form = document.querySelector('form');

if (localStorage.getItem('formData') != null) {
  formData = JSON.parse(localStorage.getItem('formData'));
  form.firstname.value = formData.firstName;
  form.email.value = formData.email;
  form.message.value = formData.message;
  form.lastname.value = formData.lastName;
  console.log(form);
}

form.addEventListener('change', () => {
  formData.firstName = form.firstname.value;
  formData.email = form.email.value;
  formData.message = form.message.value;
  formData.lastName = form.lastname.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});
