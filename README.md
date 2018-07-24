## JS Project Proposal: Phyllotaxis-Demo

### Background

Phyllotaxis is a botanical concept that describes the arrangement of leaves on a plant stem. Phyllotactic spirals are a specific class of patterns that recur in nature. Fermat's spiral outlines the mathematics behind phyllotaxis.

1) A mesh of spirals occurs in Fibonacci numbers because divergence (angle of succession in a single spiral arrangement) approaches the golden ratio.
2) 137.508° is the golden angle which is approximated by ratios of Fibonacci numbers, this determines spiral angle.
3) Mathematical formula:

  r = c√n,
  θ = n X 137.508 deg
  
  Where θ is the angle, r is the radius or distance from the center, and n is the index number of the floret and c is a constant scaling factor. The angle 137.508° is the golden angle which is approximated by ratios of Fibonacci numbers.


There is a lot of potential for user interaction to alter the visual representation of Phylitaxis using Fermat's spiral as a base formula. 

### Functionality & MVP  

Users will have the ability to

- [ ] Change the rate of flux of the pattern
- [ ] Change diameter and color of the circles that tile it
- [ ] Change the total number of circles to increase or decrease size
- [ ] Toggle colors and the distribution of colors

I will also include:

- [ ] An about modal describing the mathematical formula and a description about how this naturally occurs in plants
- [ ] A production README

### Wireframes

There will be a main layout that has the visualization centered. There will be links to the Github, my LinkedIn,
and the About modal. There will be a constantly shifting shape if the rate of movement is selected to be high. I will implement inputs or sliding scales to change the formula and alter the display of the pattern. On the right, there will be three (or more) inputs that alter the program that generates the pattern. I may or may not implement default states to show some interesting patterns that I generated myself.

![wireframes](https://github.com/appacademy/ny-portfolio-curriculum/blob/master/javascript-project/js-proposal-wireframe.jpg)

### Architecture and Technologies

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `Foo.js` with `HTML5 Baz` for effects rendering,
- `Browserify` to bundle js files.

In addition to the entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Foo.js` elements and rendering them to the DOM.

`automata.js`: this script will handle the logic behind the scenes.  An Automata object will hold a `type` (hexagon, triangle, or square) and a 2D array of `Cell`s.  It will be responsible for doing neighbor checks for each `Cell` upon iteration and updating the `Cell` array appropriately.

`cell.js`: this lightweight script will house the constructor and update functions for the `Cell` objects.  Each `Cell` will contain a `type` (hexagon, triangle, or square) and an `aliveState` (`true` or `false`).

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Foo.js` installed. Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Foo.js`.  Goals for the day:

- Get a green bundle with `Browserify`
- Learn enough `Foo.js` to render an object to the `HTML5 Baz` element

**Day 2**: Dedicate this day to learning the `Foo.js` API.  First, build out the `Cell` object to connect to the `Board` object.  Then, use `board.js` to create and render at least the square grid, ideally all 3 grid types.  Build in the ability to toggle the live/dead states on click for each cell.  Goals for the day:

- Complete the `cell.js` module (constructor, update functions)
- Render a square grid to the `HTML5 Baz` using `Foo.js`
- Make each cell in the grid clickable, toggling the state of the square on click
- Do the same for triangular and hexagonal grids

**Day 3**: Create the automata logic backend.  Build out modular functions for handling the different grid types along with their unique neighbor checks and rule sets.  Incorporate the automata logic into the `Board.js` rendering.  Goals for the day:

- Export an `Automata` object with correct type and handling logic
- Have a functional grid on the `HTML Baz` frontend that correctly handles iterations from one generation of the game to the next


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `HTML Baz`, nice looking controls and title
- If time: include buttons on the side to toggle the color scheme of the cells


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Add options for different rule sets
- [ ] Add multiple choices for starting states that are interesting
- [ ] Explore multi-state versions of the game, such as the ones outlined [here](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/gameOfLife2.html)
