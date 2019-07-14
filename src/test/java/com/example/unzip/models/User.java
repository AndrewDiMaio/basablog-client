package com.example.unzip.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String username;
    private String emailAddress;
    private String password;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User(){}

    public User(String username, String emailAddress, String password){
        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    @Override
    public String toString(){
        return String.format(
                "Users[id=%d, username='%s', emailAddress='%s', password='%s']",
                id, username, emailAddress, password);
    }
}
