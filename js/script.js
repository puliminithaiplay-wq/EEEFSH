const form = document.getElementById("registrationForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const registerNumber =
            document.getElementById("registerNumber").value;
        const department =
            document.getElementById("department").value;
        const year =
            document.getElementById("year").value;
        const selectedEvent =
            document.getElementById("event").value;
        const category =
            document.getElementById("category").value;

        const registration = {
            name: name,
            registerNumber: registerNumber,
            department: department,
            year: year,
            event: selectedEvent,
            category: category
        };

        console.log(registration);

        document.getElementById("message").innerHTML =
            "✅ Registration submitted successfully!";

        form.reset();

    });

}
