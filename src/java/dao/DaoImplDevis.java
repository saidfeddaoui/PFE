/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.List;
import model.Devis;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import util.SessionFactoryUtile;

/**
 *
 * @author HP
 */
public class DaoImplDevis implements IDaoDevis{

    @Override
    public List<Devis> list_devis() {
    return null;
    }

    @Override
    public Devis ajout_devis(Devis devis) {
    SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
		
		try {
                    //System.out.println("Test action add !!");
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
			s.save(devis);
			tx.commit();
			System.out.println("out");	
		} catch (Exception e) {
			//e.printStackTrace();
			// TODO: handle exception
			tx.rollback();
		}
		finally {
                        sf.close();
			//Connexion_manager.getInstance().fermerconnection(c);
		}
		return devis;
    }

    @Override
    public Devis modifier_devis(Devis devis) {
    return null;
    }

    @Override
    public boolean supprimer_devis(int id) {
    return false;}

    @Override
    public List<Devis> rechercher_devis(String cle) {
    
    return null;
    }

    @Override
    public Devis devis_by_id(int id) {
    return null;}
    
}
