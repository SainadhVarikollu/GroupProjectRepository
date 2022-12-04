package com.example.urbanc.controller;

import com.example.urbanc.model.Booking;
import com.example.urbanc.service.BookingService;
import com.example.urbanc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {


    @Autowired
    private BookingService bookingService;

    @Autowired
    private UserService userService;

//    @GetMapping(value = "/slots/{city}/{service}/{date}")
//    public ResponseEntity getAllSlotsAvailable(@PathVariable("city") String city, @PathVariable("service") String service, @PathVariable("date") @DateTimeFormat(pattern = "dd-MM-yyyy") LocalDate date){
//        System.out.println("Date : "+date );
//       List<String> timeSlots = bookingService.getAllAvailableSlots(city, service, date);
//        return new ResponseEntity(null, HttpStatus.ACCEPTED);
//    }

    @GetMapping(value = "/user/bookings/ongoing/{id}")
    public ResponseEntity getAllUserOngoingBookings(@PathVariable("id") Integer id){
        System.out.println("Id : "+id);
        List<Booking> result = new ArrayList<>();
        List<Booking> bookings = bookingService.getAllBookingsOfUser(id);
//        System.out.println("Size : "+bookings.size());
//        for(Booking booking : bookings){
//            if(booking.getStatus().equals("Ongoing")){
//                result.add(booking);
//            }
//        }
        return new ResponseEntity(bookings, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/user/bookings/history/{id}")
    public ResponseEntity getAllUserHistoryBookings(@PathVariable("id") Integer id){
        List<Booking> result = new ArrayList<>();
        List<Booking> bookings = bookingService.getAllBookingsOfUser(id);
//        for(Booking booking : bookings){
//            if(booking.getStatus().equals("Done")){
//                result.add(booking);
//            }
//        }
        return new ResponseEntity(bookings, HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/book")
    public ResponseEntity bookService(@RequestBody Booking booking){
        System.out.println(booking.toString());
        HashMap<Object, Object> map = new HashMap<>();
        System.out.println(booking.toString());
        Booking booking1 = bookingService.saveBooking(booking);
        map.put("bookingDetails", booking1);
        map.put("message","Successfully booked, Details sent to registered mail");
        return new ResponseEntity(map, HttpStatus.OK);
    }

    @PostMapping(value = "/book/update")
    public ResponseEntity updateBooking(@RequestBody Booking booking){
        HashMap<Object, Object> map = new HashMap<>();
       Booking booking1 = bookingService.updateBooking(booking);
        map.put("bookingDetails", booking1);
        map.put("message","Successfully booked, Details sent to registered mail");
        return new ResponseEntity(map, HttpStatus.OK);
    }

    @GetMapping(value = "/booking/cancel/{bookingId}")
    public ResponseEntity cancelBooking(@PathVariable("bookingId")int id){
        Booking booking = bookingService.findById(id);
        if(booking != null){
            bookingService.cancel(booking);
        }
        return new ResponseEntity("Success", HttpStatus.ACCEPTED);
    }
}
