export default function (p) {
  let onReady = () => {};
  let props = {};

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function (_props) {
    debugger
    props = _props;
  }

  p.setup = function() {
    p.createCanvas(900, 600);
    console.log("::: displayDensity:", p.displayDensity());
    console.log("::: pixelDensity:", p.pixelDensity());
    onReady();
  }

  let center_width=1, width_between=4;

  p.draw = function() {

    let speed = props.speed;
    let size = props.size;
    let angle = props.angle;

    p.frameRate(speed);
    p.translate(p.width/2,p.height/2);

    let r;
    r = width_between * p.sqrt(center_width);
    angle = center_width * (p.PI/180) * angle;

    let x = r * p.cos(angle);
    let y = r * p.sin(angle);

    // setTimeout(function(){ alert("Hello"); }, 3000);

    p.strokeWeight(size);
    p.point(x,y)
    center_width += 2

    let randomColor = function () {
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
      p.stroke(r,g,b)
    }

    randomColor();

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
//     let triangle;
//
//     let shape = function (x,y) {
//       if (triangle === true) {
//         p.triangle(x+5, y-5, x-10, y+10, x-10, y-10);
//       } else {
//         p.point(x,y)
//       }
//     }
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
