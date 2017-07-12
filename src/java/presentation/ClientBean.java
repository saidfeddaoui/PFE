/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
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

    public ClientBean() {
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
    
    public String supprimer_client(){
    boolean result= service.supprimer_client(id);
    if (result==true){
    return "";
    }else{
    return "clients.xhtml";
    }
    }
    
}
