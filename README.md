# Sprint 5 Module 3 Project

## Introduction

Welcome to Module 3 Project! In this project, you will practice using "vanilla" JavaScript to manipulate the DOM. Your goal is to flesh out a page using JavaScript.

This time, you will package your DOM manipulations inside of functions (components!) for easy re-usability.

To successfully complete this project, you will need the following technical skills:

1. **Selecting elements** and groups of elements from the DOM.
1. **Looping** over arrays and lists of DOM elements.
1. **Manipulating class names and text** content of elements.
1. **Creating listeners** for click events and keyboard events.
1. **Creating functions** that return DOM elements.
1. **Looping over data** and use a component at each iteration.

In addition to these technical skills, the following soft skills will greatly impact your performance:

1. Attention to detail. Make sure there isn't a single character out of place!
1. Perseverance. Keep trying until you figure it out!
1. Patience. Make sure to read the entire README for important information.

## Instructions

You have been given a take-home coding assessment as part of the hiring process for a Web Developer position. Your task is to flesh out parts of a website, using only JavaScript.

You can find a [detailed mock](https://bloominstituteoftechnology.github.io/W_U2_S5M3_module_project/) showing the desired end result.

Make sure to carefully read and follow the instructions. Good luck!

### 💾 Setup

**Here are the steps to set up this project:**

1. **Clone this repository** to your computer, allowing you to run the software locally for development and testing purposes.

1. Within your terminal, navigate to the project folder **and execute `npm install`**.

1. After successful installation, open two terminal windows at the project folder and **execute `npm start` in your first terminal and `npm test` in your second**.

1. You will load the app in Chrome by **navigating the browser to `http://localhost:3003`**.

1. If you haven't already, install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode.

### 🥷 Tasks

**Here are guidelines for completing your tasks:**

- If you look inside the `frontend` folder you will notice it contains, among other assets, an `index.js` file. If you inspect the head element of the `index.html` document, you will find the script being loaded there.

- You will complete your tasks inside the `frontend/index.js` file. Do not modify any other files. Detailed instructions for each task can be found below.

- As you make progress, the behavior of the website will start matching that of the [mock](https://bloominstituteoftechnology.github.io/W_U2_S5M3_module_project/).

- As you complete your tasks, tests will start passing in the terminal. The tests are not exhaustive, but more like "smoke tests" that look for obvious breakage.

- Use your attention-to-detail skills to ensure that your site matches the look and behavior of the mock exactly.

- Have fun, and check out the Solution Video for this project if you need help!

#### 👉 TASK 1 - Write a `buildNav` component that returns a nav

<details>
  <summary>Click to read</summary>

  ---

Implement the `buildNav` function:

  1. It takes an array of objects as its argument, and returns a nav element.
  2. The array passed into the function contains the data needed to construct the nav.
  3. Each object in the array contains the data needed to construct a single anchor tag inside the nav.
  4. Each object contains `href`, `textContent` and `title` properties.

See below an example of a return value of `buildNav`, depending on the data passed into it:

```html
<nav>
  <a href="https://www.example.com" title="Go to the home page">Home</a>
  <a href="https://www.example.com/about" title="Learn more about our company">About</a>
  <a href="https://www.example.com/services" title="View our available services">Services</a>
  <a href="https://www.example.com/blog" title="Read our latest blog posts">Blog</a>
  <a href="https://www.example.com/contact" title="Get in touch with us">Contact</a>
</nav>
```

❗ After the `buildNav` function declaration you will see the function being used to create a nav and attach it to the DOM.

  ---

</details>

#### 👉 TASK 2 - Create learner cards

<details>
  <summary>Click to read</summary>

  ---

This task has too parts **2A** and **2B**:

- 2A is concerned with **implementing a function** `buildLearnerCard` that returns a single learner card.
- 2B is concerned with **utilizing the function** to create the learner cards and attaching them to the DOM.

**You will need to tackle 2A and 2B in parallel at the beginning:**

1. Begin **2A** by stubbing out a simple card by returning a `<div>WIP</div>` element from `buildLearnerCard`.
2. Switch to **2B** and loop over the `learners` array of data.
3. At each **iteration** of the loop, generate a learner card using `buildLearnerCard`:

    - The first argument `buildLearnerCard` is the learner of interest in the current iteration of the loop.
    - The second argument is the whole `languages` array.

4. Also, at each **iteration** of the loop, you need to append the card to the `section` element inside the HTML.
5. Reload Chrome and see all your "WIPs" rendering inside the `section` element, one per learner.
6. Turn back to part **2A** and implement the function so that the structure returned from it looks like the following example:

    ```html
    <div class="learner-card">
      <p>Kenneth Fisher</p>
      <p>Learner ID: 24</p>
      <p>Date of Birth: 1990-01-01</p>
      <p>Favorite Language: Python</p>
    </div>
    ```

    ❗ Note that because of the styles applied in `styles.css`, some paragraphs will be hidden from view and you will have use Dev Tools to see them!

7. **To make the cards behave like the ones in the mock**, inside `buildLearnerCard` add a listener for click events on the card that does the following:

    1. Adds the class name 'active' to the clicked `div.learner-card`.
    2. Removes the 'active' class name from any other card that has it, if any.

  ---

</details>

#### 👉 TASK 3 - Write a `buildFooter` component that returns a footer

<details>
  <summary>Click to read</summary>

  ---

This task is more tedious but more straightforward than TASK 2! Implement the `buildFooter` function:

  1. It takes an object as its only argument, containing all the data needed to build the footer.
  2. The function returns a fully-built footer.
  3. Ensure the email link works correctly and attempts to open an email client when clicked.

See below an example of a possible return value of `buildNav`, depending on the data passed into it:

```html
  <footer>
    <div class="company-info">
      <p class="company-name">Bloom Institute of Technology</p>
      <p class="address">123 Main Street, City, Country</p>
      <p class="contact-email">Email: <a href="mailto:info@example.com"> info@example.com</a></p>
    </div>
    <div class="social-media">
      <a href="https://twitter.com/example">Twitter</a>
      <a href="https://www.facebook.com/example">Facebook</a>
      <a href="https://www.instagram.com/example">Instagram</a>
    </div>
    <div>© BLOOM INSTITUTE OF TECHNOLOGY 2023</div>
  </footer>
```

❗ After the `buildFooter` function declaration you will find the function being used to create a nav and attach it to the DOM.

  ---

</details>

#### 👉 TASK 4 - Clicking on the section should deactivate the active card

<details>
  <summary>Click to read</summary>

  ---

Create the necessary code so that clicking on the `<section>` anywhere _outside of a card_ deactivates the active card if any. See this functionality in action in the mock.

  ---

</details>

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>I am getting errors when I run npm install or npm start. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Your learning materials should have covered the installation of Node. Sometimes Node can be installed but misconfigured. You can try executing `npm run fixit` (check `package.json` to see what this does), but if Node errors are recurrent, it indicates something is wrong with your machine or configuration, so you should request assistance from learner assistants.

</details>

<details>
  <summary>Do I need to install libraries or add scripts to the HTML?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Why am I not allowed to edit the CSS file?</summary>

The CSS is the domain of a different team, and in this particular project we're not supposed to touch it. Do not use inline styles to get around this limitation.

</details>

<details>
  <summary>Why am I not allowed to edit the HTML file?</summary>

This particular part of the product is a Single Page Application, so the HTML is mostly empty and the page is generated automatically using JavaScript and raw data. We would not want to manually edit HTML files in a website that changed all the time! It would be untenable.

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Save your changes and reload the site in Chrome. If your code has a syntax problem, the app will print error messages in the console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem originates) and see if your variables contain the data you think they do.

Suppose there are no errors, but the page is not doing what it should. In that case, the debugging technique is similar: put console logs to ensure that the code you are working on is executing and check that all variables in the area hold the correct data.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

Execute `npm test` in your terminal. If a particular test is giving you grief, don't jump straight to the code to try and fix it. Go to Chrome first, and make sure you can replicate the problem there. A problem we can reliably replicate is a problem mostly fixed.

</details>

<details>
  <summary>I believe my code is correct and the test is wrong. What do I do?</summary>

On occasion the test runner will get stuck. Use CTRL-C to kill the tests, and then `npm test` to launch them again. Try to reproduce the problem the test is complaining about by interacting with the site in Chrome, and do not code "to make the test happy". Code so that **your app does exactly what the mock does**. The tests are there for confirmation. Although it's possible that a particular test be flawed, statistically it's more likely that the bug is in your own code. Check all your texts to make sure they match the mock exactly! If the problem persists, please request assistance from Staff.

</details>

<details>
  <summary>The output of the test script is just too overwhelming! What can I do?</summary>

If you need to disable all tests except the one you are focusing on, edit the `mvp.test.js` file and, as an example, change `test('👉 focus on this', () => { etc })` to be `test.only('👉 focus on this', () => { etc })`. (Note the "only".)

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. Make a commit whenever you achieve anything and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well, but it is advised that you request assistance from a learner assistant.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashioned" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Node apps typically have a `package.json` file and several other configuration files placed at the root of the project. This project also includes automated tests and a web server, which adds a little bit of extra complexity and files.

</details>

<details>
  <summary>Is this how web projects are normally organized?</summary>

Web projects can be organized in many ways and there aren't many standards. Some developers like the freedom, while others prefer to use opinionated frameworks, which can do a lot of magic but require folders and files be structured and named just so.

</details>

<details>
  <summary>Why is my code inside index.js wrapped in a function?</summary>

This way we can easily import your code as a single function in the `mvp.test.js` test suite. The export syntax is at the bottom of `index.js`.

</details>

<details>
  <summary>What are the package.json and package-lock.json files?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that are downloaded when you execute `npm install`. There can be some wiggle room to allow newer versions of the dependencies to be installed, so the `package-lock.json` file, when present, makes sure the exact same versions of everything are used every time the project is installed from scratch.

</details>

<details>
  <summary>What is the "start" script in the package.json doing? It looks confusing.</summary>

Give ChatGPT the following input for a detailed breakdown:

```txt
Hello, I'm looking at a JavaScript project on GitHub, and inside the package.json file I am seeing the following "script":

"start": "fkill :3003 -s && node ./backend/server.js"

Can you explain in detail, but with simple terms, to an audience of inexperienced web developers, what the "start" script is doing?
```

</details>

<details>
  <summary>What is the .eslintrc.js file?</summary>

This file works in combination with the Eslint extension for VSCode to highlight syntax errors and problems in your code. By editing this file you can customize your linting rules.

</details>

<details>
  <summary>What is Jest?</summary>

Jest is a framework that allows you to write tests and execute them, to alert you very quickly of problems with the code. Jest can do in seconds what an entire Quality Assurance team would take hours or even days. In the context of the Sprint Challenge, Jest is used to check your code against specification and give you a grade (% of tests passing).

</details>
