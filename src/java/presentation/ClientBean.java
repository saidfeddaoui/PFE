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
@ManagedBean (name="clientBean")
@SessionScoped
public class ClientBean {
    private Client client=new Client();
    private List<Client> clients;
    private IServiceClient service=new ServiceImplClient();
    
    
}
