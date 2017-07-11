/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.Date;

/**
 *
 * @author HP
 */
public class Devis {
    private int ndevis;
    private Date datedevis;
    private String repres;
    private String depot;
    private String observ;
    private Client client;

    public Devis() {
    }

    public Devis(int ndevis, Date datedevis, String repres, String depot, String observ) {
        this.ndevis = ndevis;
        this.datedevis = datedevis;
        this.repres = repres;
        this.depot = depot;
        this.observ = observ;
    }

    public int getNdevis() {
        return ndevis;
    }

    public void setNdevis(int ndevis) {
        this.ndevis = ndevis;
    }

    public Date getDatedevis() {
        return datedevis;
    }

    public void setDatedevis(Date datedevis) {
        this.datedevis = datedevis;
    }

    public String getRepres() {
        return repres;
    }

    public void setRepres(String repres) {
        this.repres = repres;
    }

    

    public String getDepot() {
        return depot;
    }

    public void setDepot(String depot) {
        this.depot = depot;
    }

    public String getObserv() {
        return observ;
    }

    public void setObserv(String observ) {
        this.observ = observ;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    
    
    
}
