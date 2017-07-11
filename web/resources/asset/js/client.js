 $(document).ready(function(){
 $('#liste_client').DataTable();
 
 
 $('#mail_clt').attr('placeholder','example@hotmail.com');
 $('#mail_clt').attr('required','required');
 $('#mail_clt').attr('data-parsley-required-message', "email obligatoire !!");
 $('#mail_clt').attr('data-parsley-type-message','Veuillez entrer une adresse email valide');
 $('#mail_clt').attr('data-parsley-type',"email");
 
  $('#nom_clt').attr('placeholder','Raison social');
 $('#nom_clt').attr('required','required');
 $('#nom_clt').attr('data-parsley-required-message', "Raison Social obligatoire !!");
 
 $('#rc_clt').attr('placeholder','Raison social');
 $('#rc_clt').attr('required','required');
 $('#rc_clt').attr('data-parsley-required-message', "Rc obligatoire !!");
 
 $('#adresse_clt').attr('placeholder','votre adresse ...');
 $('#adresse_clt').attr('required','required');
 $('#adresse_clt').attr('data-parsley-required-message', "adresse obligatoire !!");
 
 $('#tel_clt').attr('placeholder','Raison social');
 $('#tel_clt').attr('required','required');
 $('#tel_clt').attr('data-parsley-required-message', "Téléphone obligatoire !!");
 $('#tel_clt').attr('data-parsley-pattern', "^\d{2} \d{2} \d{3} \d{3}$");
 $('#tel_clt').attr('data-parsley-pattern-message', "le format de téléphone est invalide !!");
 $('#tel_clt').attr('pattern', "(05|06)[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}");
 
 });
 
 
 
 function supprimer_client(id){
      
      if(confirm("voulez vous vraiment supprimer ce client ??")){
      window.location="supprimer_client.action?id="+id+"";
      PNotify.prototype.options.styling = "fontawesome";
      new PNotify({
      title: "Client",
      text:"client supprimer avec success !!",
      type: 'success'
                    });
        setTimeout(function(){
                     document.location.href = 'clients.jsp';
        }, 4000);
      }   
  }



