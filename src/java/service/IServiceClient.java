/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import model.Client;
import java.util.List;

/**
 *
 * @author HP
 */
public interface IServiceClient {
    List<Client> list_clients();
    Client ajout_client(Client client);
    Client modifier_client(Client client);
    boolean supprimer_client(int id);
    List<Client> rechercher_client(String cle);
    Client client_by_id(int id);
}
