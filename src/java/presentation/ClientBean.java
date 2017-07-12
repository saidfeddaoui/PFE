/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import java.util.List;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import model.Client;
import service.IServiceClient;
import service.ServiceImplClient;

/**
 *
 * @author said
 */
@ManagedBean (name="ClientBean")
@SessionScoped
public class ClientBean {
    private Client client=new Client();
    private int id;
    private List<Client> clients;
    private IServiceClient service=new ServiceImplClient();
    private String msg_erreur;
    private String msg_success;

    public ClientBean() {
    }

    public String getMsg_erreur() {
        return msg_erreur;
    }

    public void setMsg_erreur(String msg_erreur) {
        this.msg_erreur = msg_erreur;
    }

    public String getMsg_success() {
        return msg_success;
    }

    public void setMsg_success(String msg_success) {
        this.msg_success = msg_success;
    }

    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    
    
    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public List<Client> getClients() {
        return clients;
    }

    public void setClients(List<Client> clients) {
        this.clients = clients;
    }
    
    public String liste_clients(){
    clients=service.list_clients();
    return "clients.xhtml";
    }
    
    public String supprimer_client(int id){
    boolean result= service.supprimer_client(id);
    if (result==true){
    FacesContext.getCurrentInstance().addMessage(
                    null,
                    new FacesMessage(FacesMessage.SEVERITY_WARN,
                    "le client à été supprimé avec succés !!",
                    "suppression effectué !!"));
    msg_success="le client à été supprimé avec succés !!";
     return "clients.xhtml";
    }else{
    msg_erreur="probléme lors de la suppression du client!!";   
    return "clients.xhtml";
    }
    }
    
    public String ajouter_client(){
    Client clt=service.ajout_client(client);
    if(clt != null){
    msg_success="le client à été ajoutée avec succés !!"; 
    return "clients.xhtml";
    }else{
     msg_erreur="probléme lors de l'ajout du client !!";   
    return "client.xhtml";
    }
    }
    public String prepare_modifier(int id){
    client=service.client_by_id(id);
    if(client != null){
    return "client-modif.xhtml";
    }else {
    return "clients.xhtml";
    }
    }
    public String modifier_client(){
    Client clt=service.modifier_client(client);
    if (clt != null){
    msg_success="le client à été modifiée avec succés !!"; 
    return "clients.xhtml";
    }else{
    msg_erreur="probléme lors de la modification du client !!";   
    return "client.xhtml";
    }
    }
    
}
