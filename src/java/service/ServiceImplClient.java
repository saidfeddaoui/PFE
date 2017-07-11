/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.DaoImplClient;
import dao.IDaoClient;
import model.Client;
import java.util.List;

/**
 *
 * @author HP
 */
public class ServiceImplClient implements IServiceClient{
    
    IDaoClient is=new DaoImplClient();
    
    @Override
    public List<Client> list_clients() {
    return is.list_clients();
    }

    @Override
    public Client ajout_client(Client client) {
    return is.ajout_client(client);
    }

    @Override
    public Client modifier_client(Client client) {
    return is.modifier_client(client);
    }

    @Override
    public boolean supprimer_client(int id) {
    return is.supprimer_client(id);
    }

    @Override
    public List<Client> rechercher_client(String cle) {
    return is.rechercher_client(cle);
    }

    @Override
    public Client client_by_id(int id) {
    return is.client_by_id(id);
    }
    
}
