const form = document.getElementById("registrationForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const otherNamesInput = document.getElementById("otherNames");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const genderSelect = document.getElementById("gender");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const otherNamesError = document.getElementById("otherNamesError");
const emailError = document.getElementById("emailError");
const phoneNumberError = document.getElementById("phoneNumberError");
const genderError = document.getElementById("genderError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // Reset error messages
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  otherNamesError.textContent = "";
  emailError.textContent = "";
  phoneNumberError.textContent = "";
  genderError.textContent = "";

  // Validate first name
  if (firstNameInput.value.trim().length < 1) {
    firstNameError.textContent =
      "First name is required and cannot be less than 1 character.";
    isValid = false;
  } else if (/\d/.test(firstNameInput.value)) {
    firstNameError.textContent = "First name cannot contain numbers.";
    isValid = false;
  }

  // Validate last name
  if (lastNameInput.value.trim().length < 1) {
    lastNameError.textContent =
      "Last name is required and cannot be less than 1 character.";
    isValid = false;
  } else if (/\d/.test(lastNameInput.value)) {
    lastNameError.textContent = "Last name cannot contain numbers.";
    isValid = false;
  }

  // Validate other names
  if (otherNamesInput.value.trim() !== "" && /\d/.test(otherNamesInput.value)) {
    otherNamesError.textContent = "Other names cannot contain numbers.";
    isValid = false;
  }

  // Validate email
  if (!/.+@.+\..+/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate phone number
  if (isNaN(phoneNumberInput.value) || phoneNumberInput.value.length !== 10) {
    phoneNumberError.textContent = "Phone number must be 10 digits.";
    isValid = false;
  }

  // Validate gender
  if (genderSelect.value === "") {
    genderError.textContent = "Gender is required.";
    isValid = false;
  }
  //Check if all checks out
  if (isValid) {
    const formData = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      otherNames: otherNamesInput.value,
      email: emailInput.value,
      phoneNumber: phoneNumberInput.value,
      gender: genderSelect.value
    };

    // then save form data to 'database.json'
    saveToFile(formData);

    // Reset form
    form.reset();
  }
});

function saveToFile(formData) {
  // Convert JavaScript object to JSON string
  const jsonData = JSON.stringify(formData, null, 2);

  // Create a new Blob with the JSON data
  const blob = new Blob([jsonData], { type: "application/json" });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a new anchor element with the temporary URL
  const link = document.createElement("a");
  link.href = url;
  link.download = "database.json";

  // Append the anchor element to the document and click it
  document.body.appendChild(link);
  link.click();

  // Remove the temporary anchor element from the document
  document.body.removeChild(link);

  // Release the temporary URL
  URL.revokeObjectURL(url);
}
