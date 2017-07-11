/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author HP
 */
public class Ville {
    
    private int id_ville;
    private String nom_ville;

    public Ville() {
    }

    
    public Ville(String nom_ville) {
        this.nom_ville = nom_ville;
    }

    public int getId_ville() {
        return id_ville;
    }

    public void setId_ville(int id_ville) {
        this.id_ville = id_ville;
    }

    public String getNom_ville() {
        return nom_ville;
    }

    public void setNom_ville(String nom_ville) {
        this.nom_ville = nom_ville;
    }

    @Override
    public String toString() {
        return "Ville{" + "id_ville=" + id_ville + ", nom_ville=" + nom_ville + '}';
    }
    
    
    
}
