/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package util;

//import org.hibernate.SessionFactory;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

//import org.hibernate.cfg.Configuration;

/**
 *
 * @author HP
 */
public class SessionFactoryUtile {
     public static SessionFactory sessf;
	
	private SessionFactoryUtile(){
		Configuration cf=new Configuration();
		cf.configure("util/hibernate.cfg.xml");
		sessf=cf.buildSessionFactory();
	}

	public static SessionFactory getSessf(){
		if (sessf==null)
			new SessionFactoryUtile();
		return sessf;
	}
}
