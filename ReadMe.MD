

# HTML Form with Client-side Data Validation and JSON Storage

This project is a simple HTML form that includes client-side data validation using JavaScript. Upon successful form submission, the form data is saved as a JSON file on the user's local machine.

## Features

* HTML form with fields for first name, last name, other names, email address, phone number, and gender
* Client-side data validation using JavaScript
  * First name and last name are required and cannot be less than 1 character or contain numbers
  * Other names are optional but cannot contain numbers
  * Email address must be in a valid format
  * Phone number must be exactly 10 digits
  * Gender is required
* Form data is saved as a JSON file named `database.json` on the user's local machine upon successful submission

## Usage

1. Clone or download the project files.
2. Open the `index.html` file in a web browser.
3. Fill out the form fields with the required information.
4. Click the "Submit" button.
5. If any validation errors occur, they will be displayed next to the respective form fields.
6. If the form is valid, your browser will prompt you to download a file named `database.json`.
7. Navigate to your browser's default download location and open the `database.json` file to view the saved form data.

# Assignment Instructions

1. Create a simple HTML Form containing the following fields:

- ~~a. First name~~
- ~~b. Last name~~
- ~~c. Other names~~
- ~~d. Email address~~
- ~~e. Phone number~~
- ~~f. Gender (Dropdown)~~
- ~~g. Submit button~~

2. Make sure to do proper validation that meets the following criteria:

- 1. ~~The name cannot be less than 1 character~~
  2. ~~first name and last name are required~~
  3. ~~other names is optional~~
  4. ~~The name cannot contain numbers~~
  5. ~~The email has to be a valid email with @ and .~~
  6. ~~Phone number must be a specific number of characters~~
  7. ~~Gender is required~~

3. When the form is submitted, display specific validation errors if any, if no errors, submit the content of the form to a file called 'database.json'
4. Use Codepen for your code.
5. Submit the public URL for the Codepen
6. Add instructions on how to test your code (if any)
# form-Validation
