/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.DaoImplVille;
import dao.IDaoVille;
import java.util.List;
import model.Ville;

/**
 *
 * @author HP
 */
public class ServiceImplVille implements IServiceVille{
    
    private IDaoVille dao=new DaoImplVille();

    @Override
    public List<String> liste_villes() {
    return dao.liste_ville();
    }
   
    
}
