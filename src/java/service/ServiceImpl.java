/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;



import dao.DaoImpl;
import dao.IDao;
import model.User;
import java.util.List;


/**
 *
 * @author HP
 */

public class ServiceImpl implements Iservice{

    @Override
    public List<User> afficher() {
    IDao dao=(IDao) new DaoImpl();
    return dao.select();
    }

    @Override
    public User connecter(String email,String mdp) {
    IDao dao=(IDao) new DaoImpl();
    return dao.connecter(email, mdp);
    }
    
}
