# Password Generator

## Description
The "Password Generator" is a web application that generates a password based on criteria chosen by the user. While writting the script for this application I learned so much about Javascript including prompts, alerts, random math methods, and how the placement of functions affects the flow of execution. Originally I had the generatePassword function near the bottom, made up of only the for loop that would choose characters at random. The defined variables, prompts/alerts stood on their own above the function. So when you visited the page you were automatically presented with prompts, created your password criteria, then had to click the generate button to get a password. During my tutoring session, I realized that having to click the button after the prompts might be confusing to some users. They might expect that a result would be generated after going through the prompts and not realize they have to click the "generate password" button and assume the page doesn't work. So I moved the function all the way up to the top and modified the code to make sure the prompts/alerts still functioned properly within the function. The final outcome is that a user will be prompted for input after clicking the "generate password" button, and the password will be visible once they go through all the alerts. This taught me the importance of testing your page, getting user input, and triple checking the acceptance criteria for projects. What makes sense to me as a developer might not be clear to a user. Ultimately, web applications are built for users and must be user-friendly.

## Installation
N/A, no installation required.

## Usage
When you visit https://milena-allaway.github.io/password_generator/ you will see a page that looks like this:

![_C__Users_milen_projects_password_project_password_generator_Develop_index html](https://github.com/milena-allaway/password_generator/assets/132115087/576f4f7a-44fc-435a-844d-61038a9f322c)

The user must click the "Generate Password" button which will activate some pop up windows, like this:

![Screenshot_popup](https://github.com/milena-allaway/password_generator/assets/132115087/07239cf9-ae7e-435d-aa97-fc00f6126e02)

Then, the user can go through the prompts to choose their password length by entering a number (if they put an invalid value they will be prompted to try again). Then they can choose what type of characters they want to include in their password. If you peak at the console log you will see some information about the chosen variables. Once all the alerts have been cycled through, a password will be generated in the area that previously displayed "Your Secure Password".

## Credits
A special shout-out must go to my tutor, Katie Redford. Katie helped me troubleshoot through my re-organization of my generatePassword function, and taught me some keyboard short cuts to make editing easier. 
Some starter code was provided for this project which can be found here: https://github.com/coding-boot-camp/friendly-parakeet
Information about prompts/confirms was used from https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt and https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
The code used to select random characters from the chosen options was modified using the function found here: https://www.slingacademy.com/article/create-javascript-array-of-random-elements-with-given-length/  I ended up taking out the arrow function I found here when I reorganized my code, but the Math methods part of the code was from that post.
As always, https://www.w3schools.com/ provided clarity on everything.

## Lisence
MIT Liscence
