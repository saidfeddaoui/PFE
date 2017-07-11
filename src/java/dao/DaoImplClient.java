/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import model.Client;
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
public class DaoImplClient implements IDaoClient{
     @Override
    public List<Client> list_clients() {
    SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
                List<Client> clients = null;
                try {
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
                        Query query= s.createQuery("from Client");
			clients=query.list();
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
		return clients;
    }

    @Override
    public Client ajout_client(Client client) {
     SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
		
		try {
                    //System.out.println("Test action add !!");
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
			s.save(client);
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
		return client;
    }

    @Override
    public Client modifier_client(Client client) {
    SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
                Client c1=null;
		try {
			System.out.println("debut");
			Session s=sf.openSession();
                        c1=(Client)s.get(Client.class, client.getId_clt());
                        //User u1=new User(u.getId());
                        //System.out.println(u.getNom());
                        c1.setAdresse_clt(client.getAdresse_clt());
                        c1.setNom_clt(client.getNom_clt());
                        c1.setFax_clt(client.getFax_clt());
                        c1.setMail_clt(client.getMail_clt());
                        c1.setRc_clt(client.getRc_clt());
                        c1.setTel1_clt(client.getTel1_clt());
                        c1.setTel_clt(client.getTel_clt());
                        c1.setVille_clt(client.getVille_clt());
                        tx=s.beginTransaction();
                        s.update(c1);
                       
			tx.commit();  
			System.out.println("out");	
		} catch (Exception e) {
			//e.printStackTrace();
			// TODO: handle exception
			tx.rollback();
		}
		finally {
			sf.close();
                }
            return c1;
    }

    @Override
    public boolean supprimer_client(int id) {
                SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
                boolean bool=false;
		try {
                    //System.out.println("Test action add !!");
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
                        Client c = (Client)s.get(Client.class, id);
                        if(c != null){
                        s.delete(c);
                        }
			tx.commit();
			System.out.println("out");	
		} catch (Exception e) {
			//e.printStackTrace();
			// TODO: handle exception
			tx.rollback();
		}
		finally {
                        bool=true;
			sf.close();
			//Connexion_manager.getInstance().fermerconnection(c);
                }

return bool;
    }

    @Override
    public List<Client> rechercher_client(String cle) {
    SessionFactory sf=SessionFactoryUtile.getSessf();
	Transaction tx = null;
        List<Client> lc = null;
        try {
            
	System.out.println("debut");
	Session s=sf.openSession();
	tx=s.beginTransaction();
        Query query= s.createQuery("From Client where code='"+cle+"' or societe_nom='"+cle+"' or forme_juridique='"+cle+"' or ville='"+cle+"' or tel='"+cle+"' or fax='"+cle+"'");
	lc=query.list();	
	tx.commit();
	System.out.println("out");
			
	} catch (Exception e) {
	                e.printStackTrace();
			// TODO: handle exception
			tx.rollback();
		}
		finally {
			sf.close();
	}
		return lc;
    }

    @Override
    public Client client_by_id(int id) {
    SessionFactory sf=SessionFactoryUtile.getSessf();
		Transaction tx = null;
                Client client=null;
		try {
			System.out.println("debut");
			Session s=sf.openSession();
			tx=s.beginTransaction();
                        Client c = (Client)s.get(Client.class, id);
                        if(c != null){
                        client=c;
                        }
			tx.commit();
			System.out.println("out");	
		} catch (Exception e) {
                        e.printStackTrace();
			tx.rollback();
		}
		finally {
			sf.close();
                }
            return client;
    }
}
