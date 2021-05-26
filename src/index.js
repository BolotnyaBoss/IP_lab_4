import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegExp from 'react'
import $ from 'jquery'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
$(document).ready(function (){
    $(".button_1").click(function (){

        let usernam = $("#username").val();
        let email = $("#email").val();
        let pwd = $("#user-pw").val()
        let usrReg = /[a-zA-Z]+"/
        let emReg = /[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+"/

        if (usernam.length == 0) {
            alert("Ім'я введи, будь ласка");
            return;
        }
        else if (usernam.length > 20 || usernam.length < 2) {
            alert("Нормально ім'я введи");
            return;
        }
        // else if(!usrReg.test(usernam)) {
        //     alert("Міша, всьо *****, давай по новой");
        //     return;
        // }

        if (email.length == 0) {
            alert("Чого пошту не вводиш?");
            return;}
        // else if(!emReg.test(email)) {
        //     alert("Введи пошту нормально, прошу тебе");
        //     return;
        // }

        if (pwd.length == 0) {
            alert("А пароль за тебе хто буде вводити?");
            return;
        } else if (pwd.length < 2 || pwd.length > 15) {
            alert("Будь ласка, нормально введи пароль");
            return;
        }
        $(".form").submit();
    });
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
