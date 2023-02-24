const submit = document.querySelector('button');
submit.addEventListener('click', function(event){
    if (name.value ==="" || email.value ==="" | message.value === "") {
        alert("All fields are required")
    } else {
        alert("Thank you for reaching out! A member from our team will be in touch soon.")
    }
});