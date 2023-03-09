// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
  if (license !== "None"){
    return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  if (license !== "None"){
    return `* [License](#license)`;
  }
  return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License \n This project is licensed under the ${license} license.`;
  }
  return "";
  }

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  // TODO: Create a function to generate markdown for README
      //   WHEN I enter my project title
      //   THEN this is displayed as the title of the README
      //   WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
      //   THEN this information is added to the sections of the README entitled Description Installation, Usage, Contributing, and Tests
      //   WHEN I enter my GitHub username
      //   THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
      //   WHEN I enter my email address
      //   THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
      //   WHEN I click on the links in the Table of Contents
      //   THEN I am taken to the corresponding section of the README
      
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Contributing](#contributing)
  
  ## Instillation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseLink(data.license)}
  
  ## Questions 
  Any questions? Reach me through my email!
  ${data.email}

  ## Tests
  ${data.test}
  
  ## Contributing 
  ${data.contributing}
  `;
  }
    
  
  module.exports = generateMarkdown;
  