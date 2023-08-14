 function submitForm() {
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const phoneNumber = document.getElementById("phone-number").value;
            const email = document.getElementById("email").value;

            const formInfo = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Phone Number: ${phoneNumber}
            Email ID: ${email}
            `;

            alert(formInfo);
        }