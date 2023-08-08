    function sendEmail() {
      // Prevent form submission
      //event.preventDefault();
      var params = {
       Name : document.getElementById('fullname').value,
       address : document.getElementById('address').value,
       city : document.getElementById('city').value,
       state : document.getElementById('state').value,
       zip : document.getElementById('zip').value,
       contact : document.getElementById('contact').value,
       email : document.getElementById('email').value,
       dob : document.getElementById('dob').value,
       gender : document.getElementById('gender').value,
       username : document.getElementById('username').value,
       password : document.getElementById('password').value,

      // Set up email parameters
      }

      // Send email using EmailJS
      const serviceID = "service_u9y2uz7";
      const templateID = "template_x3wspdt";

      emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById('fullname').value = "";
                document.getElementById('address').value = "";
                document.getElementById('city').value = "";
                document.getElementById('state').value = "";
                document.getElementById('zip').value = "";
                document.getElementById('contact').value = "";
                document.getElementById('email').value = "";
                document.getElementById('dob').value = "";
                document.getElementById('gender').value = "";
                document.getElementById('username').value = "";
                document.getElementById('password').value = "";
                console.log(res);
                alert("Message sent successfully");
            })
            .catch((err) => console.log(err));
    }