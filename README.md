# Team Profile Generator

This CLI app uses creates an HTML page with profile information for an employee team. The team is composed of a manager and any number of interns and engineers. The profile information for each team member is collected via [node inquirer](https://www.npmjs.com/package/inquirer).

<img src="https://lh3.googleusercontent.com/UkhdpR0SyxiHGSjeQwUY7VEtGp_XTHynH-jIFm_jbua79XIlbeRmiwDH3WfqcINnyhGgWSFZZNV9XnAHl7xu8F1VO1bvMVuV_tfrsircj3MqzRvSIbtN6N7wRA1Cai5ALdnAhJuEJI5L96IBNgzk9oqbiPYMXrdOVomSMDQAU5GZ5yoxdqWpKtAzdsleDLWQRIykq4xCXMpovfFtOqlPbIHxDRq13r3Pns34UGpEvZ13kP_elGrC2fVaBkXiysfFWsWZnq3UQScrcY8opT-mRs1dRyRkh53BR0HWTtIRKy_iDbMK1qt2oLI4-sPz0ygRJxduKpOFxaHoh8WBgz1cKZt9zq5vSLJgV946Dhk4wGbPAgnbm72wEHwfmpLUo23NRvpK4gDk-096fevZShSnrJcbykgXCIlscGV71TSI1DWCjDlqupNhfaqGenCjXOfixyjk31dTkeGVUVoijDNQaIxyES-wkps5anNCRn86m3gZ4oqjSC0kdwSEz1ft1qWdxydf3_im9swJpxgoLCPkzwDDXzxlUjxj-1PSMy4wSZyZj755AQQ0ISuScsN5VDWflSH3lCM8QkZkT_Iw7hWkmYkOi9R7EBYrJ0X9kwBpDhwsuggcEYkaE2gpQ62BpWT6J2-85LIBEsb69GUL65IThpFqqGIr032NheoCzKsyaB9DNqV3n83nKqEaZijYjk_zxXAFX59F_oBB7P3XeZPyhZvD5OSIKlc-LYgUP6QCUMQF6TIMzSQYdQ=w1918-h610-no">

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

The CLI app has several dependencies. Run
`npm i` 
to install node_modules for [axios](https://www.npmjs.com/package/axios), [node inquirer](https://www.npmjs.com/package/inquirer), and [jest](https://www.npmjs.com/package/jest).

## Usage

Run 
`node index.js` 
to launch the CLI app. You'll start by entering informtion for the team manager, after which you can add Engineers and Interns until you've created a profile for all members of the team. Once you've selected that you're done adding team members, the app will write a team.html file into the root directory.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing
[<img src="https://avatars.githubusercontent.com/u/16821657?" width="60px" style="border-radius:30px">](https://github.com/uxhawk)

uxhawk@gmail.com

## Tests

Run
`npm test`
to launch jest and test four employee classes and subclasses.
