## JS Project Proposal: Phyllotaxis-Demo

### Background

Phyllotaxis is a botanical concept that describes the arrangement of leaves on a plant stem. Phyllotactic spirals are a specific class of patterns that recur in nature. Fermat's spiral outlines the mathematics behind phyllotaxis.

1) A mesh of spirals occurs in Fibonacci numbers because divergence (angle of succession in a single spiral arrangement) approaches the golden ratio.
2) 137.508° is the golden angle which is approximated by ratios of Fibonacci numbers, this determines spiral angle.
3) Mathematical formula:

  r = c√n,
  θ = n X 137.508 deg
  
  Where θ is the angle, r is the radius or distance from the center, and n is the index number of the floret and c is a constant scaling factor.

There is a lot of potential for user interaction to alter the visual representation of Phyllotaxis using Fermat's spiral as a base formula. 

### Functionality & MVP  

Users will have the ability to

- Change the rate of flux of the pattern
- Change diameter and color of the circles that tile it
- Change the total number of circles to increase or decrease size
- Toggle colors and the distribution of colors

I will also include:

- An about modal describing the mathematical formula and a explaining that this naturally occurs in plants
- A production README

### Wireframes

There will be a main layout that has the visualization centered. There will be links to the Github, my LinkedIn,
and the About modal. There will be a constantly shifting shape if the rate of movement is selected to be high. I will implement inputs or sliding scales to change the formula and alter the display of the pattern. On the right, there will be three (or more) inputs that alter the program that generates the pattern. I may or may not implement default states to show some interesting patterns that I generated myself.

![wireframes](https://github.com/langerkirill/Phyllotaxis-Demo/blob/master/Wireframe%20for%20Phyllotaxis%20Demo.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for pattern rendering logic
- `Processing` with `P5.js` for rendering the patterns and effects

There will be two scripts involved in this project:

`Display.js`: this script will handle the logic for creating and updating the necessary `Phyllo.js` display and rendering the pattern.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Get a working idea of how to implement P5 and Processing into Display.js. Get the entry file showing something on the DOM. 

- Show some circles on the page
- Get them to change shape with different backend formula alterations

**Day 2**: Find out how to change colors. Give the user the ability to change objects on the screen on click. See the pattern shift with basic manipulation that gives the user a sense of the nature of the spiral. 

- Get a functional display that allows for alteration of the pattern in real time.
- Work on rendering different colors.
- Create an about that gives the user information about the formula and the Phyllotaxis pattern.

**Day 3**: Complete the backend that gives the user complicated manipulation of the formula. Style the page so that the appearance is professional and the display renders a visually pleasing pattern.

- Generate complex manipulation functionality that integrates seemlessly with the display.
- Have a styled about section and working links to my git and linkedin.
- Give the user a way to scale the pattern and change the colors in real time.
- Work on uploading the project to GitPages

### Bonus features

There are some complicated things that would be awesome to implement.

- Make an option to display the spiral in 3D
- Make some default layouts that I find to be most impressive
- Add the ability to use different shapes aside from just spheres
