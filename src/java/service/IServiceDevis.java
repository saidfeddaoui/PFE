/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import java.util.List;
import model.Devis;

/**
 *
 * @author HP
 */
public interface IServiceDevis {
    List<Devis> list_devis();
    Devis ajout_devis(Devis devis);
    Devis modifier_devis(Devis devis);
    boolean supprimer_devis(int id);
    List<Devis> rechercher_devis(String cle);
    Devis devis_by_id(int id);
    
}
