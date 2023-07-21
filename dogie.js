function sendMail() {
    var a = {
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      product: document.getElementById("product").value,
      kilo: document.getElementById("kilo").value,
    };
  
    const serviceID = "service_1zurdzi";
    const templateID = "template_mvsfwb9";
  
      emailjs.send(serviceID, templateID, a)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("address").value = "";
          document.getElementById("product").value = "";
          document.getElementById("kilo").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }