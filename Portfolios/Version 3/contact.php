<?php
// Website Contact Form Generator 
// http://www.tele-pro.co.uk/scripts/contact_form/ 
// This script is free to use as long as you  
// retain the credit link  

// get posted data into local variables
$EmailFrom = Trim(stripslashes($_POST['EmailFrom'])); 
$EmailTo = "yogesh@spiral-designs.com";
$Subject = "Spiral-Designs Contact Form";
$Name = Trim(stripslashes($_POST['Name'])); 
$Phone = Trim(stripslashes($_POST['Phone'])); 
$Website = Trim(stripslashes($_POST['Website'])); 
$Job = Trim(stripslashes($_POST['Job'])); 
$Budget = Trim(stripslashes($_POST['Budget'])); 
$Text = Trim(stripslashes($_POST['Text'])); 

// validation
$validationOK=true;
if (Trim($EmailFrom)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=fail.html\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";
$Body .= "Website: ";
$Body .= $Website;
$Body .= "\n";
$Body .= "Job: ";
$Body .= $Job;
$Body .= "\n";
$Body .= "Budget: ";
$Body .= $Budget;
$Body .= "\n";
$Body .= "Text: ";
$Body .= $Text;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=sent.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=fail.html\">";
}
?>