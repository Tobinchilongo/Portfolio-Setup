let formData = {
    FirstName: '',
    email: '',
    message: '',
    LastName: '',
  };
  
  const form = document.querySelector('form');
  
  if (localStorage.getItem('formData') != null) {
    formData = JSON.parse(localStorage.getItem('formData'));
    form.firstname.value = formData.FirstName;
    form.email.value = formData.email;
    form.message.value = formData.message;
    form.lastName.value = formData.LastName;
  }
  
  form.addEventListener('submit', () => {
    formData.FirstName = form.firstName.value;
    formData.email = form.email.value;
    formData.message = form.message.value;
    formData.LastName = form.lastName.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });