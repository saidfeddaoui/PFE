/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.HashSet;
import java.util.Set;


/**
 *
 * @author HP
 */
public class Client {

    private int id_clt;
    private String nom_clt;
    private String adresse_clt;
    private String ville_clt;
    private String tel_clt;
    private String tel1_clt;
    private String fax_clt;
    private String rc_clt;
    private String mail_clt;
    private Set<Devis> Devis=new HashSet<Devis>();

    public Client() {
    }

    public Client(String nom, String adresse_clt, String ville_clt, String tel_clt, String tel1_clt, String fax_clt, String rc_clt, String mail_clt) {
        
        this.nom_clt= nom;
        this.adresse_clt = adresse_clt;
        this.ville_clt = ville_clt;
        this.tel_clt = tel_clt;
        this.tel1_clt = tel1_clt;
        this.fax_clt = fax_clt;
        this.rc_clt = rc_clt;
        this.mail_clt = mail_clt;
    }

    public Client(String nom, String adresse_clt, String ville_clt, String tel_clt, String mail_clt) {
        this.nom_clt=nom;
        this.adresse_clt = adresse_clt;
        this.ville_clt = ville_clt;
        this.tel_clt = tel_clt;
        this.mail_clt = mail_clt;
    }

    public int getId_clt() {
        return id_clt;
    }

    public void setId_clt(int id_clt) {
        this.id_clt = id_clt;
    }

    public Set<Devis> getDevis() {
        return Devis;
    }

    public void setDevis(Set<Devis> Devis) {
        this.Devis = Devis;
    }

    
    public String getVille_clt() {
        return ville_clt;
    }

    public void setVille_clt(String ville_clt) {
        this.ville_clt = ville_clt;
    }

    public String getTel_clt() {
        return tel_clt;
    }

    public void setTel_clt(String tel_clt) {
        this.tel_clt = tel_clt;
    }

    public String getTel1_clt() {
        return tel1_clt;
    }

    public void setTel1_clt(String tel1_clt) {
        this.tel1_clt = tel1_clt;
    }

    public String getFax_clt() {
        return fax_clt;
    }

    public void setFax_clt(String fax_clt) {
        this.fax_clt = fax_clt;
    }


    public String getRc_clt() {
        return rc_clt;
    }

    public void setRc_clt(String rc_clt) {
        this.rc_clt = rc_clt;
    }


    public String getMail_clt() {
        return mail_clt;
    }

    public void setMail_clt(String mail_clt) {
        this.mail_clt = mail_clt;
    }

    public String getNom_clt() {
        return nom_clt;
    }

    public void setNom_clt(String nom_clt) {
        this.nom_clt = nom_clt;
    }

    public String getAdresse_clt() {
        return adresse_clt;
    }

    public void setAdresse_clt(String adresse_clt) {
        this.adresse_clt = adresse_clt;
    }
    

    @Override
    public String toString() {
        return "Client{" + "id_clt=" + id_clt + ", adresse_clt=" + adresse_clt + ", ville_clt=" + ville_clt + ", tel_clt=" + tel_clt + ", tel1_clt=" + tel1_clt + ", fax_clt=" + fax_clt + ", rc_clt=" + rc_clt + ", mail_clt=" + mail_clt + '}';
    }
    
  
    
}
