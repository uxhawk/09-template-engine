# Team Profile Generator

This CLI app uses creates an HTML page with profile information for an employee team. The team is composed of a manager and any number of interns and engineers. The profile information for each team member is collected via [node inquirer](https://www.npmjs.com/package/inquirer).

<img src="https://lh3.googleusercontent.com/vabKC4krP9xPH2cP5cF8vSYdJ5GLmBvVyvQu4LbAXbg53e8RRiuYqpalTndIt_fcZCsVbETCN8a_8skSo0M6m81svj6du1p0FEXRUWq96wqR4Wa19JbUAz53LsEKPBHTaHJQyinWcCxPkqr3T_HF3pwCJ7ioUuQsjqIAWZWwGfCDNzIGNW0RQ8J8hWU2N7gWMG3jHiH9wwZwNxCfKB1jBzXimljAR6YCytwOjPdJ829TK6SS4CHIlQL6H_7r7XhC3A1B4XRz_RrdynvvqTFrS_iyyTp0bcF6F_RXlWtcmbPQyZK1xUeZWD7rCB3Q_f0KqdcV7MEXKPUSXHQfSYNYhi9J8KHORsqxGhuvwiksC2E8ZJtTcc-76cSkzbWNaJ92AB_tqsJ1NkPaekdto-nYZJAQD5S1ZYkM3EyP_MbOWHBVvwI39DxNU2hqFfXj1GpCcKMNZX4P-bZnQ99K34WTlwSAI-_8Tf0aGUGlv3vo7H3QQZc0ld2jzl-qbCBh3w1lmUJDrlZAvKawGeQTg1jIEEwfrDiARCRrrf3w-soC287uOhyRTyeFKYbuErdmBoElfneQXoJ8YOzAPJEMDo4o5EldUA21BczJ95MzN-KLNLaYY3xvna1TZBIYXAvaYJQMIkN_PJ5jMX1YhvDBFa9pzjnemOeJZm3yXK6-7mYmJ5llFLOdM9njFM3uReTpq21Jt0AWFcA5nFD4Iybl6GfQF1ZItwvoaZwJosBCTQKK25p0B3FIg1eiAQ=w1918-h897-no">

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
