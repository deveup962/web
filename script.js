 async function autoFillCountry() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            const countryCode = data.country_code;
            if (!countryCode) return;

            const countryIds = ['country', 'country1', 'country2', 'country3'];

            countryIds.forEach(id => {
                const select = document.getElementById(id);
                if (select) select.value = countryCode;
            });

        } catch (error) {
            console.log("IP autofill failed:", error);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        autoFillCountry();

        // Për modal
        const signupModal = document.getElementById('signupModal');
        if (signupModal) {
            signupModal.addEventListener('shown.bs.modal', autoFillCountry);
        }
    });
