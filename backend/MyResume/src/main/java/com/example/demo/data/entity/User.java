package com.example.demo.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	private String Name;
	private String ProfileImage;
	private String Email;
	private String PhoneNumber;
	private String PortfolioLink;
	private String LinkedinLink;
	private String GithubLink;
	private String Description;
	private String ProfileSummary;
	private String PersonalQualities;
	private String PersonalDetails;
	private String Education;
	private String Certifications;
	private String Skills;
	private String WorkExperience;
	private String Projects;
	private String MiniProjects;
}
