 $(document).ready(function(){
     
 $('.list_table').DataTable();
 
 $(".form").attr("data-parsley-validate","");
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
 
$(document).on("click","#operation_supp",function(){
   alert("entrer");
     if(confirm("voulez vous vraiment supprimer ce client ??")){
     $("#supprimer_client").click();
    }
     
});
 });
 
 
 
 
 function supprimer_client(){
    if(confirm("voulez vous vraiment supprimer ce client ??")){
     var client;
    client=document.getElementById("form_supp_client:supprimer_client");
    client.click();
      alert("true");
      
      }else{
          alert('test');
      }   
  }



