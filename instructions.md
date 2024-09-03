### HTML/CSS/JS Challenge: Fetch and Display Random User Data 🧑‍💻

#### Task:

Create a small web project that fetches and displays random user data using HTML, CSS, and JavaScript. The goal is to practice integrating an API call with a simple front-end layout.

#### Instructions:

1. **API**: Use the [Random User API](https://randomuser.me/api/) to get random user data.

2. **HTML Structure**:

   - Create a basic HTML page with a section to display user information.
   - Include a button labeled "Get Random User" to trigger the API call.

3. **CSS Styling**:

   - Style the user information display area to make it visually appealing.
   - Center the content and apply padding, margins, and borders as needed.

4. **JavaScript Functionality**:

   - Create a JavaScript function named `fetchRandomUser` that:
     - Uses the `fetch` function to make a GET request to the Random User API.
     - Converts the response to JSON.
     - Extracts relevant user information such as name, email, location, and profile picture.
     - Updates the HTML to display the user's information on the page..

5. **Page Elements**:

   - **Profile Picture**: Display the user's profile picture.
   - **Name**: Display the user's full name.
   - **Email**: Display the user's email.
   - **Location**: Display the user's location (city and country).
   - **Button**: The button to fetch new random user data.

6. **Preview**:

   - Below is a preview of what your final project might look like:

     ![Project Preview](https://i.ibb.co/NnNLTqZ/Screenshot-2024-08-28-at-5-38-03-AM.png)

### Example Layout:

- **Profile Picture**: Top left, circular image
- **Name**: Top center
- **Email**: Centered below the name
- **Location**: Centered below the email
- **Button**: Centered at the bottom

### Deliverables:

- A single `index.html` file containing the HTML structure.
- A `styles.css` file for the styling.
- A `script.js` file containing the JavaScript logic to fetch and display the user data.
- A `preview.png` file showing what the completed project should look like.

#### Example Output:

```
[Profile Picture]
Name: John Doe
Email: johndoe@example.com
Location: New York, USA

[Get Random User Button]
```
