/*toggle navigation function */
function toggle(){
    document.getElementById("sidebar").classList.toggle('active');
}

/*validate username*/
function validateUsername()
{
    var userName = document.register.username;
    var validFormat = /^[A-Za-z]+$/;

    if((userName.value.match(validFormat)))
    {
        document.getElementById('submit').disabled = false;
        return true;   
    }
    else
    {
        alert("Please enter valid format for username..");
        document.getElementById('submit').disabled = true;
        return false;     
    }
}

/*validate password*/
function validPassword(){
    if(document.getElementById('password').value == document.getElementById('cPassword').value){
        document.getElementById('message').innerHTML = "<font color = \"green\">Match!</font>";
        document.getElementById('submit').disabled = false;
    }
    else{
        document.getElementById('message').innerHTML = "<font color = \"red\">Does Not Match!</font>";
        document.getElementById('submit').disabled = true;
    }
}

/*validate email*/
function validateEmail()
{
    var email = document.register.email;
    var validFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if((email.value.match(validFormat)))
    {
        document.getElementById('submit').disabled = false;
        return true;
    }
    else
    {
        alert("Please enter valid format for Email..");  
        document.getElementById('submit').disabled = true;
        return false;
    }

}

/*validate email in contact page*/
function validateEmailContact()
{
    var email = document.contact.email;
    var validFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if((email.value.match(validFormat)))
    {
        return true;
    }
    else
    {
        alert("Please enter valid format for Email..");  
        return false;
    }

}

/*show input text when user choose other in gender radio button*/
function showInputTextField(num){
    if(num == 0){
        document.getElementById("otherValue").innerHTML = "<input type=\"text\" name=\"gender\" size=\"10\" />";
    }
    else
        if(num == 1 ){
            document.getElementById("otherValue").innerHTML = "<input style= \"display:none;\" type=\"text\" name=\"gender\" size=\"10\" />";
        }
}

/*valid register page*/
function registerForm(){
    var username = document.register.username;
    var validusername = /^[A-Za-z]+$/;
    var email = document.register.email;
    var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(username.value.match(validusername) && email.value.match(validemail)){
        alert("Register Successfully! Welcome " + username.value);
        return true;
    }
    else{
        alert("Please enter valid username or valid email");
        return false;
    }

}

/*add country function in register page */
function addCountry() {
    var i , n = 0;
    var select = document.getElementById("myCountry");
    var option = document.createElement("option");
    var country = prompt("Please enter your country", "China");

    if(country != null)
    {
        for(i = 0; i < select.length; ++i)
        {
            if(select.options[i].value == country)
            {
                alert(country + " is in the option list");
                n = 1;
            }  
        }
    } 

    if(n != 1)
    {
        option.text = country;
        option.value = country;
        select.add(option); 
    }
}

/*validate username and password when login*/
function loginForm(username, password)
{
    var valid = /^[A-Za-z]+$/;
    var validpassword = /^(?=.*\d).{4,8}$/;
    if((username.value.match(valid)) && (password.value.match(validpassword)))
    {
        alert("Login Successfully, Welcome " + username.value);
        return true;
    }
    else
    {
        alert("Username or password are invalid. Username must only have letters. Password must be between 4 and 8 digits long and include at least one numeric digit.");
        return false;
    }
}

/*submit successfully alert*/
function submitContact(){
    alert("Send Successfully.. Thank you for your comment!");
}


/*display time function*/
function displayTime(){
    var current = new Date();
    var year = current.getFullYear();
    var month = current.getMonth()+ 1;
    var day = current.getDate();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var second = current.getSeconds();
    var ampm = hour >= 12 ? 'pm' : 'am';
    minute = timeFormat(minute);
    second = timeFormat(second);
    month = timeFormat(month);
    day = timeFormat(day);
    var date = year + "-" + month + "-" + day;
    if(hour > 12){
	hour = hour % 12;
        hour = "0"+hour;
    }
    else{
	hour = hour;
    }
    var time = hour + ":" + minute + ":" + second + " " +ampm;
    document.getElementById('time').innerHTML = date + " " + time;
    var t = setTimeout(displayTime,500);
}

/*check minutes, seconds, and hour*/
function timeFormat(t){
    if(t < 10){
        t = "0" + t;
    }
    return t;
}

/* price for so much Longing in so little space */
function getPriceLittleSpace(){
    var pricelittleSpace = 0;
    var form = document.forms["bookDocument"];
    var littlespace = form.elements["littlespace"];

    if(littlespace.checked == true){
        pricelittleSpace = 47.95;
    }

    return pricelittleSpace;
}

/* price for the spirit of science fiction */
function getPriceScienceFiction(){
    var priceScienceFiction = 0;
    var form = document.forms["bookDocument"];
    var scienceFiction = form.elements["scienceFiction"];

    if(scienceFiction.checked == true){
        priceScienceFiction = 65.82;
    }

    return priceScienceFiction;
}

/* price for the spirit of science fiction */
function getPriceWhiteBook(){
    var priceWhiteBook = 0;
    var form = document.forms["bookDocument"];
    var whiteBook = form.elements["whitebook"];

    if(whiteBook.checked == true){
        priceWhiteBook = 48.28;
    }

    return priceWhiteBook;
}

/* price for exhalation */
function getPriceExhalation(){
    var priceExhalation = 0;
    var form = document.forms["bookDocument"];
    var exhalation = form.elements["exhalation"];

    if(exhalation.checked == true){
        priceExhalation = 73.24;
    }

    return priceExhalation;
}

/* price for exhalation */
function getPriceBowlaway(){
    var priceBowlaway = 0;
    var form = document.forms["bookDocument"];
    var bowlaway = form.elements["bowlaway"];

    if(bowlaway.checked == true){
        priceBowlaway = 75.64;
    }

    return priceBowlaway;
}

/* calculate book price */
function calculateBookPrice(){
    var bookPrice = getPriceLittleSpace() + getPriceWhiteBook() + getPriceScienceFiction() + getPriceExhalation() + getPriceBowlaway();
    var result = document.getElementById("result");
    bookPrice = bookPrice.toFixed(2);
    if(bookPrice < 0){
        result.style.display = "none";
    }
    else{
        result.style.display = "block";
        result.innerHTML = bookPrice;
    }   
    return bookPrice; 
}
/*calculate delivery Fee*/
function calculateDeliveryFee(){
    var deliveryFee = calculateBookPrice() * 0.05;
    var delivery = document.getElementById("delivery");
    deliveryFee = deliveryFee.toFixed(2);
    if(deliveryFee < 0){
        delivery.style.display = "none";
    }
    else{
        delivery.style.display = "block";
        delivery.innerHTML = deliveryFee;
    }
    return deliveryFee;
}

/*calculate book total price*/
function calculateBookTotalPrice(){
    var priceBook = getPriceScienceFiction() + getPriceLittleSpace() +getPriceWhiteBook() + getPriceExhalation() + getPriceBowlaway();
    var feeDelivery = calculateBookPrice() * 0.05;
    var totalPrice = priceBook + feeDelivery;
    totalPrice = totalPrice.toFixed(2);
    
    if(totalPrice <= 0.00){
        alert("Please choose at least one Book to estimate the price");
        return false;
    }
    else
    {
        alert("Thanks for choosing our website! Your pricing is RM"+totalPrice);
        return true;
    }
}








