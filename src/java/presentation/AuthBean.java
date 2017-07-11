/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.servlet.http.HttpSession;
import model.User;
import service.Iservice;
import service.ServiceImpl;
import util.SessionFactoryUtile;
import util.Session_Auth;

/**
 *
 * @author said
 */

@ManagedBean (name="authBean")
@SessionScoped


public class AuthBean {
    
    private User user=new User();
    private Iservice service=new ServiceImpl();

    public AuthBean() {
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
    public String seConnecter(){
     User u=service.connecter(user.getEmail(), user.getMdp());
    if(u != null){
    HttpSession session = Session_Auth.getSession();
			session.setAttribute("user", u.getProfile());
			return "index";
    }
    else{
    return "login";
    }
    }
    
}
