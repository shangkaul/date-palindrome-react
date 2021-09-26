import "./styles.css";
import Form from "./Form";
import React, { useState } from "react";

export default function App() {
  var pal = false;

  var [formData, SetFormData] = useState({
    dob: 0
  });
  var [isP, setIsP] = useState("");

  function handleForm(dob) {
    SetFormData({
      dob: dob
    });

    var dob_str = dob.toString().replaceAll("-", "");
    console.log(dob_str);
    console.log("rev:" + dob.toString().split("-").reverse().join(""));

    if (dob_str === dob.toString().split("-").reverse().join("")) {
      pal = true;
    } else {
      pal = false;
    }

    if (pal) {
      setIsP(dob + " is a Palindrome!");
    } else {
      setIsP(dob + " is not a palindrome :(");
    }
  }

  return (
    <div className="App">
      <Form handleForm={handleForm.bind(this)} />
      <br />
      <div className="result">{isP}</div>
    </div>
  );
}
