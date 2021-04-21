<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $type = $_POST['type'];
  $message = $_POST['message'];
  $formcontent=" From: $name \n Email: $email \n Phone: $phone \n Type: $type \n Message: $message";
  $recipient = "contact@danbatch.com";
  $subject = "New enquiry from danbatch.com!";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
  echo "<div style='background-color: rgb(245, 235, 244);
  width: 100%;
  height: 100%;
  padding-top: 80px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 1.1em;
  text-transform: uppercase;
  font-family: sans-serif;'>
  <p>Thanks for your enquiry</p>" . "<p style='margin-top: 20px;'>I will aim to get back to you in 24-48 hours</p>" . "<a style='color: gray;
  display: block;
  text-decoration: none;
  margin-top: 40px;' href='contact.html'>Return to Contact Page</br></a>" . "<a style='color: gray;
  display: block;
  text-decoration: none;
  margin-top: 20px;' href='index.html'>Return to Home Page</a></div>";
  ?>

  