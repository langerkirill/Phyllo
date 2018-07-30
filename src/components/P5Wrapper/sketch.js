export default function (p) {
  let onReady = () => {};
  let props = {};

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function (_props) {
    props = _props;
  }

  p.setup = function() {
    p.createCanvas(900, 600);
    // p.createCanvas(900, 600, p.WEBGL);
    console.log("::: displayDensity:", p.displayDensity());
    console.log("::: pixelDensity:", p.pixelDensity());
    onReady();
    p.colorMode(p.HSB, 255);
    p.background(0);
  }

  let center_width=1, width_between=4;

  p.mousePressed = function () {
  // Check if mouse is inside the circle
  if (p.mouseX >= 0 && p.mouseX <= 900 && p.mouseY >= 0 && p.mouseY <= 600) {
    // Pick new random color values
    p.setup();
    center_width=1;
    width_between=4;
  }
}

  p.draw = function() {

    let speed = props.speed;
    let size = props.size;
    let angle = props.angle;
    let hue = props.hue;
    let random = props.random;
    let shape = props.shape;

    p.frameRate(speed);
    p.translate(p.width/2,p.height/2);

    let r;
    r = width_between * p.sqrt(center_width);
    angle = center_width * (p.PI/180) * angle;

    let x = r * p.cos(angle);
    let y = r * p.sin(angle);

    p.strokeWeight(size);
    center_width += 2

    let randomColor = function () {
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
      p.stroke(r,g,b);
    }

    let chooseColor = function () {
      if (random) {
        randomColor();
      } else {
      p.stroke(hue, 255, 255);
      p.fill(hue, 255, 255, 127);
      }
    }

    chooseColor();

    let twoDShape = function () {
      if (props.shape === 'point') {
        p.point(x,y)
      } else if (props.shape === 'triangle'){
        p.triangle(x+5, y-5, x-10, y+10, x-10, y-10);
      } else if (props.shape === 'circle'){
        p.ellipse(x, y, x, y);
      }
    }

    let threeDShape = function () {
      p.translate(-500, -300, -300);
      p.translate(x, y, -300);
      if (props.shape === 'sphere') {
        p.sphere(70);
      } else if (props.shape === 'torus'){
        p.torus(70, 20);
      } else if (props.shape === 'cone'){
        p.cone(70, 70);
      }
    }

    let two = ['circle', 'square', 'triangle', 'point']

    if (two.includes(props.shape)) {
      twoDShape();
    } else {
      threeDShape();
    }
  }
}



// export default function (p) {
//   let onReady = () => {};
//   let props = {};
//
//   p.setOnReady = function(cb) {
//     onReady = cb;
//   };
//
//   p.pushProps = function (_props) {
//     props = _props;
//   }
//
//   p.setup = function() {
//     p.createCanvas(900, 600);
//     console.log("::: displayDensity:", p.displayDensity());
//     console.log("::: pixelDensity:", p.pixelDensity());
//     onReady();
//   }
//
//   let r;
//   let n=3, c=2;
//
//   p.draw = function() {
//
//     r = c * p.sqrt(n);
//     let x = r * p.cos(137.5);
//     let y = r * p.sin(137.5);
//
//
//
//     randomColor();
//     p.strokeWeight(15);
//     shape(x,y);
//     n+=5;
//
//     if ((p.frameCount / p.round(p.frameRate())) % 3 === 0) {
//       props.getValue(p.frameRate().toFixed(1));
//     }
//
//     p.translate(p.width/2, p.height/2);
//   }
// }
