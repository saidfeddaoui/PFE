/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
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
    System.out.println(user.getProfile());
    if( u != null){
        user=u;
    HttpSession session = Session_Auth.getSession();
			session.setAttribute("user", user.getProfile());
			return "index";
    }
    else{
         FacesContext.getCurrentInstance().addMessage(
                    null,
                    new FacesMessage(FacesMessage.SEVERITY_WARN,
                    "Login ou mot de passe incorrect ",
                    "veuillez réessayer !!"));
    return "login";
    }
    }
    
}
