/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import model.User;
import java.util.List;

/**
 *
 * @author HP
 */
public interface IDao {
   List<User> select();
   User connecter(String email,String mdp);
}
