package br.com.fatec.stdgx.services;

import br.com.fatec.stdgx.repository.DataRepository;
import br.com.fatec.stdgx.utils.ExcelHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ExcelService {
    @Autowired
    DataRepository repository;

    public void save(MultipartFile file, String login) {
        try {
            JSONObject json = ExcelHelper.excelToData(file.getInputStream());
            var user = repository.findByLogin(login);
            user.setCustomerAttributeJSON(json.toString());
            repository.save(user);
        } catch (IOException e) {
            throw new RuntimeException("falha ao armazenar dados do Excel: " + e.getMessage());
        }
    }
}
