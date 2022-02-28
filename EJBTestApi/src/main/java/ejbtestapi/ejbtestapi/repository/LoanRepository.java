package ejbtestapi.ejbtestapi.repository;

import ejbtestapi.ejbtestapi.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan,Integer> {
}
