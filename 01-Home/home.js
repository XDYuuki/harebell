var newsletterForm = document.getElementById("sign-up");

newsletterForm.addEventListener("submit", (event) => {
    let newsletterEmail = document.getElementById("email").value;
    sendMail(newsletterEmail);
    event.preventDefault();
});

function sendMail(email) {
    let emailBody = `<h3>Hello, fellow gardener</h3> 
    <p> Thank you for subscribing to our newsletter! We are thrilled to have you join our growing community of plant lovers and gardening enthusiasts. </p>

    <p> As a subscriber, you'll be the first to know about our latest product releases, exclusive discounts, and helpful gardening tips to help you cultivate your own green oasis.
    </p>
    <p> We believe that everyone can enjoy the benefits of gardening, no matter how much space you have or how experienced you are. </p>
    <p> We look forward to sharing our passion for plants with you and helping you create a beautiful and thriving garden. 
    Please don't hesitate to reach out to us if you have any questions or feedback - we're always happy to hear from our valued subscribers like you.
    </p>
    <p> Happy gardening! <p>
    
    <p>Best regards,</p>
    <br>
    <a href="https://imgur.com/Jju6LHB"><img src="https://i.imgur.com/Jju6LHB.png" title="source: imgur.com" /></a>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: envVars.MY_EMAIL,
        Password: envVars.MY_PASSWORD,
        To: email,
        From: envVars.MY_EMAIL,
        Subject: "Your Harebell newsletter subscription",
        Body: emailBody,
    }).then((message) => alert(message));
}
