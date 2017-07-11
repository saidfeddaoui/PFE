/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import model.User;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import util.SessionFactoryUtile;

/**
 *
 * @author HP
 */
public class DaoImpl implements IDao{
    @Override
    public List<User> select() {
    SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
                List<User> users = null;
                try {
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
                        Query query= s.createQuery("from User");
			users=query.list();
			tx.commit();
			//r=true;
			System.out.println("out");
			
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
			tx.rollback();
		}
		finally {
			sf.close();
			//Connexion_manager.getInstance().fermerconnection(c);
		}
		return users;
    }
    
    @Override
    public User connecter(String email,String mdp){
    SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
                boolean bool=false;
                List<User> lu;
                User u=null;
                try {
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
                        Query query= s.createQuery("from User where email=:e and mdp=:m");
			query.setString("e", email);
                        query.setString("m", mdp);
                        lu=query.list();
                        if(lu.size()!=0){
                        bool=true;
                        u=lu.get(0);
                      // u.setNom(lu.get(0).getNom());
                       //u.setPrenom(lu.get(0).getPrenom());
                       //u.setProfile(lu.get(0).getProfile());
                       return u;
                        }
			tx.commit();
			//r=true;
			System.out.println("out");
			
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
			tx.rollback();
		}
		finally {
			sf.close();
		}
		return u;
    }
}
