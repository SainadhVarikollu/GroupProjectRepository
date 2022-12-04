package com.example.urbanc.repo;

import com.example.urbanc.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Integer> {
    public List<Booking> findByUserId(int id);

    public int countAllByCityAndServiceAndDate(String city, String service, Date date);
}
