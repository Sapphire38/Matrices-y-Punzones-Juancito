function validateForm() {
    event.preventDefault()
   var name =  document.getElementById('name').value;
   if (name == "") {
       document.getElementById('status').innerHTML = "Ingresa tu nombre.";
       return false;
   }
   var number =  document.getElementById('number').value;
   if (number == "") {
       document.getElementById('status').innerHTML = "Ingresa tu numero celular";
       return false;
   }
   var subject =  document.getElementById('subject').value;
   if (subject == "") {
       document.getElementById('status').innerHTML = "Ingresa un asunto.";
       return false;
   }
   var message =  document.getElementById('message').value;
   if (message == "") {
       document.getElementById('status').innerHTML = "Informanos sobre tu consulta";
       return false;
   }
   
   document.getElementById('status').innerHTML = "";


   document.getElementById('btn-send').setAttribute('href', `mailto:juan.insumos@gmail.com?subject=${subject}&body=Hola soy ${name}! %0D%0AMi consulta: "${message}" %0D%0ANumero de telefono: ${number}`);

   document.getElementById('btn-send').click();
   

   };



   function validateNews() {
    var email =  document.getElementById('email-news').value;
    if (email == "") {
        document.getElementById('status-news').innerHTML = "Ingresa tu email.";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status-news').innerHTML = "Email incorrecto.";
            return false;
        }
    }
    

    document.getElementById('btn-send').setAttribute('href', `mailto:lucasdiforte@gmail.com?subject=Newsletter&body=Hola, me gustaria que me mantengan al día con nuestras últimas empresas y noticias.`);

    document.getElementById('btn-send').click();
    
 
    };
 