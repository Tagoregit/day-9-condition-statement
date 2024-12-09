/**1. Scenario: Online Library Membership
---------------------------------------
Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

Basic Membership: Access to only free books.

Standard Membership: Access to free books and discounted paid books.

Premium Membership: Access to all books, including exclusive content.

Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid. */
var membership = "membership";
if(membership == "basic membership"){
    console.log("Access to only free books")
}
else if(membership == "standard membership"){
    console.log( "Access to free books and discounted paid books")
}
else if(membership == "premium membership"){
    console.log("Access to all books, including exclusive content")
}
else{
    console.log("invalid Membership")
}
console.clear()


/**2. Scenario: E-Commerce Discount Application
---------------------------------------------
Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.
 */

var customermembership="VIP customers";
var purchases=799
if(customermembership==="Regular customers"){
   if(purchases>0 && purchases<100){
    console.log(" No discount for purchases under $100");
   }
   else if(purchases>=100 && purchases<500){
    discount=0.05;
console.log(`Applying 5% discount for purchases:${purchases-purchases*discount}`)
   }
   else if(purchases>=500){
    discount=0.10;
console.log(`Applying 10% discount for purchases:${purchases-purchases*discount}`)
   }
   else{
    console.log(" negative purchase amounts or unrecognized membership statuses")
   }
}
else if(customermembership="VIP customers"){
    if(purchases>0 && purchases<100){
        discount=0.10;
console.log(`Applying 10% discount for purchases:${purchases-purchases*discount}`)
    }
    else if(purchases>=100 && purchases<500){
    discount=0.15;
console.log(`Applying 15% discount for purchases:${purchases-purchases*discount}`)
    }
    else if(purchases>=500){
    discount=0.20;
console.log(`Applying 20% discount for purchases:${purchases-purchases*discount}`)
       }
       else{
console.log(" negative purchase amounts or unrecognized membership statuses")
       }
}
console.clear()


/**
3. Scenario: Academic Scholarship Eligibility
----------------------------------------------
Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none */
var GPA=2.6;
var  extracurricularactivities=2; 
var communityservicehours=100;
if(GPA>=3.5){
        console.log('student Eligiblit for merit-base scholarships ')
}
else if (GPA>=3 && extracurricularactivities<='2'){
    console.log('student Eligiblit for Leadership scholarships ');

}
else if(GPA>=2.5 && communityservicehours>=100 ){
     console.log('student Eligiblit for Community Service scholarships ');
}
else{
    console.log('student not Eligiblit for  scholarships')
}
console.clear()

/**4. Scenario: Movie Ticket Pricing
----------------------------------
Context: A movie theater charges different prices based on the day of the week and the customer's age:

Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

Weekends: Standard price of $15. Seniors and children receive a 30% discount.

Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid. */

var age=10;
var week="weekends"
if(week==="weekdays"){
    if (age>0 && age<12){
       price=12
        console.log(`children receive 50% discount: ${price=price-price*0.5}`)
    }
    else if(age>=65)
    {
        price=12;
        console.log(`seniors receive 50% discount: ${price=price-price*0.5}`)  
    }
}
else if(week==="weekends"){
    if( (age>0 && age<12)){
        price=15
        console.log(`children receive 30% discount: ${price=price-price*0.3}`)
    }
    else if( age>=65){
           price=15
            console.log(`seniors receive 30% discount: ${price=price-price*0.3}`)
        }
    }
    else{
        console.log("no discount")

    }
    console.clear()




    
/**5. Scenario: Event Registration Validation
-------------------------------------------
Context: An event registration system needs to validate user inputs before confirming their registration:

The user must be 18 years or older to register.

The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

The user must provide a valid email address.

Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met. */
var age=10;
var numberofparticipants=380;
var email="@email.com"
if((age>=18 &&numberofparticipants<=100) && email==="@email.com"){
    console.log("you can register for event");
}
else if(age>100){
    console.log("the event is full ,no more registerons are accepted");

}
else{
    console.log("not eligible for  registrations ");
}
