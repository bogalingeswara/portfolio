function sendMail() {
        var params = {
                name: document.getElementById("name").value,
                email: document.getElementById("EmailAddress").value,
                message: document.getElementById("message").value
        };
        const serviceID = "service_0og6eum";
        const templateID = "template_377g72b";

        emailjs.send(serviceID, templateID, params)
                .then(
                        res => {
                                document.getElementById("name").value = "";
                                document.getElementById("EmailAddress").value = "";
                                document.getElementById("message").value = "";
                                console.log(res);
                                alert("Your message sent successfully");
                        }
                ).catch(err => console.log(err));
}

