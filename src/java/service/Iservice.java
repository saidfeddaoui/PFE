/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import model.User;
import java.util.List;

/**
 *
 * @author HP
 */
public interface Iservice {
    List<User> afficher();
    User connecter(String email,String mdp);
}
