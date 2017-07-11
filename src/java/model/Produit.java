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
public class Produit {
    private int id_prod;
    private int isbn;
    private String nom_prod;
    private String editeur;
    private String collection;
    private int prix;
    private int tva;
    private int prix_ht;
    private String type_produit;
    private String depot;
    private int qte;
    private String observation;
    
    
    public Produit() {
    }

    public Produit(int isbn, String nom_prod, String editeur, String collection, int prix, int tva, int prix_ht, String type_produit, String depot, int qte, String observation) {
        this.isbn = isbn;
        this.nom_prod = nom_prod;
        this.editeur = editeur;
        this.collection = collection;
        this.prix = prix;
        this.tva = tva;
        this.prix_ht = prix_ht;
        this.type_produit = type_produit;
        this.depot = depot;
        this.qte = qte;
        this.observation = observation;
    }

    public int getId_prod() {
        return id_prod;
    }

    public void setId_prod(int id_prod) {
        this.id_prod = id_prod;
    }

    public int getIsbn() {
        return isbn;
    }

    public void setIsbn(int isbn) {
        this.isbn = isbn;
    }

    public String getNom_prod() {
        return nom_prod;
    }

    public void setNom_prod(String nom_prod) {
        this.nom_prod = nom_prod;
    }

    public String getEditeur() {
        return editeur;
    }

    public void setEditeur(String editeur) {
        this.editeur = editeur;
    }

    public String getCollection() {
        return collection;
    }

    public void setCollection(String collection) {
        this.collection = collection;
    }

    public int getPrix() {
        return prix;
    }

    public void setPrix(int prix) {
        this.prix = prix;
    }

    public int getTva() {
        return tva;
    }

    public void setTva(int tva) {
        this.tva = tva;
    }

    public int getPrix_ht() {
        return prix_ht;
    }

    public void setPrix_ht(int prix_ht) {
        this.prix_ht = prix_ht;
    }

    public String getType_produit() {
        return type_produit;
    }

    public void setType_produit(String type_produit) {
        this.type_produit = type_produit;
    }

    public String getDepot() {
        return depot;
    }

    public void setDepot(String depot) {
        this.depot = depot;
    }

    public int getQte() {
        return qte;
    }

    public void setQte(int qte) {
        this.qte = qte;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }
    
    
    
    
    
    
    
}
