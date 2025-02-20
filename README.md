# CV Generator

A dynamic CV generator built with React, allowing users to input their details and generate a formatted resume.

## Features

- Add and manage personal details, education, projects, achievements, and skills.
- Live preview of the CV.
- Remove or modify sections dynamically.
- Uses React Context API for state management.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/cv-generator.git
   cd cv-generator
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## File Structure

```
Cv-Generator/
│── public/
│── src/
│   │── components/
│   │   │── details/
│   │   │   │── PersonalDetails.jsx
│   │   │   │── EducationDetails.jsx
│   │   │   │── Projects.jsx
│   │   │   │── Skills.jsx
│   │   │   │── Achievements.jsx
│   │   │── CVDiv.jsx
│   │   │── FormContainer.jsx
│   │   │── DataContext.jsx
│   │── App.js
│   │── index.js
│── package.json
│── README.md
```

## Usage

1. Fill in your personal details, education history, projects, and skills.
2. The CV will update in real-time.
3. Export or print your generated CV.

## Technologies Used

- React.js
- React Context API
- CSS Modules

## License

This project is licensed under the MIT License.
