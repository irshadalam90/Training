function formValidation(){
	var fname=document.getElementById("fname");
	var lname=document.getElementById("lname");
	var mobile=document.getElementById("mobile");
	var email=document.getElementById("email");
	var dob=document.getElementById("dob");
	var gender=document.getElementById("gender");
	var address=document.getElementById("address");
	var course=document.getElementById("course");
	
	
	
	if(fname.value=="" )
	{
		document.getElementById("fnameError").innerHTML = "Enter your first name";
	}
	else
	{
		document.getElementById("fnameError").innerHTML = "";
		
	}
	
    if(lname.value=="" )
	{
		document.getElementById("lnameError").innerHTML = "Enter your last name";
		
	}
	else
	{
		document.getElementById("lnameError").innerHTML = "";
		
	}
	

	if(mobile.value=="" )
	{
		document.getElementById("mobileError").innerHTML = "Enter your mobile number";
		
	}
	else
	{
		document.getElementById("mobileError").innerHTML = "";
		
	}

	if(email.value=="" )
	{
		document.getElementById("emailError").innerHTML = "Enter your email id";
		
	}
	else
	{
		document.getElementById("emailError").innerHTML = "";
		
	}

	
	if(dob.value=="" )
	{
		document.getElementById("dobError").innerHTML = "Enter your dob";
		
	}
	else
	{
		document.getElementById("dobError").innerHTML = "";
		
	}

	if(gender.value=="" )
	{
		document.getElementById("genderError").innerHTML = "Select your gender";
		
	}
	else
	{
		document.getElementById("genderError").innerHTML = "";
		
	}

	if(address.value=="" )
	{
		document.getElementById("addressError").innerHTML = "Enter your address";
		
	}
	else
	{
		document.getElementById("addressError").innerHTML = "";
		
	}

	if(course.value=="" )
	{
		document.getElementById("courseError").innerHTML = "Select course";
		
	}
	else
	{
		document.getElementById("courseError").innerHTML = "";
		
	}

    return false;
}