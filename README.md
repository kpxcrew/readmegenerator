# ReadMe Generator
THe ReadME Generator is a command-line prompt to generate a ReadMe file.
## Technologies Used

JavaScript
JSON
Node

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Usage

Utilizing the application is simple

* Open the folder using GitBash
* Once open, open an integrated Terminal
* Type "npm i" to install dependencies
* Then type "node index.js" to start the question prompts
* Answer the questions and then it'll generate a readme.md file

## Demo
[readmegen demo.webm](https://user-images.githubusercontent.com/118790881/223918212-679f2ea4-96ef-47d1-9dca-01dee97212a8.webm)
