function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
## License

This project is licensed under the terms of the ${license} license. See the [License](${renderLicenseLink(
      license
    )}) for more information.
    `;
  } else {
    return '';
  }
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
  