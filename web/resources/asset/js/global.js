$(document).ready(function(){

 
 //$('#tablepdf').DataTable();
  //$('#tablefr').DataTable();

// $('#table_bc').DataTable();
// $('#tbl_devis').DataTable();

function reset(){
 $(":input").each(function () {
            if ($(this).attr("type") === "text" || $(this).attr("type") === "file") {
                $(this).val("");
            } else if ($(this).attr("type") === "checkbox") {
                $(this).prop("checked", false);
            }
        }); $("select").find('option:eq(0)').prop('selected', true);
	//	$('select option:first-child').attr("selected", "selected");
        $("textarea").val("");
		}
$("body").append(" <div id='sessionlocked' class='hold-transition lockscreen lockk' style ='position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999'>   <div class='lockscreen-wrapper'>   <div class='lockscreen-logo'>     <a href='#'><b>APEF</b>GEST</a>   </div>   <!-- User name -->   <div class='lockscreen-name'><?php echo $_SESSION['nomuser'];?></div>    <!-- START LOCK SCREEN ITEM -->   <div class='lockscreen-item'>     <!-- lockscreen image -->     <div class='lockscreen-image'>       <img src='https://cdn1.iconfinder.com/data/icons/unique-round-blue/93/user-512.png' alt='User Image'>     </div>     <!-- /.lockscreen-image -->      <!-- lockscreen credentials (contains the form) -->     <div class='lockscreen-credentials'>       <div class='input-group'>         <input class='form-control' id ='lockiputpass' placeholder='mot de passe' type='password'>          <div class='input-group-btn'>           <button type='button' class='btn' id='lockin'><i class='fa fa-arrow-right text-muted'></i></button>         </div>       </div>     </div>     <!-- /.lockscreen credentials -->    </div>   <!-- /.lockscreen-item -->   <div id ='errorpass' class='help-block text-center' style='color: red;display:none'> Le mot de pass est inccorect  </div> <div class='help-block text-center'>     Entrez votre mot de passe pour récupérer votre session   </div>   <div class='text-center'>     <a href='log.php'>Ou connectez-vous en tant qu'utilisateur différent</a>   </div>   <div class='lockscreen-footer text-center'>     Copyright © 2016 <b><a href='http://apef-education.com'>APEF Education</a>.</b><br>     All rights reserved 	   </div> </div> </div>");
 $('input').iCheck({
    
    radioClass: 'iradio_minimal-red',
    increaseArea: '20%' // optional
  });
   //$(".datestatut").mask("00/00/0000", {placeholder: "__/__/____"});
   $("#retourinput").mask("#");
   $("#telclient").mask("00-00-000-000");
   $("#faxclient").mask("00-00-000-000");
   $("#porclient").mask("00-00-000-000");
   $("#tl1").mask("#");
   $("#tl2").mask("#");
   $("#telfourni").mask("#");
   $(".number").mask("#");
   $("#prix").mask("999999.99");
 
var partielle_termine = 0;
var HT_div = $("#web-panel-div").height();
$("#toggle-left-menu").css("height",HT_div);
var typeproduit="Stockable";
$(".0").css("marginBottom","0px");
 var countline=0;
 var arr = [];
  var  iidd ;
	$(document).on('click','#refresh',function(){
	$(this).css("display","none");
	$("#loadfournilst").css("display","block");
				   $.ajax({
										 type:"post",
										  url:"ajax-lstfournisseur.php",
										 data:{ 
												hash:"05f8s577df83"
											  },
										 success:function(data)
										 {
										 	$("#refresh").css("display","block");
											$("#loadfournilst").css("display","none");
											$("#md-lst").html(data);
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
													
													
													}
		 
		 
													});
	});
	 $(document).on("change","#bcachat",function(){
	 var val = $(this).val();
	 				   $.ajax({
										 type:"post",
										  url:"ajax-tableBcAchat.php",
										 data:{ 
												v:val
											  },
										 success:function(data)
										 {
										 $("#tbl_bc").html(data);
										  },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
													
													
													}
		 
		 
													});
	 
	 });
	 $(document).on("change",".rselect",function(){
	var id,prix,qt;
	var val = $(this).val();
	 id = $(this).attr('id');
	 var res = id.split("_");
	 r = $("#r_"+res[1]).val();
		qt = $("#qteachat_"+res[1]).val();
		prix = $("#prixachat_"+res[1]).val();
 	  var total =  ( Number(prix) -  ( Number(prix) *  Number(r) / 100) ) * Number(qt);
		$("#total_"+res[1]).text(Number(total).toFixed(2)); 
		somme_BCACHAT();
	 });
	    $(document).on('keyup','.vlachat', function() {
		var vl,id,prix,qt,mtva;
		vl = $(this).val();
		id = $(this).attr('id');
		var res = id.split("_");
		r = $("#r_"+res[1]).val();
		qt = $("#qteachat_"+res[1]).val();
		prix = $("#prixachat_"+res[1]).val();
 	 
			var total =  ( Number(prix) -  ( Number(prix) *  Number(r) / 100) ) * Number(qt);
				//79 − 79 × 15/100 = 79 − 79 × 0.15 = 79 − 11.85 = 67.15 dh.
mtva= $("#mtva").val();
		$("#total_"+res[1]).text(Number(total).toFixed(2)); 
		somme_BCACHAT();
		}); 
		$(document).on('keyup','.vlachatpr', function() {
		var vl,id,qt;
		vl = $(this).val(); 
		id = $(this).attr('id');
		var res = id.split("_"); 
		qt = $("#qteachat_"+res[1]).val();
 			r = $("#r_"+res[1]).val();

		var total =  ( Number(vl) -  ( Number(vl) *  Number(r) / 100) ) * Number(qt);
	$("#total_"+res[1]).text(Number(total).toFixed(2)); 
	somme_BCACHAT();
		});
		
			somme_BCACHAT = function() { var sommetotal = 0,mtva = 0,mttc =0;
			  
				$(".totalachat").each(function(){
			 
				 sommetotal= Number(sommetotal) + Number($(this).text());
				 $("#mht").val(Number(sommetotal).toFixed(2));
				 mtva= Number(sommetotal) * Number($("#mtva").val()) / 100
				// $("#mtva").val(Number(mtva).toFixed(2));
				 
				 mttc = mtva +  Number($("#mht").val());
				// mttc =Number($("#mht").val());
				 $("#mttc").val(Number(mttc).toFixed(2));
				});
			}
			$(document).on('keyup','#mtva',function(){
			var sommetotal = 0,mtva = 0,mttc =0,tva=0;
			tva = $(this).val();
		 
				sommetotal =  $("#mht").val();
				  mtva= Number(sommetotal) * tva / 100
				 
				 
				 mttc = mtva +  Number($("#mht").val());
				
				 $("#mttc").val(Number(mttc).toFixed(2));
			});
	var idcount=1;
	$(document).on('click','#addbcachat',function(){
	var tabel_achat=[],nbr = 0,modeReg;
	modeReg = $("#moderegachat").val(); 
	var idfor=$("#fourni").val();
	$('#addbcachat').css("display","none");
	$('#ld').css("display","inline-block");
	$(".ligne_achat").each(function(){
	var idt = $(this).attr("id");
	 var co = idt.split("_");
	 var qteachat = $("#qteachat_"+co[1]).val();
	var disachat = $("#disachat_"+co[1]).val();
	var prixachat = $("#prixachat_"+co[1]).val();
	var rachat = $("#r_"+co[1]).val();
	alert(disachat);
	 if(qteachat != "" && disachat != "" && prixachat != "" && rachat != "" && idfor != "-1" && modeReg != "-1" )
	 { nbr=0;
var info =[{
			 
			"qte":qteachat,
			"dis":disachat,
			"prix":prixachat,
			"r":rachat}]; 
tabel_achat.push(info);
}
else{nbr = 1;return false;}

	});
	 
		//alert(JSON.stringify(tabel_achat, null, 2));
	 
		if(nbr!=1)
		{
		 
		 $('#ld').css("display","none");
	$('#addbcachat').css("display","inline-block");
 $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"test" ,
												tblachat:tabel_achat,
												id:idfor,
												md:modeReg
												 
										 },
										 success:function(data)
										 {
										 
										alert(tabel_achat.length+" * "+data)
											 
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});  
													}
													else
													{
													 sweetAlert(" ", "Virifiée que tous les ", "error");
													  $('#ld').css("display","none");
													  $('#addbcachat').css("display","inline-block");
													}
													 
	});
	$(document).on('click','.supp_bc_ach',function(){
	 
	$("#trach_"+$(this).attr('id')).remove();
	});
	$(document).on('click','#add_line_forni',function(){
	idcount++;
	
	$('#tbl_bc tr:last').before("<tr id='trach_"+idcount+"' class='ligne_achat'><td><textarea id='disachat_"+idcount+"' class='form-control'></textarea></td><td><input id ='qteachat_"+idcount+"' type='text' class='form-control number vlachat'/></td> 									<td><input id ='prixachat_"+idcount+"' style ='width:70px;margin:auto;' type='text' class='form-control number vlachatpr'/></td><td><select id='r_"+idcount+"' style ='width:70px;margin:auto;'  class='form-control rselect'><option value='0' >0%</option><option value='10' >10%</option><option value='15' >15%</option></select></td><td id='total_"+idcount+"' class='totalachat'> </td><td style ='width:55px;text-align:center'><img  style='cursor:pointer;margin-right:10px' id='"+idcount+"' class='supp_bc_ach' src='asset/image/supp.png' width='10' height='10'/> </td></tr>");
	
	});
	$(document).on('change','#fourniBE',function(){
 var vl = $(this).val();
 var adrs = $("#fourniBE option:selected").attr("data-adrs");
 var pays = $("#fourniBE option:selected").attr("data-pays");
 var ville = $("#fourniBE option:selected").attr("data-ville");
$.ajax({
										 type:"post",
										  url:"ajax-bcAchat.php" ,
										  data:{va:vl},
										 success:function(data)
										 {
										$("#bca").html(data);
										 $("#adrs").val(adrs);
										 $("#pays").val(pays);
										 $("#ville").val(ville);
								 
										 },
													error: function(x,y,z){
 
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
		 
		 
													});  
													
	});
	$(document).on('click','#excel, .pr_excel',function(){
			
			var clss=$(this).attr("class");
			if(clss=="pr_excel"){var id = $(this).attr("data-idInterne");var idline = $(this).attr("data-line");$("#gif"+idline).css("display","inline-block");}
			else{var id = $("#bcidlink").val();}
			
				  var excel_data;
				  $(this).css("display","none");
			 
				   $.ajax({
										 type:"post",
										  url:"exceldata.php",
										 data:{ 
												idbc:id
											  },
										 success:function(data)
										 { var currentDate = new Date()
										var day = currentDate.getDate()
										var month = currentDate.getMonth() + 1
										var year = currentDate.getFullYear()
										var FN = day + "_" + month + "_" + year+"T"+ currentDate.getHours()+"_"+currentDate.getMinutes()+"_"+currentDate.getSeconds();
											//  excel_data = $("#employee_table").html(); 
											//  var page = "excel.php?data=" + excel_data;  
										 //  window.location = page;
									 
														 	 $(data).table2excel({
																 
																name: "Excel Document Name",
																filename: FN, 
																exclude_img: true,
																exclude_links: true,
																exclude_inputs: true
															});  
													$(".pr_excel").css("display","inline-block");
													 
													$(".ex_gif").css("display","none");
													
											},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
													
													
													}
		 
		 
													});
				   $.ajax({
										 type:"post",
										  url:"exceldata.php",
										 data:{ 
												idbc:id
											  },
										 success:function(data)
										 { var currentDate = new Date()
										var day = currentDate.getDate()
										var month = currentDate.getMonth() + 1
										var year = currentDate.getFullYear()
										var FN = day + "_" + month + "_" + year+"T"+ currentDate.getHours()+"_"+currentDate.getMinutes()+"_"+currentDate.getSeconds();
											//  excel_data = $("#employee_table").html(); 
											//  var page = "excel.php?data=" + excel_data;  
										 //  window.location = page;
									 
														 	 $(data).table2excel({
																 
																name: "Excel Document Name",
																filename: FN, 
																exclude_img: true,
																exclude_links: true,
																exclude_inputs: true
															});  
													$(".pr_excel").css("display","inline-block");
													 
													$(".ex_gif").css("display","none");
													
											},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
													
													
													}
		 
		 
													});
				   
          
				 });

   $('.iCheck-helper').on('click', function() { 
 typeproduit = $(this).parent().parent().attr('data-radio');//$('input[name=survey]:checked', '.radio').val();
 if(typeproduit != "Stockable")
 {
 $("#editeurrow").css("display","none");
 }
 else
 {
  $("#editeurrow").css("display","block");

 }
   $.ajax({
										 type:"post",
										  url:"colection.php",
										 data:{ 
												typep:typeproduit},
										 success:function(data)
										 { 
										   
											$("#colselect").html(data);
											},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
});
   $('#tva-valeur').on('change', function() {
 var valeur = $(this).val();

 var prixht = $("#prixht").val();
  
 var TTC=0;
 if( prixht ){
		TTC=(Number((prixht / prixht * valeur)) + Number(prixht));
		$("#prix").val(TTC);
	}
 
});  
 $('#ajouter_fourni').on('click', function() { // contanct fournisseur
  $("#ajouter_fourni").css("display","none"); 
	$("#loadfourni").css("display","inline-block");
 var nom , tel, mail,fourni;
 fourni = $("#fourni option:selected").val();
 nom = $("#nomfourni").val();
 tel = $("#telfourni").val();
 mail = $("#mailfourni").val();
 prenom = $("#prenomfourni").val();
 fonction = $("#fonctionfourni").val();
if(fourni != "-1" && nom != "" && tel != "")
 {
 
    $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:  "contactfourni",
												nom_:nom,
												tel_:tel,
												mail_:mail,
												fourni_:fourni,
												prenom_:prenom,
												fonction_:fonction
											  },
										 success:function(data)
										 { reset();
										 $("#ajouter_fourni").css("display","inline-block"); 
													 $("#loadfourni").css("display","none");
													 $(".close").click();
													 sweetAlert(" ", "Nouveau contact a été ajouté."); 
										 },
													error: function(x,y,z){
													 $("#ajouter_fourni").css("display","inline-block"); 
													 $("#loadfourni").css("display","none");
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
		 
		 
													});  
													
					}
else
{ $("#ajouter_fourni").css("display","inline-block"); 
													 $("#loadfourni").css("display","none");
													 sweetAlert("Oops...", "La raison social,nom et numéro de téléphone sont obligatoires", "warning");}					
					
													
 });
 $(document).on('click','.frsup', function() {
 var r = confirm("Voulez-vous vraiment continuer ?");
if (r == true) {
    
 
 var id =$(this).attr("data-idfr");
 
   $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:  "supp_fourni", 
											idfo:  id
											  },
										 success:function(data)
										 { 
										 $("#lstfor option[value='"+id+"']").remove(); 
										 $("#tr_"+id).animate({opacity: 0}, 700,function(){ $("#tr_"+id).css("display","none");});
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
													} 
 }); 
 $('.cont_sup').on('click', function() {
 var r = confirm("Voulez-vous vraiment continuer ?");
if (r == true) {
    
 
 var id =$(this).attr("id");
 
   $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:  "supp_contact", idco:  id
											  },
										 success:function(data)
										 {   
										 $("#tr_"+id).animate({opacity: 0}, 700);
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
													} 
 });

 $('#updateFournisseur').on('click', function() {
 
  $("#updateFournisseur").css("display","none"); 
  $("#loaderbc").css("display","block");
  var rs,tl1,paysid,selectville,adr,tl2,fx,ml,wb,rc,idf,id
 paysid = $( "#selectpays" ).val();
 rs = $("#rs").val();
 tl1 = $("#tl1").val();
 selectville = $("#selectville").val();
 adr = $("#adr").val();
tl2 = $("#tl2").val();
fx = $("#fx").val();
ml = $("#ml").val();
wb = $("#wb").val();
rc = $("#rc").val();
idf = $("#if").val();
cnss = $("#cnss").val();
id = $("#idfour").val();
if(rs != "" && tl1 !="" && adr != "" && paysid != "-1" && selectville !="-1"){	
   $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:  "update_fournisseur",
												rs_:rs,
												tl1_:tl1,
												paysid_:paysid,
												selectville_:selectville,
												adr_:adr,
												tl2_:tl2,
												fx_:fx,
												ml_:ml,
												wb_:wb,
												rc_:rc,
												idf_:idf,
												cnss_:cnss,
												id_:id
												
											  },
										 success:function(data)
										 {   
										 $("#updateFournisseur").css("display","block"); 
													 $("#loaderbc").css("display","none");
													 sweetAlert(" ", "La modification a été effectuée", "success");
										 },
													error: function(x,y,z){
													 $("#updateFournisseur").css("display","block"); 
													 $("#loaderbc").css("display","none");
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
		 
		 
													}); 
													
													}
													else{
													 $("#updateFournisseur").css("display","block"); 
													 $("#loaderbc").css("display","none");
													sweetAlert("Oops...", "Vous n'avez pas rempli tous les champs obligatoires", "warning");
													}
 });
 
 $('#addFournisseur').on('click', function() {
  $("#addFournisseur").css("display","none"); 
  $("#loaderbc").css("display","block");
  var rs,tl1,paysid,selectville,adr,tl2,fx,ml,wb,rc,idf
 paysid = $( "#selectpays" ).val();
 rs = $("#rs").val();
 tl1 = $("#tl1").val();
 selectville = $("#selectville").val();
 adr = $("#adr").val();
tl2 = $("#tl2").val();
fx = $("#fx").val();
ml = $("#ml").val();
wb = $("#wb").val();
rc = $("#rc").val();
idf = $("#if").val();
cnss = $("#cnss").val();
if(rs != "" && tl1 !="" && adr != "" && paysid != "-1" && selectville !="-1"){	
   $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:  "add_fournisseur",
												rs_:rs,
												tl1_:tl1,
												paysid_:paysid,
												selectville_:selectville,
												adr_:adr,
												tl2_:tl2,
												fx_:fx,
												ml_:ml,
												wb_:wb,
												rc_:rc,
												idf_:idf,
												cnss_:cnss
												
											  },
										 success:function(data)
										 {reset();
										 
										 $("#addFournisseur").css("display","block"); 
													 $("#loaderbc").css("display","none");
													 sweetAlert(" ", "Nouveau fournisseur a été ajouté avec succès.", "success");
										 },
													error: function(x,y,z){
													 $("#addFournisseur").css("display","block"); 
													 $("#loaderbc").css("display","none");
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
		 
		 
													}); 
													
													}
													else{
													 $("#addFournisseur").css("display","block"); 
													 $("#loaderbc").css("display","none");
													sweetAlert("Oops...", "Vous n'avez pas rempli tous les champs obligatoires", "warning");
													}
 });
 $('.finfo').on('dblclick', function() {
 
 var id =$(this).attr('id');
      $('.ininfo').css("display","none");
      $('.finfo').css("display","block");
  $(this).css("display","none");
  $("#i-"+id).css("display","block");
  
 });
    $('.ininfo').on('keyup', function(e) {
	    if(e.keyCode==13){ 
		var id =$(this).attr('id');
		var val = $(this).val();
		var col =$(this).attr('data-col');
		var idcon =$(this).attr('data-id');
		var res = id.split("-"); 
	    $("#"+res[1]).css("display","block");
		$(this).css("display","none");
		  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"update_contact", 
										 idc:  idcon,
												cl:col,
												vl:val
											  },
										 success:function(data)
										 { $("#"+res[1]).text(val);
													 sweetAlert(" ", "La modification a été effectuée", "success");

										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
 
													
													}
		 
		 
													});
	 }
	});
 $('#lstfor').on('change', function() {
 var forid = $( this ).val();
 $("#loadfor").html("<div class='sk-circle'>   <div class='sk-circle1 sk-child'></div>   <div class='sk-circle2 sk-child'></div>   <div class='sk-circle3 sk-child'></div>   <div class='sk-circle4 sk-child'></div>   <div class='sk-circle5 sk-child'></div>   <div class='sk-circle6 sk-child'></div>   <div class='sk-circle7 sk-child'></div>   <div class='sk-circle8 sk-child'></div>   <div class='sk-circle9 sk-child'></div>   <div class='sk-circle10 sk-child'></div>   <div class='sk-circle11 sk-child'></div>   <div class='sk-circle12 sk-child'></div> </div>");
  $.ajax({
										 type:"post",
										  url:"ajax-fournisseur.php",
										 data:{ idfr:  forid
											  },
										 success:function(data)
										 {   $('#loadfor').html(data);
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													 $("#loadfor").html("");
													}
		 
		 
													});
 });
 $('#selectpays').on('change', function() {

var paysid = $( this ).val();
  $('#selectville').prop('disabled', true);
  $.ajax({
										 type:"post",
										  url:"villes.php",
										 data:{ idpay:  paysid
											  },
										 success:function(data)
										 {   $('#loadervid').html(data);
										  $('#selectville').prop('disabled', false);
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
 
});

   $('#prixht').on('keyup', function() {
	// prixht = $("#prixht").val() ;
	   var prixht=$(this).val();
 
  var r = isNumeric(prixht);
 if(!r  ){var str = prixht.substring(0, prixht.length-1);$("#prixht").val(str);}
      var valeur = $("#tva-valeur").val();
  var TTC=0;
 if( prixht ){
		TTC=(Number((prixht / prixht * valeur)) + Number(prixht));
		$("#prix").val(TTC);
	}
    });
   $(document).on('click','#addclientpopup',function(){
   $("#loaderbcclient").css("display","none");
    $("#adresseclient").val("");
  $("#villeclient").val("");
 $("#paysclient").val("");
 $("#telclient").val("");
  $("#porclient").val("");
  $("#faxclient").val("");
  $("#nomclient").val("");
  $("#siteclient").val("");
   $("#bc-overlay-client").css("display","block");
   });
 
/*$(document).on('click','.reset',function(e){
     e.preventDefault();
       $(this).closest('form').find("input[type=text], textarea").val("");
	   
   });*/
   
   /* Ajouter Client -----------------*/
   $(document).on('click','#addclient',function(e){
        e.preventDefault();
  var nom,adresse,ville,pays,tel,portable,fax,siteweb,codecli,rc,cnss,idfisc,tp,obser,repre,devise,mail,lien="addclient",id_clt;
  id_clt=$("#id_client").val();
  nom=$("#nomclient").val();
  var mod = $(this).attr('data-modif');
  codecli=$("#codeclient").val();
  rc=$("#rc").val();
  cnss=$("#cnss").val();
  idfisc=$("#idfisc").val();
  tp=$("#tp").val();
  obser=$("#obser").val();
  repre=$("#repre").val();
  mail=$("#mail").val();
  devise=$("#devise").val();
  adresse=$("#adresseclient").val();
  ville=$("#selectville").val();
  pays=$("#selectpays").val();
  tel=$("#telclient").val();
  portable=$("#porclient").val();
  fax=$("#faxclient").val();
  siteweb=$("#siteclient").val();
  
 if(mod=="oui")
 {lien = "updateclient"; }

  
  
  
  /*
  alert("Nom : "+nom+" code client: "+codecli+" RC: "+rc+" cnss: "+cnss+" id fisc: "+idfisc+" tp: "+tp+" obser: "+obser+" repre: "+repre+" mail: "+mail+" devise: "+devise+" adresse: "+adresse+" ville: "+ville+" pays: "+pays+" tel: "+tel+" portable: "+portable+" fax: "+fax+" siteweb: "+siteweb);*/
  if( nom != "" && adresse != "" && ville != "-1" && pays != "-1" && (portable != "" || tel != ""))
  { $("#addclient").css("display","none");
 
   $("#loaderbc,#loaderbcclient").css("marginRight","62px");
   $("#loaderbc,#loaderbcclient").css("display","inline-block"); 
 
    $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:lien,
										        id_client : id_clt,
												nclient:nom,
												aclient:adresse,
												vclient:ville,
												paclient:pays,
												tclient:tel,
												poclient:portable,
												fclient:fax,
												sclient:siteweb,
												rcclient:rc,
												codeclient:codecli,
												cnssclient:cnss,
												tpclient:tp,
												idfiscclient:idfisc,
												obserclient:obser,
												repreclient:repre,
												mailclient:mail,
												deviseclient:devise
												
											 
												
										 },
										 success:function(data)
										 { 
										 alert(data);
										 $("#addclient").css("display","inline-block");
											$("#loaderbc,#loaderbcclient").css("display","none");

											  var cClient = Number(codecli) + 1;
  
												  $("#nomclient").val("");
												  
												  $("#codeclient").val(cClient);
												  $("#rc").val("");
												  $("#cnss").val("");
												  $("#idfisc").val("");
												  $("#tp").val("");
												  $("#obser").val("");
												  $("#repre").val("");
												  $("#mail").val("");
												  $("select").find('option:eq(0)').prop('selected', true);
												 // $("#devise").val();
												  $("#adresseclient").val("");
												 // $("#selectville").val();
												 // $("#selectpays").val();
												  $("#telclient").val("");
												  $("#porclient").val("");
												  $("#faxclient").val("");
												  $("#siteclient").val("");
												    $.ajax({
										 type:"post",
										  url:"villes.php",
										 data:{ idpay:  1
											  },
										 success:function(data)
										 {   $('#loadervid').html(data);

										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});

											},
													error: function(x,y,z){
													 $("#loaderbc,#loaderbcclient").css("display","none");
													$("#addclient").css("display","inline-block");
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														
													
													}
		 
		 
													});
													}
													 else{sweetAlert("Oops...", "Veuillez remplir tous les champs requis.\n Raison social , Numéro de téléphone, Adresse, Ville , Pays", "error");
													 $("#addclient").css("display","inline-block;"); }
   });
   
   /*Fin Ajout Client*/
   
   /* Update Client */
   
  $("#modifier_client").on('click',function(){
		 
  var nom,adresse,ville,pays,tel,portable,fax,siteweb,codecli,rc,cnss,idfisc,tp,obser,repre,devise,mail,id_clt;
  id_clt=$("#id_client").val();
  nom = $("#nomclient").val();
  var mod = $(this).attr('data-modif');
  codecli=$("#codeclient").val();
  rc=$("#rc").val();
  cnss=$("#cnss").val();
  idfisc=$("#idfisc").val();
  tp=$("#tp").val();
  obser=$("#obser").val();
  repre=$("#repre").val();
  mail=$("#mail").val();
  devise=$("#devise").val();
  adresse=$("#adresseclient").val();
  ville=$("#selectville").val();
  pays=$("#selectpays").val();
  tel=$("#telclient").val();
  portable=$("#porclient").val();
  fax=$("#faxclient").val();
  siteweb=$("#siteclient").val();
  
  
  
  //alert("Nom : "+nom+" code client: "+codecli+" RC: "+rc+" cnss: "+cnss+" id fisc: "+idfisc+" tp: "+tp+" obser: "+obser+" repre: "+repre+" mail: "+mail+" devise: "+devise+" adresse: "+adresse+" ville: "+ville+" pays: "+pays+" tel: "+tel+" portable: "+portable+" fax: "+fax+" siteweb: "+siteweb);*
  if( nom != "" && adresse != "" && ville != "-1" && pays != "-1" && (portable != "" || tel != ""))
  { /*$("#addclient").css("display","none");
 
   $("#loaderbc,#loaderbcclient").css("marginRight","62px");
   $("#loaderbc,#loaderbcclient").css("display","inline-block"); 
 */
    $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions: "updateclient",
										        id_client : id_clt,
												nclient:nom,
												aclient:adresse,
												vclient:ville,
												paclient:pays,
												tclient:tel,
												poclient:portable,
												fclient:fax,
												sclient:siteweb,
												rcclient:rc,
												codeclient:codecli,
												cnssclient:cnss,
												tpclient:tp,
												idfiscclient:idfisc,
												obserclient:obser,
												repreclient:repre,
												mailclient:mail,
												deviseclient:devise
											},
										 success:function(data)
										 { 
										 //alert(data);
										  window.location.href="clientconsulter.php";
										/* $("#addclient").css("display","inline-block");
											$("#loaderbc,#loaderbcclient").css("display","none");

											  var cClient = Number(codecli) + 1;*/
  
												 /* $("#nomclient").val("");
												  
												  $("#codeclient").val(cClient);
												  $("#rc").val("");
												  $("#cnss").val("");
												  $("#idfisc").val("");
												  $("#tp").val("");
												  $("#obser").val("");
												  $("#repre").val("");
												  $("#mail").val("");
												  $("select").find('option:eq(0)').prop('selected', true);
												 // $("#devise").val();
												  $("#adresseclient").val("");
												 // $("#selectville").val();
												 // $("#selectpays").val();
												  $("#telclient").val("");
												  $("#porclient").val("");
												  $("#faxclient").val("");
												  $("#siteclient").val("");
												    $.ajax({
										 type:"post",
										  url:"villes.php",
										 data:{ idpay:  1
											  },
										 success:function(data)
										 {   $('#loadervid').html(data);

										 }*/
													

											},error: function(x,y,z){
													 $("#loaderbc,#loaderbcclient").css("display","none");
													$("#addclient").css("display","inline-block");
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														
													
													}
		 
		 
													});
													}
													 else{sweetAlert("Oops...", "Veuillez remplir tous les champs requis.\n Raison social , Numéro de téléphone, Adresse, Ville , Pays", "error");
													 $("#addclient").css("display","inline-block;"); }
   
   /* Fin Update Client*/
   });

											function hidealert()
											{
											  setTimeout(function () {
												$("#alrt").animate({'bottom':'-10px','opacity':'0'}, 1000, function() { });
											 }, 3500);
											}
   $(document).on('click','#recommencer',function(){
										    $("#isbn").val("");
										   $("#nom_produit").val("");
										   $("#prixht").val("");
										   $("#prix").val("");
										   $("#depot").val($("#depot option:first").val());
										   $("#editeur").val($("#editeur option:first").val());
										   $("#collection").val($("#collection option:first").val());
										   $("#tva-valeur").val($("#tva-valeur option:first").val());
											$("#prixht-pnl").css("display","none");
											$("#observ").val("");
											  
											 $("#prix").removeAttr("readonly");
   });   
   $(document).on('click','#recommencerdevis',function(){
										    $("#hideid").val("");
										   $("#rsclient").val("");
										   $("#adres-clnt").text("--");
										   $("#pays-clnt").text("--");
										   $("#villeclnt").text("--");
										   $("#adres-clnt").val("--");
										   $("#tel").text("--");
										   $("#fax").text("--");
										   $("#py").val($("#py option:first").val());
										   $("#vi").val($("#vi option:first").val());
										   $("#repr").val($("#repr option:first").val());
										   $("#depot").val($("#depot option:first").val());
											$(".tr_ligne").remove();
											$("#obser").val("");
											  
											 
   });
   $(document).on('click','#ajouter_btn',function(){
  var editeur,prix,collection,isbn,produit,check=1,tva,tva_valeur,prixht,type_prod,qte,depot,observ;
  editeur=$("#editeur").val();
  depot = $("#depot").val();
  prix=$("#prix").val();
  observ=$("#observ").val();
  qte=$("#qteprod").val();
  prixht =isNumeric($("#prixht").val());
  var r = isNumeric(prix);
  produit=$("#nom_produit").val();
 if(!r){check = 0;}
collection=$("#collection").val();
  isbn=$("#isbn").val();

  
  tva_valeur =$("#tva-valeur").val();
  prixht =$("#prixht").val();
  type_prod = typeproduit; 
  if(tva_valeur==0)
  {
  
  tva_valeur =0;
  prixht =0;
  
  }
  if(type_prod != "Stockable")
  {
  editeur =0; 
  }
   
//alert(editeur+" * "+prix+" * "+prixht+" * "+collection+" * "+isbn+" * "+produit+" * "+tva_valeur+" * "+type_prod+" * "+depot+" * "+observ );
 if(check==1 && produit != "" && editeur != -1 && depot != -1 && collection != -1)
  {
  $("#loader").css("display","inline-block");
  $(this).attr("id","none_add");
  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"add_product",
												ed:editeur,
												pr:prix,
												co:collection,
												is:isbn,
												pro:produit,
												tva_val:tva_valeur,
												prix_ht:prixht,
												typepro:type_prod,
												ob:observ,
												dep:depot,
												qt:qte
											  },
										 success:function(data)
										 {
										   $("#loader").css("display","none");
										    $("#isbn").val("");
										   $("#nom_produit").val("");
										   $("#prixht").val("");
										   $("#prix").val("");
										   $("#editeur").val($("#editeur option:first").val());
										   $("#collection").val($("#collection option:first").val());
										   $("#tva-valeur").val($("#tva-valeur option:first").val());
											$("#prixht-pnl").css("display","none");
											$("#observ").val("");
											$("#qteprod").val("");
											 $("#prix").removeAttr("readonly");
										   
									 
										sweetAlert(" ", "Produit a été ajouté à la liste des produits.", "success");
										$("#none_add").attr("id","ajouter_btn");

										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
												}
												 else{sweetAlert("Oops...","Veuillez remplir tous les champs requis." , "error");}
 
}); 
   $(document).on('keyup','#qteprod',function() {
   var qte  = $(this).val();
 //alert(qte)
 
    if((Number(qte) <=0))
   {
   $(this).val("1");
   }
   
   });
   $(document).on('change','#editeur',function() {
vl = $(this).val();
  $('#collection').prop('disabled', true);

  $.ajax({
										 type:"post",
										  url:"colection.php",
										 data:{ val:vl,
												typep:typeproduit},
										 success:function(data)
										 { 
										   
											$("#colselect").html(data);
											$('#collection').prop('disabled', false);

										 

										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
   });
   $('#prix').on('keydown', function() {
    prix=$(this).val();
  
  var r = isNumeric(prix);
 if(!r  ){var str = prix.substring(0, prix.length-1);$("#prix").val(str);}
   }); 
   $('#prix').on('keyup', function() {
    prix=$(this).val();
  
  var r = isNumeric(prix);
 if(!r  ){var str = prix.substring(0, prix.length-1);$("#prix").val(str);}
   });  
   $('#prixht').on('keydown', function() {
   var prixht=$(this).val();
 
 
  var r = isNumeric(prixht);
  //alert(r)
 if(!r){
	var str = prixht.substring(0, prixht.length-1);
	$("#prixht").val(str);
		}
   }); 
   $('#prixht').on('keyup', function() {
 /**/
   });
   $('#recherche').on('keyup', function() {
  
  $("#tableresult").html("<svg width='70' height='20'>  <rect width='20' height='20' x='0' y='0' rx='3' ry='3'><animate attributeName='width' values='0;20;20;20;0' dur='1000ms' repeatCount='indefinite'/><animate attributeName='height' values='0;20;20;20;0' dur='1000ms' repeatCount='indefinite'/> <animate attributeName='x' values='10;0;0;0;10' dur='1000ms' repeatCount='indefinite'/><animate attributeName='y' values='10;0;0;0;10' dur='1000ms' repeatCount='indefinite'/> 						  </rect><rect width='20' height='20' x='25' y='0' rx='3' ry='3'><animate attributeName='width' values='0;20;20;20;0' begin='200ms' dur='1000ms' repeatCount='indefinite'/> 							<animate attributeName='height' values='0;20;20;20;0' begin='200ms' dur='1000ms' repeatCount='indefinite'/><animate attributeName='x' values='35;25;25;25;35' begin='200ms' dur='1000ms' repeatCount='indefinite'/> <animate attributeName='y' values='10;0;0;0;10' begin='200ms' dur='1000ms' repeatCount='indefinite'/> 	</rect> <rect width='20' height='20' x='50' y='0' rx='3' ry='3'><animate attributeName='width' values='0;20;20;20;0' begin='400ms' dur='1000ms' repeatCount='indefinite'/> <animate attributeName='height' values='0;20;20;20;0' begin='400ms' dur='1000ms' repeatCount='indefinite'/><animate attributeName='x' values='60;50;50;50;60' begin='400ms' dur='1000ms' repeatCount='indefinite'/><animate attributeName='y' values='10;0;0;0;10' begin='400ms' dur='1000ms' repeatCount='indefinite'/></rect> 	</svg>")
	var val_search = $(this).val();
	var type="";
	$("#p-imp").css("display","inline-block");
	if(val_search==""){$("#p-imp").css("display","none");}
		var rec = $("#recherche").val();
	//$("#impr_cont").attr("href","pdf.php?v="+rec);
	document.getElementById("impr_cont").href="pdf.php?v="+rec; 
	if(isNumeric(val_search)){
	type="num"
	} 
											$.ajax({
										 type:"post",
										  url:"table-rech.php",
										 data:{ valsearch:val_search,
										 typeval:type
												 
										 },
										 success:function(data)
										 {
										 
										$("#tableresult").html(data);
									 
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													}); 
   });
 
   $(document).on('change','#tva-valeur',function(){
  if($(this).val()>0){ 
  if($("#prixht").val()== ""){
    $("#prix").val("");
	}
  $(".prixht-pnl").css("display","block");
  $("#prix").attr("readonly","true");
  }
  else if($(this).val()<= 0)
  { 
   $("#prix").removeAttr("readonly");
  $(".prixht-pnl").css("display","none");
  }
  });
   $(document).on('click','#add_line',function(){
   $("#myModalClient .modal-title").text("List des produits");
   $('#myModalClient .modal-body #mot_cle_recherche').text("Produit");
     arr = [];
   $("#bc-overlay").css("display","block");
   $("#validerbc").css("display","none");
   $("#get-prod-popup").html("");
   $('input[data-input="recherche"]').attr('id', 'popup-recherche');
   
   
   window.scrollTo(0, 0);
          return false;
  }); 
   $(document).on('keyup','.qte', function() {
	var  id = $(this).attr("id"); 
	var prix = $("#prix_"+id).text();
	var remise = $("#r_"+id).val();
	//79 − 79 × 15/100 = 79 − 79 × 0.15 = 79 − 11.85 = 67.15 dh.
 	var total =  ( Number(prix) -  Number(prix) *  Number(remise) / 100) * Number($(this).val());
	$("#total_"+id).text(Number(total).toFixed(2)); 
	
	somme_total();
	 
  }); 
  $(document).on('keyup','.qteretour', function() {
	var  id = $(this).attr("id"); 
	var prix = $("#prix_"+id).text();
	var remise = $("#r_"+id).val(); 
	//79 − 79 × 15/100 = 79 − 79 × 0.15 = 79 − 11.85 = 67.15 dh.
 	var total =  ( Number(prix) -  Number(prix) *  Number(remise) / 100) * Number($(this).val());
	$("#total_"+id).text((Number(total).toFixed(2)));
	  var  qte = $(this).attr("data-qtetotal");
   var qttotal = $(this).val() ;
   if( Number(qttotal) > Number(qte))
   {
   $(this).val("")
   $("#total_"+id).text("0.00");
   somme_total();
   }


	//
	 
  }); 
  $(document).on('keyup','.qt_livree', function() {
	var  id = $(this).attr("id"); 
	var prix = $("#pr_"+id).text(); 
	prix = prix.split(" DHs");
	var remise = $("#rm_"+id).text();
	remise = remise.split("%");
	//alert($(this).parent().attr("data-val"));
	//79 − 79 × 15/100 = 79 − 79 × 0.15 = 79 − 11.85 = 67.15 dh.
 	var total =  ( Number(prix[0]) -  ( Number(prix[0]) *  Number(remise[0]) / 100) ) * Number($(this).val());
	$("#tt_"+id).text(Number(total).toFixed(2)); 
	somme_total_BL();
	 
  });
   $(document).on('keyup','#timbre', function() {
   somme_total();
   });
   
   //Recherche Produit BC
      $('#popup-recherche').keyup( function() {
 $field = $(this);
    $('#results_produit').html(''); // on vide les resultats
    $('#ajax-loader').remove(); // on retire le loader
 
    // on commence à traiter à partir du 2ème caractère saisie
    if( $field.val().length > 0 )
    {
      // on envoie la valeur recherché en GET au fichier de traitement
      $.ajax({
  	type : 'GET', // envoi des données en GET ou POST
	url : 'popup-prod.php' , // url du fichier de traitement
	data : 'val='+$(this).val() , // données à envoyer en  GET ou POST
	beforeSend : function() { // traitements JS à faire AVANT l'envoi
		$field.after('<img src="http://apef-education.com/apefgest/asset/js/ajax-loader.gif" alt="loader" id="ajax-loader" />'); // ajout d'un loader pour signifier l'action
	},
	success : function(data){
//alert(data);		// traitements JS à faire APRES le retour d'ajax-search.php
		$('#ajax-loader').remove(); // on enleve le loader
		$('#results_produit').html(data); // affichage des résultats dans le bloc
	},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
      });
    }else if ($field.val().length == 0){
		$('#results_produit').html("");
	}
   });

// Fin recherche produit BC   

   //Recherche Produit devis
      $('#rech_produit_devis').keyup( function() {
 $field = $(this);
    $('#results_produit').html(''); // on vide les resultats
    $('#ajax-loader').remove(); // on retire le loader
 
    // on commence à traiter à partir du 2ème caractère saisie
    if( $field.val().length > 0 )
    {
      // on envoie la valeur recherché en GET au fichier de traitement
      $.ajax({
  	type : 'GET', // envoi des données en GET ou POST
	url : 'popup-prod.php' , // url du fichier de traitement
	data : 'val='+$(this).val() , // données à envoyer en  GET ou POST
	beforeSend : function() { // traitements JS à faire AVANT l'envoi
		$field.after('<img src="http://apef-education.com/apefgest/asset/js/ajax-loader.gif" alt="loader" id="ajax-loader" />'); // ajout d'un loader pour signifier l'action
	},
	success : function(data){
//alert(data);		// traitements JS à faire APRES le retour d'ajax-search.php
		$('#ajax-loader').remove(); // on enleve le loader
		$('#results_produit').html(data); // affichage des résultats dans le bloc
	},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
      });
    }else if ($field.val().length == 0){
		$('#results_produit').html("");
	}
   });

// Fin recherche produit BC
   //recherche Client devis //
   $('#rech_client_devis').keyup( function(){
    $field = $(this);
    $('#results').html(''); // on vide les resultats
    $('#ajax-loader').remove(); // on retire le loader
 
    // on commence à traiter à partir du 2ème caractère saisie
    if( $field.val().length > 0 )
    {
      // on envoie la valeur recherché en GET au fichier de traitement
      $.ajax({
  	type : 'GET', // envoi des données en GET ou POST
	url : 'search_client.php' , // url du fichier de traitement
	data : 'q='+$(this).val() , // données à envoyer en  GET ou POST
	beforeSend : function() { // traitements JS à faire AVANT l'envoi
		$field.after('<img src="http://apef-education.com/apefgest/asset/js/ajax-loader.gif" alt="loader" id="ajax-loader" />'); // ajout d'un loader pour signifier l'action
	},
	success : function(data){ // traitements JS à faire APRES le retour d'ajax-search.php
		$('#ajax-loader').remove(); // on enleve le loader
		$('#results').html(data); // affichage des résultats dans le bloc
	}
      });
    }else if ($field.val().length == 0){
		$('#results').html("");
	}		
  });
   // fin recherche Client devis //
   
   //recherche Client //
   $('#q').keyup( function(){
    $field = $(this);
    $('#results').html(''); // on vide les resultats
    $('#ajax-loader').remove(); // on retire le loader
 
    // on commence à traiter à partir du 2ème caractère saisie
    if( $field.val().length > 0 )
    {
      // on envoie la valeur recherché en GET au fichier de traitement
      $.ajax({
  	type : 'GET', // envoi des données en GET ou POST
	url : 'search_client.php' , // url du fichier de traitement
	data : 'q='+$(this).val() , // données à envoyer en  GET ou POST
	beforeSend : function() { // traitements JS à faire AVANT l'envoi
		$field.after('<img src="http://apef-education.com/apefgest/asset/js/ajax-loader.gif" alt="loader" id="ajax-loader" />'); // ajout d'un loader pour signifier l'action
	},
	success : function(data){ // traitements JS à faire APRES le retour d'ajax-search.php
		$('#ajax-loader').remove(); // on enleve le loader
		$('#results').html(data); // affichage des résultats dans le bloc
	}
      });
    }else if ($field.val().length == 0){
		$('#results').html("");
	}		
  });
   // fin recherche Client //
   
      $(document).on('keyup','#popup-rechercheclient', function() {
  var rechval =$(this).val();

$("#get-prod-popup").html("<div class='sk-circle'>   <div class='sk-circle1 sk-child'></div>   <div class='sk-circle2 sk-child'></div>   <div class='sk-circle3 sk-child'></div>   <div class='sk-circle4 sk-child'></div>   <div class='sk-circle5 sk-child'></div>   <div class='sk-circle6 sk-child'></div>   <div class='sk-circle7 sk-child'></div>   <div class='sk-circle8 sk-child'></div>   <div class='sk-circle9 sk-child'></div>   <div class='sk-circle10 sk-child'></div>   <div class='sk-circle11 sk-child'></div>   <div class='sk-circle12 sk-child'></div> </div>");
$("#get-prod-popup").css("opacity","1");
  
											$.ajax({
										 type:"post",
										  url:"client-popup.php", 
										 data:{ 
										 val:rechval 
										 },
										 success:function(data)
										 { 
										   $(".sk-circle").css("display","none");
										$("#get-prod-popup").html(data);
									 
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
		 
		 
													}); 
   });
   $(document).on('click','.bc-link-popup',function(){
 countline++;
 var ck=false;
   var nom,prix,isbn,id,divID,topPX;
   nom=$(this).attr("data-nom");
   prix=$(this).attr("data-prix");
   isbn=$(this).attr("data-isbn");
   id=$(this).attr("data-id");
  
   $(".isbn-bc").each(function(){
    topPX = $(this).offset().top ;
	var trid = $(this).parent().attr("id");
	if($(this).text()==isbn)
	{
	ck=true; 
	 $("#"+trid).addClass("blink");
	 setTimeout(function() {
       $("#"+trid).removeClass("blink");
   }, 1500);
  
  
	   
	   
	return false;
	}
   });
   if(ck==false)
   {
   $("#add_line").closest('table').find('tr:last').prev().after("<tr id='tr_"+countline+"' class='tr_ligne' ><td data-isbn ='isbn-ligne"+countline+"' class='isbn-bc'>"+isbn+"</td><td>"+nom+"</td><td><input type='text'></td><td><input id="+id+" data-trligne ="+countline+" class='qte' type='text'></td><td id='prix_"+id+"'>"+prix+"</td><td><select data-remise='remise-ligne"+countline+"' class= 'rms' id=r_"+id+"><option value='10'>10%</option><option value='20'>20%</option></select></td><td class = 'total-bc' id='total_"+id+"' ></td><td data-supp='"+countline+"'><img title ='supprimer' class='supprimer_ligne' src ='asset/image/supp.png' width='10' height='10'/></td></tr>");
   }
   $("#bc-overlay").css("display","none");
  $('html, body').animate({
        scrollTop: topPX -200 
    }, 800);
			}); 
   $(document).on('click','.client-link-popup',function(){
 countline++;
 var ck=false;
 $(".close").click();
   var nom,prix,id,ville,pays,tel,fax;
   nom=$(this).attr("data-nom");
   adr=$(this).attr("data-adresse");
   ville=$(this).attr("data-ville");
   pays=$(this).attr("data-pays");
   tel=$(this).attr("data-tel");
   fax=$(this).attr("data-fax");
   id=$(this).attr("data-id"); 
   $("#hideid").val(id);
   $('#nom option[data-clientid='+id+']').prop('selected', true);
  // $('#py option[value='+pays+']').prop('selected', true);
   $('#py option[value="'+pays+'"]').attr("selected", "selected");
   $('#vi option[value="'+ville+'"]').attr("selected", "selected");
		 $("#adres-clnt").text(adr);
		 $("#ville-clnt").text(ville);
		 $("#tel").text(tel);
		 $("#fax").text(fax);
		 var conceptName = $('#py').find(":selected").text();
		 var conceptName2 = $('#vi').find(":selected").text();
		 $("#pays-clnt").text(conceptName);
		 $("#villeclnt").text(conceptName2);
		  $("#hidden_ville").val(ville);
	  $("#hidden_adresse").val(adr);
	  $("#rsclient").val(nom);
 
		 $("#idclientstatut").val(id);
		 $("#nomclientstatut").val(nom);
		}); 
	 
	$(document).on('click','.supprimer_ligne',function(){
	if (confirm('Voulez-vous vraiment continuer ?')) {
   var id_sp = $(this).parent().attr('data-supp');
	 $("#tr_"+id_sp).remove();
	 somme_total1();
}  
	 
	   });
   $(document).on('click','#addfact',function(){ 
   //N_fact`, `N_fact_client`, `id_client`, `repres`, `depot`, `iduser
   var n_fact_client,nafct,repr,depot,obser;
n_fact_client = $("#n_fact_client").val();
nafct = $("#nafct").val();
repr = $("#repr").val();
depot = $("#depot").val();
obser = $("#obser").val();
var idbl = $("#hideinput").val();
var idclient = $("#nom").find(':selected').attr('data-clientid'); //alert(n_fact_client+" * "+nafct+" * "+repr+" * "+depot+" * "+obser+" * "+idclient)
if(depot != "-1" && repr != "-1" && nafct != "" && idclient != "-1" && idbl != "")
{
          $.ajax({
										 type:"post",
										 url:"fonctions.php",
										 data:{ fonctions:"add_facturation",
										 nfc:n_fact_client,
											   na:nafct,
											   rep:repr,
											   dp:depot,
											   obs : obser,
												cli:idclient,
												ibl:idbl
												 },
										 success:function(data)
										 {	sweetAlert(" ", "La facture a été enregistrée", "success");
										 location.reload();},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
												
													
													}
													}); 
													}
													 else{sweetAlert("Oops...","Veuillez remplir tous les champs requis." , "error");}
   });
   $(document).on('click','.clicktd',function(){ 
   trid =  $(this).closest('tr').attr('id');
   mode =  $(this).closest('tr').attr('data-bl-mode');
   statut =  $(this).closest('tr').attr('data-bl-statut');
   timber =  $(this).closest('tr').attr('data-timber');
	$("#timbre").val(timber);
	$("#hideinput").val(trid);
   $("#modereg option:contains("+mode+")").attr('selected', true);
   $("#statut option:contains("+statut+")").attr('selected', true);
          $.ajax({
										 type:"post",
										  url:"fact-produit.php",
										 data:{blid:trid
										 
												 },
										 success:function(data)
										 {$("#tbl_bc").html(data);
										 
										     var v = 0;
										   $(".totalfact").each(function(){
										  
										   v = v + Number($(this).text());
										});
										   
											  timbre = $("#timbre").val();
													
														 $("#mht").val(v.toFixed());
														 mtva= Number(v) * 20 / 100
														 $("#mtva").val(Number(mtva).toFixed(2));
														 if( timbre == "" ){
														 timbre = 0
														 }
											mttc = Number($("#mtva").val()) +  Number($("#mht").val())+  Number(timbre);
											$("#mttc").val(mttc.toFixed());
										   
										   },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
												
													
													}
													}); 
   });
   
   $(document).on('click','#close-popup-bc',function(){
   $("#bc-overlay").css("display","none");
   $("#bc-overlay-client").css("display","none");
   });
   $(document).on('change','#nom',function(){
	   alert('test');
	var ville,adresse,nomclient;
	$(".prline").remove();
		$("#statutbc").html("");
	var facture=$(this).find(':selected').attr('data-fact');
	
	var clientid=$(this).find(':selected').attr('data-clientid'); 
	adresse=$(this).find(':selected').attr('data-adresse'); 
	ville=$(this).find(':selected').attr('data-ville'); 
	 if(facture == "facture")
	 {
             $.ajax({
										 type:"post",
										  url:"ajax-bl.php",
										 data:{cid:clientid
										 
												 },
										 success:function(data)
										 
										 {$("#tablebl").html(data);
										 
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
												
													
													}
													}); 
	}
	else if(facture == "BC")
	 {
             $.ajax({
										 type:"post",
										  url:"ajax-clientBC.php",
										 data:{idclient:clientid
										 
												 },
										 success:function(data)
										 {$("#tablebc").html(data);
										 	 alert(data);
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
												
													
													}
													}); 
	}
	if($(this).val() != "-1")
	{
	  $("#adres-clnt").text(adresse);
	  $("#ville-clnt").text(ville);
	  $("#hidden_ville").val(ville);
	  $("#hidden_adresse").val(adresse);
	  
	}
	else{
	$("#adres-clnt").text("");
	$("#ville-clnt").text("");
	}
   });
   
   $(document).on("change",".checkboxBC",function(){
    if (this.checked) {
	var id = $(this).attr('id');
            $.ajax({
										 type:"post",
										  url:"ajax-clientBC.php",
										 data:{showprod:id
										 
												 },
										 success:function(data)
										 {$("#prodtbl").html(data);
										 	 
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
												

													}
													}); 
    } else {
       
		$(".prline").remove();
		$("#statutbc").html("");
    }
});
   
   $("#client-adresse").click(function(){
   $("#myModalClient .modal-title").text("List des clients");
   $("#myModalClient .modal-body #mot_cle_recherche").text("Client");
   $("#bc-overlay").css("display","block");
   $("#validerbc").css("display","none");
  // $("#q").val("");
    $('input[data-input="recherche"]').attr('id', 'q');
	  $("#get-prod-popup").html("");
   });
   $("#client-ville").click(function(){
    var ad = $(this).attr("data-vl");
   $('#ville option[value='+ad+']').prop('selected', true);
   });
   $(document).on('keyup','.qteretour',function(){
  /* var  qte = $(this).attr("data-qtetotal");
   var qttotal = $(this).val() ;
   if( Number(qttotal) > Number(qte))
   {
   $(this).val(0)
   }
 
*/
   });
   $(document).on('change','.rms',function(){
    var select_id = $(this).attr("id");
    var arr = select_id.split('_');
	
	var total =  ( Number($("#prix_"+arr[1]).text()) -  Number($("#prix_"+arr[1]).text()) *  Number($("#r_"+arr[1]).val()) / 100) * $("#"+arr[1]).val();
	$("#total_"+arr[1]).text(Number(total).toFixed(2)); 
	somme_total();
	});	 
	somme_total = function() { var sommetotal = 0,mtva = 0,mttc =0,timbre;
			  
				$(".total-bc").each(function(){
				timbre = $("#timbre").val();
				 sommetotal= Number(sommetotal) + Number($(this).text()); 
				 $("#mht").val(Number(sommetotal).toFixed());
				 mtva= Number(sommetotal) * 20 / 100
				 $("#mtva").val(Number(mtva).toFixed(2));
				 if( timbre == "" ){
				 timbre = 0
				 }
				
				 mttc = Number($("#mtva").val()) +  Number($("#mht").val())+  Number(timbre);
				 $("#mttc").val(Number(mttc).toFixed(2)); 
				 //var montant_retour = Number($("#bctotal").text()) - Number(mttc);   $("#M_R").text(montant_retour)
				$("#M_R").text( Number(mttc).toFixed(2));
				});
				  $(".close").click();
			} 
	somme_total1 = function() { var sommetotal = 0,mtva = 0,mttc =0,timbre;
			  
				$(".total-bc").each(function(){
				timbre = $("#timbre").val();
				 sommetotal= Number(sommetotal) + Number($(this).text()); 
				 $("#mht").val(Number(sommetotal).toFixed());
				 mtva= Number(sommetotal) * 20 / 100
				 $("#mtva").val(Number(mtva).toFixed(2));
				 if( timbre == "" ){
				 timbre = 0
				 }
				
				 mttc = Number($("#mtva").val()) +  Number($("#mht").val())+  Number(timbre);
				  
				 $("#mttc").val(Number(mttc).toFixed(2)); 
				 //var montant_retour = Number($("#bctotal").text()) - Number(mttc);   $("#M_R").text(montant_retour)
				$("#M_R").text( Number(mttc).toFixed(2));
				});
				  $(".close").click();
			}	
			somme_total_BL = function() { var sommetotal = 0,mtva = 0,mttc =0,timbre;
			  
				$(".total-bc").each(function(){
				timbre = $("#timbre").text();
				 sommetotal= Number(sommetotal) + Number($(this).text());
				 $("#mht").text(Number(sommetotal).toFixed(2));
				 mtva= Number(sommetotal) * 20 / 100
				 $("#mtva").text(Number(mtva).toFixed(2));
				 if( timbre == "" ){
				 timbre = 0
				 }
				 mttc = Number($("#mtva").text()) +  Number($("#mht").text())+  Number(timbre);
				 $("#mttc").text(Number(mttc).toFixed(2));
				});
			}
	$(document).on('click','#imprimer_pdf_excel',function(){
	$("#menu-pan").css("display","inline-block");
	$("#menu-pan").attr("class","bounceInLeft animated");
	});
	$(document).on('click','#devis-btn',function(){ 
	 var isbn="",qte="",remise="",ligne=[],check=0,devisid,clientid,repr,depot,obser;
 
devisid=$("#devisid").val();
clientid = $("#hideid").val();
repr = $("#repr").val();
depot = $("#depot").val();
obser = $("#obser").val();
 
$('.tr_ligne').each(function(){
var idtd = $(this).attr("id");
 check = 0;
var arr = idtd.split("_");

 qte =  $("input[data-trligne='" + arr[1] +"']").val();
 if(qte != ""){check = 1;}
 else{ return false;}
 isbn = $("td[data-isbn='isbn-ligne" + arr[1] +"']").text();
 remise= $("select[data-remise='remise-ligne" + arr[1] +"']").val();
 var info=[
   		  {
		  "qte":qte,
		  "isbn":isbn,
		  "remise":remise
		  }];
ligne.push(info);
qte="";remise="";

});
if(devisid != "" && repr !="-1" && depot !="-1" && ligne.length >0 )
{
     $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"add_lignedevis",
										 
												tableau:ligne,
												dev:devisid,
												cl:clientid,
												re:repr,
												dep:depot,
												o:obser
												
												},
										 success:function(data)
										 {
											 alert(data);
										 devisid = devisid.replace("D","");
										 devisid = Number(devisid)+1;
										 $("#devisid").val("D"+devisid)
										 sweetAlert("Opération efféctué...","Devis a été ajouté." , "success");
										 document.location.href="consulterdevis.php";
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
												
													
													}
													}); 
													}
													 
													else{sweetAlert("Oops...","Veuillez remplir tous les champs requis." , "error");}
	});
	$(document).on('click','#bc-btn',function(){ 
var isbn="",qte="",remise="",ligne=[],idbc,n_bc_client,nom_client,adresse_txt,ville,modereg,tmb,check=0,fonction="add_ligneCommande";
modereg=$("#modereg").val();
var datatype = $(this).attr("data-type");
 var statutval = $("#statut option:selected").val(); 
 var statut = $("#statut option:selected").text(); 
tmb=$("#timbre").val();
idbc=$("#nbc").val();
ville=$("#hidden_ville").val();
clientid=$("#nom").find(':selected').attr('data-clientid'); 
nom_client = $("#nom").val();
adresse_txt=$("#hidden_adresse").val();
n_bc_client=$("#n_bc_client").val();
var observa = $("#adresse_txt").val();
$('.tr_ligne').each(function(){
var idtd = $(this).attr("id");
check = 0;
var arr = idtd.split("_");

 qte =  $("input[data-trligne='" + arr[1] +"']").val();
 if(qte != ""){check = 1;}
 else{ return false;}
 isbn = $("td[data-isbn='isbn-ligne" + arr[1] +"']").text();
 remise= $("select[data-remise='remise-ligne" + arr[1] +"']").val();
 var info=[
   		  {
		  "qte":qte,
		  "isbn":isbn,
		  "remise":remise,
		  "n_bc":idbc
		  }];
ligne.push(info);
qte="";remise="";

});
if(datatype == "BL"){fonction = "add_ligneBL"}
//alert(idbc+" "+nom_client+" "+adresse_txt+" "+ville+" "+check);
if(idbc != "" && nom_client != -1  && adresse_txt != "" && ville != -1 && check == 1 && statutval != "-1" && modereg !="Mode règlements")
{ 
$("#loaderbc").css('display','inline-block');
$("#bc-btn").css('display','none');
							  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ 
										 fonctions:fonction,
										 tableau:ligne,
										 id_bc:idbc,
										 client_id:clientid,
										 adressetxt:adresse_txt,
										 n_bcclient:n_bc_client,
										 vi_lle:ville,
										 mode_reg:modereg,
										 timbre:tmb,
										 statut:statut,
										obsr:observa
										 },
										 success:function(data)
										 {
									 
									 $("#loaderbc").css('display','none');
									 $("#bc-btn").css('display','none');
									// $("#imprimer_pdf_excel").css('display','inline-block');
									 $("#statut").css('display','inline-block');
								//	 $("#btn_statut").css('display','inline-block');
									// $("#imprimer_pdf_excel").attr("href","bc-pdf.php?AtD8YKyQepDaA="+idbc);
									 $("#btn_statut").attr("data-bcid",idbc);
									 
									 
									 /***************************************************************************************************/
									 
									 
									$("#btn_statut").css("display","none");
									$("#loaderbc").css("display","inline-block");
									 
									 
										 
										$.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"update_statut",
												bc_id:idbc,
												st:statut 
												},
										 success:function(data)
										 { if(datatype != "BL"){
										 
										 fonction = "add_ligneBL"
												 $("#loaderbc").css("display","none");
										    $("#bc-btn").css("display","none");
											 
											/*if(statutval == "2")
											{$("#imprimer_pdf_excel").css("display","inline-block");}*/
										 
										  $("#btn_bl").css("display","inline-block");
										   $("#btn_bl").attr("href","bl.php?AtD8YKyQepDaA="+idbc);	 
										 }
										 else{ $("#btn_bl").css("display","none");
										  $("#bc-btn").css("display","inline-block");
										  $("#loaderbc").css("display","none");
										 sweetAlert("", "Bon de livraison a été efectuée", "success");
										 location.reload();}
									
										    },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													}); 
													
													
		if(statutval=="1" || statutval=="4" || statutval=="5"  )											
							{						
	var idbcc = $("#nbc").val();												
										  
 
  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ 
										 "fonctions":"update_lignecommande_qtelv",
										 id_bcc:idbcc 
										 
										 
										 },
										 success:function(data)
										 {
										 
									
									      },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$("#save").css("display","inline-block");
													
													}
		 
		 
													});
													
													
													
													} 
													
									 /***************************************************************************************************/
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});   
	
	 
 }
 else{sweetAlert("Oops...","Veuillez remplir tous les champs requis." , "error");}
}); 
 //SELECT b.`N_BC_interne`, `N_BC_client`, `id_client`, `adresse`, `ville`, `timber`, `mode_reglement`, `statut`, `code_user`,`id_ligne_cmd`, l.`N_BC_interne`, `code_produit`, `qte`, `remise` FROM `bon_commande` b , ligne_commande l where b.`N_BC_interne` = l.`N_BC_interne` and (b.`N_BC_interne` = 151 or `mode_reglement` ='Cheque')
 
 $(document).on('click','.hide',function(){
 $(".alertPanelBl").attr("class","bounceOutRight animated");
 $(".alertPanelBl").css("display","none");
 
 }); 
 
 $(document).on('click','.ouiPanelBL',function(){
 
 bcid = $("#bcidlink").val();
     $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"update_statut",
												bc_id:bcid,
												st:"Fermé" 
												},
										 success:function(data)
										 { $(".alertPanelBl").delay(0).fadeOut(500);
										  $("#imprimer_pdf_excel").css("display","inline-block");
										 $("#save").css("display","none");
										  },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
													}); 
 });
 
 $(document).on('click','#btn_statut',function(){ 
 var bcid =$(this).attr("data-bcid");
 var statutval = $("#statut option:selected").val();
 var statut = $("#statut option:selected").text();
var modif_qte = ""; 
$("#btn_statut").css("display","none");
$("#loaderbc").css("display","inline-block");
 if(statutval != "-1")
 {
	if(statutval == "3")
	{ 

	modif_qte="&ALK8RX=1";
	}
    $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"update_statut",
												bc_id:bcid,
												st:statut 
												},
										 success:function(data)
										 { $("#loaderbc").css("display","none");
										    $("#bc-btn").css("display","none");
											$("#statut").css("display","none");
											if(statutval == "2")
											{$("#imprimer_pdf_excel").css("display","inline-block");}
											else if(statutval == "3")
											{
										  $("#btn_bl").css("display","inline-block");
										   $("#btn_bl").attr("href","bl.php?AtD8YKyQepDaA="+bcid+""+modif_qte);}	
										   else if( statutval == "1" || statutval == "4" || statutval == "5" )
											{ $("#btn_bl").css("display","inline-block");
										   $("#btn_bl").css("display","inline-block");
										   $("#btn_bl").attr("href","bl.php?AtD8YKyQepDaA="+bcid);
										   }
										  
										  
										 
													
										   
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													}); 
													
													
		if(statutval=="1" || statutval=="4" || statutval=="5"  )											
							{						
	var idbcc = $("#nbc").val();												
										  
 
  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ 
										 "fonctions":"update_lignecommande_qtelv",
										 id_bcc:idbcc 
										 
										 
										 },
										 success:function(data)
										 {
										 
									
									      },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$("#save").css("display","inline-block");
													
													}
		 
		 
													});
													
													
													
													}}
		else{sweetAlert("Oops...", "Aucun statut n'a été sélectionné.", "warning");
		$("#btn_statut").css("display","inline-block");
$("#loaderbc").css("display","none");}
 });
  $(document).on('click','#clientstatut', function() {
	  $("#bc-overlay").css("display","block");
 
	  });
	 
 $(document).on('click','#btn_statut_rech',function(){
			var con ="";
			$("#tbl_bc").html("");
			var date1 = $("#dateFrom").val();
			var date2 = $("#dateTo").val();
			var statut = $("#statut").val();
			var idclient = $("#nom").find(':selected').attr('data-clientid'); ;
			$(".sk-circle").css("display","block");
			if(date1 != "" && date2 != "")
			{  
			  con = "and date(datebc) between '"+dbDate(date1)[2]+"-"+dbDate(date1)[1]+"-"+dbDate(date1)[0]+ "' and '"+dbDate(date2)[2]+"-"+dbDate(date2)[1]+"-"+dbDate(date2)[0]+"'";
			} 
			if(statut != "-1")
			{con = con+" and statut = '"+statut+"'";}
			if(idclient != "-1" )
			{con = con+" and b.id_client = '"+idclient+"'";}
			 
			
											$.ajax({
										 type:"post",
										  url:"table-statut.php", 
										 data:{ 
										 req:con 
										 },
										 success:function(data)
										 {
										  $(".sk-circle").css("display","none");
										$("#tbl_bc").html(data);
									 		 
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
													
													}
		 
		 
													}); 
		}); 
	
 $(document).on('click','.produitcheck',function(){

 var identi = $(this).attr("data-idprod");
 var valeurqte=$("#qtprod_"+identi).val();
 
 if( valeurqte != "")
 {
 var nom,isbn,prix, id,qte;
  var ck=false;
 var trid = $(this).closest('tr').attr('id');
//alert(trid); 
 id = $(this).attr('data-idprod');
 nom = $(this).attr('data-nomprod');
 isbn = $(this).attr('data-isbnprod');
 prix = $(this).attr('data-prixprod');
 qte = valeurqte;
 if($(this).find('img').attr('src') == "asset/image/checkmarknone.png")
 {
 $(".isbn-bc").each(function(){
    topPX = $(this).offset().top ;
 
	var trid = $(this).closest('tr').attr('id'); 
	if($(this).text()==isbn)
	{
	ck=true; 
	/* $("#"+trid).addClass("blink");
	 setTimeout(function() {
       $("#"+trid).removeClass("blink");
   }, 1500);
  */ 
	    sweetAlert("Le produit est déjà sélectionné.");
	   
	return false;
	}
   });
   if(ck == false){
 $(this).find('img').attr('src','asset/image/checkmark.png');
   arr.push({
        nm: nom,
        isb: isbn,
        pr: prix,
		i_d:id,
		qt :qte
    });
 }
 }
 else
 {
 $(this).find('img').attr('src','asset/image/checkmarknone.png');
   iidd =  $(this).closest('tr').attr('id'); 
 
    $.each(arr, function(i){
    if(arr[i].i_d === iidd) {
        arr.splice(i,1);
        return false;
    }
});  
 }
}
else
{
 sweetAlert("Oops...", "Vous pouvez saisir la quantité sortie", "warning");
 
}
}); 
   $(document).on('keyup','#lockiputpass',function(e){
    if (e.keyCode == 13) {
		$("#lockin").click();
    }
});
   $(document).on('keydown',document,function(e){ 
 
  if(e.ctrlKey == true && e.keyCode == 32){
  
				   $.ajax({
										 type:"post",
										  url:"sessionlock.php",
										 data:{ 
												lockout:"true"
											  },
										 success:function(data)
										 { 
												   $("#sessionlocked").removeClass("lockk");
												   $("#sessionlocked").removeClass("slideOutUp");
												   $("#sessionlocked").addClass("animated slideInDown");	
											},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
													
													
													}
		 
		 
													});

	} 
});
$(document).on("click","#lockin",function(){
var passw = $("#lockiputpass").val();
			   $.ajax({
										 type:"post",
										  url:"sessionlock.php",
										 data:{ 
												lockin:"true",
												pass:passw
											  },
										 success:function(data)
										 { 
												  if(data == "ok")
												  {
												  $("#sessionlocked").addClass("animated slideOutUp");	
												   $("#sessionlocked").addClass("slideInDown");
													$("#lockiputpass").val("");
													 $("#errorpass").css("display","none"); 
												  }
												  else{	  $("#errorpass").css("display","block");}
												   
 											},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
													
													
													}
		 
		 
													});
});

$(document).on("click","#locksession",function(){
			   $.ajax({
										 type:"post",
										  url:"sessionlock.php",
										 data:{ 
												lockout:"true"
											  },
										 success:function(data)
										 { 
												   $("#sessionlocked").removeClass("lockk");
												   $("#sessionlocked").addClass("animated slideInDown");	
											},
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
													
													
													}
		 
		 
													});
});
$(document).on("click","#save",function(){
if(check_QteLv())
{
var ligne=[],i;
 $("#save").css("display","none");
 $("#loaderbc").css("display","inline-block");
$('.tablerow').each(function(){
var idtd = $(this).attr("id");
check = 0;
var arr = idtd.split("_");
var idbc = $("#bcidlink").val();
 qte =  $("input[data-trligne='" + arr[1] +"']").val();
 
 isbn = $("td[data-isbn='isbn-ligne" + arr[1] +"']").text();
// remise= $("select[data-remise='remise-ligne" + arr[1] +"']").text();
 
 var info=[
   		  {
		  "qte":qte,
		  "isbn":isbn, 
		  "n_bc":idbc
		  }];
ligne.push(info);
qte="";remise="";

 
});
 
  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ 
										 fonctions:"update_lignecommande",
										 tablebl:ligne 
										 },
										 success:function(data)
										 {
										 
										 $("#imprimer_pdf_excel").css("display","inline-block");
										 $("#loaderbc").css("display","none");
										 
									      },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$("#save").css("display","inline-block");
													
													}
		 
		 
													});  
													}
													 
													
											 
});

function check_QteLv()
{
var inputcheck =0;
var countin = $(".qt_livree").length;
var valid =true;
$(".qt_livree").each(function(){  
var tdid = $(this).attr("id");
var qte = $("#tdqte_"+tdid).text();
var isbn =$("#id_"+tdid).closest('tr').children('td:first').text();
var qtelv = $("#tdqtelv_"+tdid).attr("data-val");
var vl = $("#tdqtelv_"+tdid+" input[type='text']").val();
 bcid = $("#bcidlink").val();
if(Number(qte)>0){
 if(Number(qte)<Number(qtelv) + Number(vl))
 {
  sweetAlert("Oops...","PRODUIT ISBN- "+isbn+",\n\n La quantité livrée doit être inférieure ou égale à la quantité commandée \n Quantité restant est "+(Number(qte)  -  Number(qtelv)) , "error");
 
 valid =false;
 return false;
 }
 else if(Number(qte) == Number(qtelv) + Number(vl))
 {
 inputcheck++;
 //$("#tdqtelv_"+tdid).text(qte);
}
 }
 else
 {
  sweetAlert("Oops...", "La quantité demandée n'est pas valide", "error");
  
 }
 if(inputcheck == countin)
 {
 
  
     $.ajax({
	 
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"update_statut",
												bc_id:bcid,
												st:"Livraison partielle / BC terminé" 
												},
										 success:function(data)
										 { $(".alertPanelBl").delay(0).fadeOut(500);
										  $("#imprimer_pdf_excel").css("display","inline-block");
										 $("#save").css("display","none");
										  },
													error: function(x,y,z){
													  sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														 
														$(".gest-module").css("display","none");
													 
													}
													}); 
 }
});
return valid;
}
/*$(document).on("click","*",function(){
 //$("#idbclist").css("display","none");
 
 
});*/
$('#idbclist').slimscroll({ 
size: '8px',
width: '100%',
height: '100px',
 boxShadow: '1px 1px 4px 1px #908989',
 allowPageScroll: true
});
$(document).on("keyup","#retourinput",function(){
var pag="";
 var consultretour = $(this).attr("data-txt"); if(consultretour == "pageconsulter"){ pag ="page";}
 var idbc = $(this).val(); 
  if(idbc.length > 0){
  $("#idbclist").css("display","block");
 $("#idbclist").html("<div style ='margin: 30px auto;' class='sk-circle'>   <div class='sk-circle1 sk-child'></div>   <div class='sk-circle2 sk-child'></div>   <div class='sk-circle3 sk-child'></div>   <div class='sk-circle4 sk-child'></div>   <div class='sk-circle5 sk-child'></div>   <div class='sk-circle6 sk-child'></div>   <div class='sk-circle7 sk-child'></div>   <div class='sk-circle8 sk-child'></div>   <div class='sk-circle9 sk-child'></div>   <div class='sk-circle10 sk-child'></div>   <div class='sk-circle11 sk-child'></div>   <div class='sk-circle12 sk-child'></div> </div>");
  $.ajax({
										 type:"post",
										  url:"ajax-listidbc.php",
										 data:{ 
										 
										 id:idbc,
										 page:pag
										 },
										 success:function(data)
										 {
										 
											$("#idbclist").html(data);
											 $("#idbclist").css("display","block");
									      },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$("#save").css("display","inline-block");
													
													}
		 
		 
													}); 
													}
											else
											{
											 $("#idbclist").css("display","none");
											}
											
});

$(document).on("click",".idbcint",function(){
var clickedID = $(this).attr("data-validbc"); 
var page ="table-retour.php";
var consultretour = $("#retourinput").attr("data-txt"); if(consultretour == "pageconsulter"){ page ="table-consultretour.php";}
$("#retourinput").val(clickedID);
var cl =$(this).attr("data-client");
$("#idbclist").css("display","none");
$("#tableR").html("<br/><br/><br/><div class='sk-circle'>   <div class='sk-circle1 sk-child'></div>   <div class='sk-circle2 sk-child'></div>   <div class='sk-circle3 sk-child'></div>   <div class='sk-circle4 sk-child'></div>   <div class='sk-circle5 sk-child'></div>   <div class='sk-circle6 sk-child'></div>   <div class='sk-circle7 sk-child'></div>   <div class='sk-circle8 sk-child'></div>   <div class='sk-circle9 sk-child'></div>   <div class='sk-circle10 sk-child'></div>   <div class='sk-circle11 sk-child'></div>   <div class='sk-circle12 sk-child'></div> </div>");
  $.ajax({
										 type:"post",
										  url:page,
										 data:{ 
										 
										 id:clickedID 
										 },
										 success:function(data)
										 {
										 
											$("#tableR").html(data);
											$("#client").text(cl);
									      },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$("#save").css("display","inline-block");
													
													}
		 
		 
													});  
});
$(document).on("click",".validerbc",function(){

 var t = "",i =0;
 for(i = 0; i<arr.length;i++)
 { 
 	 
	 
	//79 − 79 × 15/100 = 79 − 79 × 0.15 = 79 − 11.85 = 67.15 dh.
 	var total =  ( Number(arr[i]["pr"]) -  Number(arr[i]["pr"]) *  Number(10) / 100) * Number(arr[i]["qt"]);
	  

	var to = Number(total).toFixed(2); 
	 
t =  "<tr id='tr_"+arr[i]["isb"]+"' class='tr_ligne' ><td data-isbn ='isbn-ligne"+arr[i]["isb"]+"' class='isbn-bc'>"+arr[i]["isb"]+"</td><td>"+arr[i]["nm"]+"</td><td><input  class ='form-control' type='text'></td><td><input class ='form-control qtejq' id="+arr[i]["i_d"]+" data-trligne ="+arr[i]["isb"]+" class='qte' type='text' value='"+arr[i]["qt"]+"' ></td><td id='prix_"+arr[i]["i_d"]+"'>"+arr[i]["pr"]+"</td><td><select  data-remise='remise-ligne"+arr[i]["isb"]+"' class= 'rms form-control' id=r_"+arr[i]["i_d"]+"><option value='10'>10%</option><option value='20'>20%</option></select></td><td class = 'total-bc' id='total_"+arr[i]["i_d"]+"' >"+to+"</td><td data-supp='"+arr[i]["isb"]+"'><img title ='supprimer' class='supprimer_ligne' src ='asset/image/supp.png' width='10' height='10'/></td></tr>" + t

 }
 
 $("#table_produits > tbody:first").append(t);// $(".qte").mask("#");
 $("#bc-overlay").css("display","none");
 somme_total1();

});

 });
 $(document).on('change', '.selectdataclient', function(e){
      id =  $(this).parent().parent().attr("data-idclient") ;
	  clmn = $(this).attr("data-clmn");
	  valeur=$(this).val();
	tdid =  $(this).parent().attr("id")  
	  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{
											fonctions:"update_client" ,
											idc:id,
											cl:clmn,
											vl:valeur
										 },
										 success:function(data)
										 {  
										sweetAlert(" ", "La modification a été effectuée", "success");
										 $("#span"+tdid).text(valeur);
										 $("#span"+tdid).css("display","block");
										 $(".selectdataclient").css("display","none");
										  },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
   });
 $(document).on('keyup', '.modifinput', function(e){   
    if(e.keyCode==13){
         var id =  $(this).parent().attr("data-idretour") ;
	 var clmn = $(this).parent().attr("data-column");
	 var valeur=$(this).val();
	var tdid =  $(this).parent().attr("id")  ; 
	var qtmx = $(this).attr('data-qtemax') ;
	var mdf = $(this).attr('data-modif');
	 if((Number(valeur) <= Number(qtmx) && Number(valeur) > 0) || Number(mdf) > 0 )
	 { 
	  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{
											fonctions:"update_retour" ,
											idc:id,
											cl:clmn,
											vl:valeur
										 },
										 success:function(data)
										 { 
										sweetAlert(" ", "La modification a été effectuée", "success");
										 $("#"+tdid+" span").text(valeur);
										 $("#"+tdid+" span").css("display","block");
										 $(".modifinput").css("display","none");
										  },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});  
    }
	else{sweetAlert("Oops...", "La quantité retourné n'est pas valide", "error");}
    }
});
 $(document).on('keyup', '.designation', function(e){
  if(e.keyCode==13){
 var idprod = $(this).attr('data-idprod');
 var valeur = $(this).val();
 var colm =  $(this).attr('data-clmn'); 
 var spn = $(this).parent().find("span");
 if(valeur != "")
 {
 	  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{
											fonctions:"update_produit" ,
											idc:idprod,
											cl:colm,
											vl:valeur
										 },
										 success:function(data)
										 {   spn.text(valeur);
										     spn.css("display","block");
										    $(".designation").css("display","none");
										sweetAlert(" ", "La modification a été effectuée", "success");
									
										  },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
													
 }
 
 else
 {
  sweetAlert("Oops...", "La valeur entrée n'est pas valide", "error");
  
 }
 }
 
});  
$(document).on('change', '.prodselct', function(e){
  
 var idprod = $(this).attr('data-idprod');
 var valeur = $(this).val();
 var colm =  $(this).attr('data-clmn'); 
 var spn = $(this).parent().find("span");
 if(valeur != "")
 {
 	  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{
											fonctions:"update_produit" ,
											idc:idprod,
											cl:colm,
											vl:valeur
										 },
										 success:function(data)
										 {   spn.text(valeur);
										     spn.css("display","block");
										    $(".prodselct").css("display","none");
										sweetAlert(" ", "La modification a été effectuée", "success");
								
										  },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
													
 
 }
 
}); 
 $(document).on('keyup', '.inputdataclient', function(e){   
    if(e.keyCode==13){
      id =  $(this).parent().parent().attr("data-idclient") ;
	  clmn = $(this).attr("data-clmn");
	  valeur=$(this).val();
	tdid =  $(this).parent().attr("id")  
	  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{
											fonctions:"update_client" ,
											idc:id,
											cl:clmn,
											vl:valeur
										 },
										 success:function(data)
										 { 
										sweetAlert(" ", "La modification a été effectuée", "success");
										 $("#span"+tdid).text(valeur);
										 $("#span"+tdid).css("display","block");
										 $(".inputdataclient").css("display","none");
										  },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});
    }
});
  $(document).on("dblclick",".prodtd",function(){
   $(".prodmodif").css("display","none");
   $(".spnprod").css("display","block");
   $(this).find("span").css("display","none");
   $(this).find("input,select").css("display","block");
  });
  $(document).on("dblclick",".spanclick",function(){
   idTD = $(this).attr("id"); 
   $(".modifinput").css("display","none");
  $(".spnVL").css("display","block");
  $(this).find("span").css("display","none");
  
  $("#input"+idTD).css("display","block");
   $("#input"+idTD).focus();
   
  });
  $(document).on("dblclick",".clientdata",function(){
  idTD = $(this).attr("id"); 
  $(".spanclient").css("display","block");
    $(".inputdataclient").css("display","none");
    $(".selectdataclient").css("display","none");
  $("#span"+idTD).css("display","none");
  $("#inp"+idTD).css("display","block");
   $("#inp"+idTD).focus();

  });
  $(document).on("change","#statut",function(){
  var vl = $(this).val();
  if(vl>0)
  {
	 $("#btn_statut").css("display","inline-block");
	 
	 
	}
	else
	{
	$("#btn_statut").css("display","none");
	}
   
  });
 $(document).on("change","#modereg",function(){
 if($(this).val() == "Espèce" && $("#mttc").val() != "")
 {
 var  droitTmb = $("#mttc").val() * 0.25 / 100;
 $("#timbre").val(Number(droitTmb).toFixed(2));
   somme_total();
 }
 else
 {
	$("#timbre").val(0);
	  somme_total();
 }
 
 });
 /*setInterval(function(){
    $.get('header.php', function(data){
        $('#header').html(data);
    });
},10000); */
    $(document).on('keyup','.qtprod',function(){
   
	iidd =  $(this).closest('tr').attr('id'); 
 
	/*$.each(arr, function(i) {
    if(arr[i].i_d === iidd) {
        arr.qt = $(this).val();alert(arr.qt);
        return false;
    }
});*/
	});
    $('#recherchebc').on('keyup', function() {
	$("#tableresultbc").html("	<div class='sk-circle'><div class='sk-circle1 sk-child'></div><div class='sk-circle2 sk-child'></div><div class='sk-circle3 sk-child'></div><div class='sk-circle4 sk-child'></div><div class='sk-circle5 sk-child'></div><div class='sk-circle6 sk-child'></div><div class='sk-circle7 sk-child'></div><div class='sk-circle8 sk-child'></div><div class='sk-circle9 sk-child'></div><div class='sk-circle10 sk-child'></div><div class='sk-circle11 sk-child'></div><div class='sk-circle12 sk-child'></div></div>	");
 
	var val_searchbc = $(this).val();
	 
		 
 
											$.ajax({
										 type:"post",
										  url:"table-rech-bc.php",
										 data:{ valsearch:val_searchbc 
										 },
										 success:function(data)
										 {  
										 
										$("#tableresultbc").html(data);
									
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													}); 
   });
      
    $('#rechercheclient').on('keyup', function() {
	$("#tableresultbc").html("	<div class='sk-circle'><div class='sk-circle1 sk-child'></div><div class='sk-circle2 sk-child'></div><div class='sk-circle3 sk-child'></div><div class='sk-circle4 sk-child'></div><div class='sk-circle5 sk-child'></div><div class='sk-circle6 sk-child'></div><div class='sk-circle7 sk-child'></div><div class='sk-circle8 sk-child'></div><div class='sk-circle9 sk-child'></div><div class='sk-circle10 sk-child'></div><div class='sk-circle11 sk-child'></div><div class='sk-circle12 sk-child'></div></div>	");
 
	var val_searchbc = $(this).val();
	 
		 
 
											$.ajax({
										 type:"post",
										  url:"ajax-clientconsulter.php",
										 data:{ valsearch:val_searchbc
										 },
										 success:function(data)
										 {  
										 
										$("#tableresultbc").html(data);
									
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													}); 
   });
 /****/
 
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isInt(value) {
  var x = parseInt(value);
  return !isNaN(value) && (x | 0) === x;
}
function dbDate(dt){
		 if(dt !== undefined){
	var res = dt.split("/"); 
			return res;
			}
		}
$(document).on("click","#add_retour_btn",function(){
var idbc,tabel_qteretour=[],motif;
idbc = $("#retourinput").val();
motif = $("#motif_retour").val();
$(".qteretour").each(function(){
var idproduit = $(this).attr("data-trligne");
var qte = $(this).val();
var info =[{"motifR":motif,
			"idbcR":idbc,
			"qteR":qte,
			"idprodR":idproduit}]; 
tabel_qteretour.push(info);
});

if(tabel_qteretour.length > 0) {  
  $.ajax({
										 type:"post",
										  url:"fonctions.php",
										 data:{ fonctions:"add_retour" ,
												tblR:tabel_qteretour
												 
										 },
										 success:function(data)
										 {
										 
										 sweetAlert("L'opération a bien été effectuée.");
											 
										 },
													error: function(x,y,z){
													 
														 sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");
														$(".gest-module").css("display","none");
													
													}
		 
		 
													});   
													} 
													else
													{
													sweetAlert(" ", "L'opération n'a pas pu être effectuée", "error");
													}
													
												
													
});
$(document).on("keyup","p > .recherche_client",function(){
	$field = $(this);
    $('#results').html(''); // on vide les resultats
    $('#ajax-loader').remove(); // on retire le loader
 
    // on commence à traiter à partir du 2ème caractère saisie
    if( $field.val().length > 0 )
    {
      // on envoie la valeur recherché en GET au fichier de traitement
      $.ajax({
  	type : 'GET', // envoi des données en GET ou POST
	url : 'search_client.php' , // url du fichier de traitement
	data : 'q='+$(this).val() , // données à envoyer en  GET ou POST
	beforeSend : function() { // traitements JS à faire AVANT l'envoi
		$field.after('<img src="http://apef-education.com/apefgest/asset/js/ajax-loader.gif" alt="loader" id="ajax-loader" />'); // ajout d'un loader pour signifier l'action
	},
	success : function(data){ // traitements JS à faire APRES le retour d'ajax-search.php
		$('#ajax-loader').remove(); // on enleve le loader
		$('#results').html(data); // affichage des résultats dans le bloc
	}
      });
    }else if ($field.val().length == 0){
		$('#results').html("");
	}
	
	});	
	
	$(document).on("keyup","p > .recherche_produit",function(){
		
		
		 $field = $(this);
    $('#results_produit').html(''); // on vide les resultats
    $('#ajax-loader').remove(); // on retire le loader
 
    // on commence à traiter à partir du 2ème caractère saisie
    if( $field.val().length > 0 )
    {
      // on envoie la valeur recherché en GET au fichier de traitement
      $.ajax({
  	type : 'GET', // envoi des données en GET ou POST
	url : 'popup-prod.php' , // url du fichier de traitement
	data : 'val='+$(this).val() , // données à envoyer en  GET ou POST
	beforeSend : function() { // traitements JS à faire AVANT l'envoi
		$field.after('<img src="http://apef-education.com/apefgest/asset/js/ajax-loader.gif" alt="loader" id="ajax-loader" />'); // ajout d'un loader pour signifier l'action
	},
	success : function(data){
//alert(data);		// traitements JS à faire APRES le retour d'ajax-search.php
		$('#ajax-loader').remove(); // on enleve le loader
		$('#results_produit').html(data); // affichage des résultats dans le bloc
	},
	error: function(x,y,z){      
	sweetAlert("Oops...", "Code: "+x.status+"\nImpossible de terminer l'opération.\nVeuillez contacter administrateur système.", "warning");													 												
	}
      });
    }else if ($field.val().length == 0){
		$('#results_produit').html("");
	}
	});
        
        
        
    