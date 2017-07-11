/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.List;
import model.Client;
import model.Produit;

/**
 *
 * @author HP
 */
public interface IDaoProduit {
     List<Produit> list_produits();
    Client ajout_produit(Produit produit);
    Client modifier_produit(Produit produit);
    boolean supprimer_produit(int id);
    Client produit_by_id(int id);
}
