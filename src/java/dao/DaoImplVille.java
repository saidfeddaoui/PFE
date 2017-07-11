/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.List;
import model.User;
import model.Ville;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import util.SessionFactoryUtile;

/**
 *
 * @author HP
 */
public class DaoImplVille implements IDaoVille{

    @Override
    public List<String> liste_ville() {
    SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
                List<String> villes = null;
                try {
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
                        Query query= s.createQuery("select nom_ville from Ville");
			villes=query.list();
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
		return villes;
    }
    
}
