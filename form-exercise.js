function validate()								 
{ 
	var usd = document.forms["RegForm"]["Userid"];
	var name = document.forms["RegForm"]["name"];			 
	var email = document.forms["RegForm"]["email"]; 
    var password = document.forms["RegForm"]["pwd"];
    var confirm = document.forms["RegForm"]["pwd2"]; 
	var dob = document.forms["RegForm"]["dob"];
	var country = document.getElementById("country");
	var countryuser = country.options[country.selectedIndex];
	if(usd.value == "")
	{
		window.alert("Please enter the userid.");
		usd.focus();
		return false;
	}
	var us = usd.value;
	if((us.length<5)||(us.length>12))
	{
		window.alert("Userid must be between 5 to 12");
		usd.focus;
		return false;
	}
	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	}
	if (country.value == "")
	{
		window.alert("Please Select your country");
		country.focus();
		return false;
	} 
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 
	if(countryuser==0)
	{
		alert("Please select a country");
		return false;
	}

	if (email.value.indexOf("@", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf(".", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 
	 var p= password.value;
	 if((p.length<7)||(p.length>12))
	 {
		 window.alert("Password should be between 7 and 12");
		 password.focus();
		 return false;
	 }
    
    if (confirm.value != password.value)
    {
        window.alert("Your password should match");
        confirm.focus();
        return false;
	}
	var Today= new Date();
	var dob1 = dob.value;
	if(dob1.setHours(0,0,0,0)>Today.setHours(0,0,0,0))
	{
		window.alert("Please enter a valid date of birth");
		dob.focus();
		return false;
	}


	return true; 
}