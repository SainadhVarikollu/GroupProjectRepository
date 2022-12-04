package com.example.urbanc.service;

import com.example.urbanc.model.Booking;
import com.example.urbanc.model.User;
import com.example.urbanc.repo.BookingRepo;
import com.example.urbanc.service.email.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    public List<Booking> getAllBookingsOfUser(int userId){
        return bookingRepo.findByUserId(userId);
    }


    public Booking saveBooking(Booking booking) {
        User user = userService.findById(booking.getUserId());
        booking.setAddress(user.getAddress());
        emailService.sendEmail(user.getEmail(),"Booking Confirmation for Service : "+booking.getService(),"Service confirmed");
        return bookingRepo.save(booking);
    }

    public Booking updateBooking(Booking booking){
        return bookingRepo.save(booking);
    }


    public Booking findById(int id) {
        return bookingRepo.findById(id).get();
    }

    public void cancel(Booking booking) {
        bookingRepo.delete(booking);
    }
}
