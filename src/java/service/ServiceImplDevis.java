/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.DaoImplDevis;
import dao.IDaoDevis;
import java.util.List;
import model.Devis;

/**
 *
 * @author HP
 */
public class ServiceImplDevis implements IDaoDevis{

    public IDaoDevis dao=new DaoImplDevis();
    
    @Override
    public List<Devis> list_devis() {
    return dao.list_devis();
    }

    @Override
    public Devis ajout_devis(Devis devis) {
    return dao.ajout_devis(devis);
    }

    @Override
    public Devis modifier_devis(Devis devis) {
    return dao.modifier_devis(devis);
    }

    @Override
    public boolean supprimer_devis(int id) {
    return dao.supprimer_devis(id);
    }

    @Override
    public List<Devis> rechercher_devis(String cle) {
    return dao.rechercher_devis(cle);
    }

    @Override
    public Devis devis_by_id(int id) {
    return dao.devis_by_id(id);
    }
    
}
