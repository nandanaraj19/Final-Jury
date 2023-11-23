const app = new PIXI.Application(
{
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,});
    document.body.appendChild(app.view)

document.body.appendChild(app.view);
const Graphics= PIXI.Graphics;

const circle= new Graphics();
circle.beginFill('Black')
.lineStyle(7, 0xFFFF00)
.drawCircle(1270, 700, 600, 600)
.endFill();
app.stage.addChild(circle);

app.stage.on('touchmove', (event) => {
    pointer.position.set(event.data.global.x, event.data.global.y);
});

const style= new PIXI.TextStyle({
    fontFamily: 'Helvetica',
    fontSize: 60,
    strokeThickness: 4,
    fill: 'Black',
    stroke: '#e6148e',
    strokeThickness: 6,
})
const myText= new PIXI.Text("Hi! I'm", style);
myText.x= 15;
myText.y= 5;
app.stage.addChild(myText);

const style1= new PIXI.TextStyle({
    fontFamily: 'Helvetica',
    fontSize: 60,
    strokeThickness: 2,
    fill: '#d51083',
    stroke: '#d51083',
    strokeThickness: 4,
})
const myText1= new PIXI.Text("Nandana.", style1);
myText1.x= 15;
myText1.y= 65;
app.stage.addChild(myText1);

const style2= new PIXI.TextStyle({
    fontFamily: 'Helvetica',
    fontSize: 60,
    strokeThickness: 1,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 2,
})
const myText2= new PIXI.Text("Interaction Designer", style2);
myText2.x= 15;
myText2.y= 135;
app.stage.addChild(myText2);
const textToType = "Interaction Designer";
let initialText = '';
let index1 = 0;
const typeSpeed = 140;

const typeInterval = setInterval(() => {
  initialText += textToType[index1];
  myText2.text = initialText;
  index1++;

  if (index1 >= textToType.length) {
    clearInterval(typeInterval);
  }
}, 
typeSpeed);

const rectangle= new Graphics();
rectangle.beginFill(0x4B0082)
.lineStyle(7, 0x8A2BE2)
.drawRoundedRect(600, 560, 150, 150, 20)
.endFill();
rectangle.interactive = true;
rectangle.buttonMode = true;
rectangle.on('pointerover', onRectangleHover);
//rectangle.on('pointerout', onRectangleHoverOut);
app.stage.addChild(rectangle);

function onRectangleHover() {
  if (!rectangle.messageText) {
      const messageText = new PIXI.Text("Project 1", {
          fontFamily: 'helvetica',
          fontSize: 23,
          stroke: 1,
          fill: 'white',
          align: 'center'});
      const linkText = new PIXI.Text("StudyRentals\nWebsite", {
        fontFamily: 'helvetica',
        fontSize: 19,
        fill: '#FF69B4',
        align: 'center'
      });
      linkText.interactive = true;
      linkText.buttonMode = true;
      linkText.on('pointerdown', () => {
        window.open('file:///C:/Users/Nandana/Desktop/IxD_Sem%205/Web%20Tech-%20II/WTsem5-1.%20html.html', '_blank');
      });

      messageText.position.set(675, 600);
      linkText.position.set(675, 650);
      messageText.anchor.set(0.5);
      linkText.anchor.set(0.5);
      rectangle.addChild(messageText, linkText);
      rectangle.messageText = messageText;
  }
}

function onRectangleHoverOut() {
  if (rectangle.messageText) {
      rectangle.removeChild(rectangle.messageText);
      rectangle.messageText = null;
  }
}

const rectangle1= new Graphics();
rectangle1.beginFill(0x4B0082)
.lineStyle(7, 0x8A2BE2)
.drawRoundedRect(650, 360, 150, 150, 20)
.endFill();
rectangle1.interactive = true;
rectangle1.buttonMode = true;
rectangle1.on('pointerover', onRectangle1Hover);
//rectangle1.on('pointerout', onRectangle1HoverOut);
app.stage.addChild(rectangle1);
function onRectangle1Hover() {
  if (!rectangle1.messageText) {
      const messageText = new PIXI.Text("Project 2", {
          fontFamily: 'helvetica',
          fontSize: 23,
          stroke: 1,
          fill: 'white',
          align: 'center',
      });
      const linkText1 = new PIXI.Text("Human Factors", {
        fontFamily: 'helvetica',
        fontSize: 19,
        fill: '#FFA500',
        align: 'center'
      });
      linkText1.interactive = true;
      linkText1.buttonMode = true;
      linkText1.on('pointerdown', () => {
        window.open('https://docs.google.com/presentation/d/1uCB_McBpZldysOtpDRRD_YKfDJmmg5vcmumFA3Myivs/edit#slide=id.p', '_blank');
      });

      messageText.position.set(725, 400);
      linkText1.position.set(725, 450);
      messageText.anchor.set(0.5);
      linkText1.anchor.set(0.5);
      rectangle1.addChild(messageText, linkText1);
      rectangle1.messageText = messageText;
  }
}

function onRectangle1HoverOut() {
  if (rectangle1.messageText) {
      rectangle1.removeChild(rectangle1.messageText);
      rectangle1.messageText = null;
  }
}

const rectangle2= new Graphics();
rectangle2.beginFill(0x4B0082)
.lineStyle(7, 0x8A2BE2)
.drawRoundedRect(750, 170, 150, 150, 20)
.endFill();
rectangle2.interactive = true;
rectangle2.buttonMode = true;
rectangle2.on('pointerover', onRectangle2Hover);
//rectangle2.on('pointerout', onRectangle2HoverOut);
app.stage.addChild(rectangle2);
function onRectangle2Hover() {
  if (!rectangle2.messageText) {
      const messageText = new PIXI.Text("Project 3", {
          fontFamily: 'helvetica',
          fontSize: 23,
          stroke: 1,
          fill: 'white',
          align: 'center',
      });
      const linkText3 = new PIXI.Text("Math Theorem\nusing AR", {
        fontFamily: 'helvetica',
        fontSize: 19,
        fill: '#00FF00',
        align: 'center'
      });
      linkText3.interactive = true;
      linkText3.buttonMode = true;
      linkText3.on('pointerdown', () => {
        window.open('https://www.figma.com/proto/R7CJLEWjnPPHVyWyRCXRjg/Math-theorem-AR?type=design&node-id=5-2&t=Q9CqPvuVnR4rRp9P-0&scaling=contain&page-id=0%3A1', '_blank');
      });
      messageText.position.set(825, 210);
      linkText3.position.set(765, 240);
      messageText.anchor.set(0.5);
      messageText.anchor.set(0.5);
      rectangle2.addChild(messageText, linkText3);
      rectangle2.messageText = messageText;
  }
}

function onRectangle2HoverOut() {
  if (rectangle2.messageText) {
      rectangle2.removeChild(rectangle2.messageText);
      rectangle2.messageText = null;
  }
}

const rectangle3= new Graphics();
rectangle3.beginFill(0x4B0082)
.lineStyle(7, 0x8A2BE2)
.drawRoundedRect(945, 75, 150, 150, 20)
.endFill();
rectangle3.interactive = true;
rectangle3.buttonMode = true;
rectangle3.on('pointerover', onRectangle3Hover);
//rectangle3.on('pointerout', onRectangle3HoverOut);
app.stage.addChild(rectangle3);
function onRectangle3Hover() {
  if (!rectangle3.messageText) {
      const messageText = new PIXI.Text("Project 4", {
          fontFamily: 'helvetica',
          fontSize: 23,
          stroke: 1,
          fill: 'white',
          align: 'center',
      });
      const linkText4 = new PIXI.Text("State Saga", {
        fontFamily: 'helvetica',
        fontSize: 19,
        fill: 'yellow',
        align: 'center'
      });
      linkText4.interactive = true;
      linkText4.buttonMode = true;
      linkText4.on('pointerdown', () => {
        window.open('file:///C:/Users/Nandana/Desktop/IxD_Sem%205/Interaction%20Design%20Methods-%20II/State%20Saga.pdf', '_blank');
      });
      messageText.position.set(1020, 115);
      linkText4.position.set(1020, 160)
      messageText.anchor.set(0.5);
      linkText4.anchor.set(0.5);
      rectangle3.addChild(messageText, linkText4);
      rectangle3.messageText = messageText;
  }
}

function onRectangle3HoverOut() {
  if (rectangle3.messageText) {
      rectangle3.removeChild(rectangle3.messageText);
      rectangle3.messageText = null;
  }
}

const rectangle4= new Graphics();
rectangle4.beginFill(0x4B0082)
.lineStyle(7, 0x8A2BE2)
.drawRoundedRect(1150, 40, 150, 150, 20)
.endFill();
rectangle4.interactive = true;
rectangle4.buttonMode = true;
rectangle4.on('pointerover', onRectangle4Hover);
//rectangle4.on('pointerout', onRectangle4HoverOut);
app.stage.addChild(rectangle4);
function onRectangle4Hover() {
  if (!rectangle4.messageText) {
      const messageText = new PIXI.Text("Project 5", {
          fontFamily: 'helvetica',
          fontSize: 23,
          stroke: 1,
          fill: 'white',
          align: 'center',
      });
      const linkText5 = new PIXI.Text("User Research", {
        fontFamily: 'helvetica',
        fontSize: 19,
        fill: '#FF6347',
        align: 'center'
      });
      linkText5.interactive = true;
      linkText5.buttonMode = true;
      linkText5.on('pointerdown', () => {
        window.open('file:///C:/Users/Nandana/Desktop/IxD_Sem%205/User%20Research-II/User%20Research_Funblast_Nandana.pdf', '_blank');
      });
      messageText.position.set(1225, 80);
      linkText5.position.set(1225, 120)
      messageText.anchor.set(0.5);
      linkText5.anchor.set(0.5);
      rectangle4.addChild(messageText, linkText5);
      rectangle4.messageText = messageText;
  }
}

function onRectangle4HoverOut() {
  if (rectangle4.messageText) {
      rectangle4.removeChild(rectangle4.messageText);
      rectangle4.messageText = null;
  }
}

const rectangle5= new Graphics();
rectangle5.beginFill(0x4B0082)
.lineStyle(7, 0x8A2BE2)
.drawRoundedRect(1350, 35, 150, 150, 20)
.endFill();
rectangle5.interactive = true;
rectangle5.buttonMode = true;
rectangle5.on('pointerover', onRectangle5Hover);
//rectangle5.on('pointerout', onRectangle5HoverOut);
app.stage.addChild(rectangle5);
function onRectangle5Hover() {
  if (!rectangle5.messageText) {
      const messageText = new PIXI.Text("Project 6", {
          fontFamily: 'helvetica',
          fontSize: 23,
          stroke: 1,
          fill: 'white',
          align: 'center',
      });
      const linkText6 = new PIXI.Text("Indian Railways:\nNavigation", {
        fontFamily: 'helvetica',
        fontSize: 19,
        fill: '#87CEEB',
        align: 'center'
      });
      linkText6.interactive = true;
      linkText6.buttonMode = true;
      linkText6.on('pointerdown', () => {
        window.open('https://www.figma.com/proto/QtdwRm8x66q4FehTAOrFc5/Indian-Railways--Navigation?page-id=0%3A1&type=design&node-id=1-3&viewport=1360%2C347%2C0.16&t=SigJuXrKpiLPWkm7-1&scaling=contain&mode=design', '_blank');
      });
      messageText.position.set(1425, 75);
      linkText6.position.set(1428, 130);
      messageText.anchor.set(0.5);
      linkText6.anchor.set(0.5);
      rectangle5.addChild(messageText, linkText6);
      rectangle5.messageText = messageText;
  }
}

function onRectangle5HoverOut() {
  if (rectangle5.messageText) {
      rectangle5.removeChild(rectangle5.messageText);
      rectangle5.messageText = null;
  }
}

// var container = new PIXI.Container();
// const rect_locations = [
//   [600, 560],
//   [650, 360 ],
//   [750, 170 ],
//   [945, 75 ],
//   [1150, 40 ],
//   [1350, 35 ],
// ];

// function newRect(x, y, fillColor, lineColor, width, height, borderRadius) {
//   const rect = new PIXI.Graphics();
//   rect.beginFill(0x8A2BE2)
//   .lineStyle(7, 0x8A2BE2)
//   .drawRoundedRect(x, y, 150, 150, 20)
//   .endFill();
   
//   rect.interactive = true;
//   rect.buttonMode = true;
//   rect.on('pointerdown', onRectButtonDown)
//       .on('pointerup', onRectButtonUp)
//       .on('pointerupoutside', onRectButtonUp)
//       .on('pointerover', onRectButtonDown)
//       .on('pointerout', onRectButtonOut);
//   return rect;
// }
// for (let i= 0; i< rect_locations.length; i++) {
//   let rect = newRect(
//     rect_locations[i][0],
//     rect_locations[i][1],
//     0x8A2BE2,
//     0x8A2BE2, 
//     150,      
//     150,      
//     20        
//   );

//   container.addChild(rect);
// }
// app.stage.addChild(container);

// function onRectButtonDown(event) {
//   const rect = event.target;
//   if (!rect.messageAdded) {
//     const messageText = new PIXI.Text("Project: 1", {
//       fontFamily: 'helvetica',
//       fontSize: 23,
//       stroke: 1,
//       fill: 'white',
//       align: 'center',
//     });
//     const localBounds = rect.getLocalBounds();
//     messageText.position.set(677, 600);
//     messageText.anchor.set(0.5);
//     rect.addChild(messageText);
//     rect.messageAdded = true;
//   }
// }

// function onRectButtonUp() {
//   console.log("Button Up!");
// }

// function onRectButtonOver() {
//   console.log("Button Over!");
// }

const style3= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 27,
  strokeThickness: 1,
  fill: 'white',
  stroke: 'white',
  strokeThickness: 1,
})
const myText3= new PIXI.Text("Contact:", style3);
myText3.x= 1200;
myText3.y= 550;
app.stage.addChild(myText3);

const style4= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 23,
  strokeThickness: 1,
  fill: '0x8A2BE2',
  stroke: '0x8A2BE2',
  strokeThickness: 1,
})
const myText4= new PIXI.Text("+91 7400390634", style4);
myText4.x= 1200;
myText4.y= 600;
app.stage.addChild(myText4);

const style5= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 23,
  strokeThickness: 1,
  fill: '0x8A2BE2',
  stroke: '0x8A2BE2',
  strokeThickness: 1,
})
const myText5= new PIXI.Text("nandana.raj1903@gmail.com", style5);
myText5.x= 1200;
myText5.y= 630;
app.stage.addChild(myText5);

const style6= new PIXI.TextStyle({
  fontFamily: 'Helvetica',
  fontSize: 19,
  strokeThickness: 1,
  fill: '0xFFFF00',
  stroke: '0x8A2BE2',
  strokeThickness: 1,
})
const myText6= new PIXI.Text("Drag the cursor on the Rectangle\n              to view Projects", style6);
myText6.x= 1000;
myText6.y= 420;
app.stage.addChild(myText6);

//var image1= PIXI.Sprite.fromImage('phoneicon-removebg-preview.png');
//image1.position.x= 1089;
// image1.position.y= 424;
// image1.width= 65;
// image1.height= 40;
// app.stage.addChild(image1);

// var image2= PIXI.Sprite.fromImage('mailiconpng.png');
// image2.position.x= 1093;
// image2.position.y= 485;
// image2.width= 57;
// image2.height=57;
// app.stage.addChild(image2);


const pointer= new Graphics();
pointer.beginFill(0xffffff)
.lineStyle(1, ' Black')
.drawCircle(0,0, 9)
.endFill();
app.stage.addChild(pointer);
pointer.position.set(app.screen.width / 2, app.screen.height / 2);
app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.on('mousemove', (event) => {
    pointer.position.set(event.data.global.x, event.data.global.y);
});
app.start();