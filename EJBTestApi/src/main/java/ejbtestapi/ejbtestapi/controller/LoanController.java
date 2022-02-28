package ejbtestapi.ejbtestapi.controller;

import ejbtestapi.ejbtestapi.entity.Loan;
import ejbtestapi.ejbtestapi.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/loans")
public class LoanController {
    @Autowired
    LoanRepository loanRepository;
//create
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Object> create(@RequestBody Loan loan){
       loanRepository.save(loan);
        return new ResponseEntity<>(loan, HttpStatus.CREATED);
    }
//findall
@RequestMapping(method = RequestMethod.GET)
public  ResponseEntity<Object> getList(){
    ArrayList<Loan> response = new ArrayList<>();
    response.addAll(loanRepository.findAll());
    return new ResponseEntity<>(response, HttpStatus.OK);

}
}
