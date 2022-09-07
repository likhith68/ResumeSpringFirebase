package com.example.demo;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Service
public class FBInitialize {
	@PostConstruct
	public void initialize() {
		try {
			ClassPathResource res = new ClassPathResource("./src/main/resources/serviceAccountKey.json"); 
			FileInputStream serviceAccount = new FileInputStream(res.getPath());

			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(serviceAccount))
					.setDatabaseUrl("https://backendservice-5fc30-default-rtdb.asia-southeast1.firebasedatabase.app")
					.build();

			FirebaseApp.initializeApp(options);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
