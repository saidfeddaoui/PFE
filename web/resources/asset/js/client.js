 $(document).ready(function(){
     
 $('#liste_clients').DataTable();
 
 
 $('.mail').attr('placeholder','example@hotmail.com');
 $('.mail').attr('required','required');
 $('.mail').attr('data-parsley-required-message', "email obligatoire !!");
 $('.mail').attr('data-parsley-type-message','Veuillez entrer une adresse email valide');
 $('.mail').attr('data-parsley-type',"email");
 
  $('.value').attr('placeholder','Entrer Valeur');
 $('.value').attr('required','required');
 $('.value').attr('data-parsley-required-message', "champ obligatoire !!");
 

 $('.tel').attr('data-parsley-required-message', "Téléphone obligatoire !!");
 $('.tel').attr('data-parsley-pattern', "^\d{2} \d{2} \d{3} \d{3}$");
 $('.tel').attr('data-parsley-pattern-message', "le format de téléphone est invalide !!");
 $('.tel').attr('pattern', "(05|06)[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}");
 
 $(document).on("click",".supp_client",function(){
     //alert($(this).attr("data-id"));
     
     $.ajax({
            url: "ClientBean.supprimer_client()",
            type: 'POST',
            dataType: "json",
            data: {         operation : "modifier_user",
							nomuser:nom,
							prenomuser:prenom,
							adresseuser:adresse,
							teluser:tel,
							emailuser:mail
				},
                success: function (json) {
					//alert(json["message"]);
					PNotify.prototype.options.styling = "fontawesome";
                    new PNotify({
                        title: "Profile",
					    text: json["message"],
                        type: 'success'
                    });
					 setTimeout(function(){
                     document.location.href = 'acceuil.php';
                     }, 2000);
						
		}
		}).fail(function () {
			alert("fail erreur");
        });
 });
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



