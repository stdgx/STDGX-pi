package br.com.fatec.stdgx.services;

import org.springframework.stereotype.Service;

@Service
public class OTPService {
    public static String generateOTP() {
        int randomPin = (int) (Math.random() * 9000) + 1000;
        return String.valueOf(randomPin);
    }

    public static void main(String[] args) {
        String otpSting = generateOTP();
        System.out.println("OTP : " + otpSting);
    }
}
