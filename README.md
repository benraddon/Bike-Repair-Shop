<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Bike repair shop</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link
href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Sunflower:wght@300&display=swap"
rel="stylesheet" />
<!-- This is Eric Meyer's css rest -->
<link rel="stylesheet" href="css-reset.css" />
<!-- This is my css -->
<link rel="stylesheet" href="style.css" />
</head>

<body>
<div class="container">
<header>
<!-- This is where the navbar goes, in the container, in the header -->
<div class="logo">
<a href="index.html"
><img src="images/logo-roar-bikes.png" alt="bikes logo"
/></a>
</div>

<nav>
<div class="navbutton">
<a href="#">Book Online</a>
<div class="dropdown">
<div class="navbutton"><a href="">Onsite Service</a></div>
<div class="navbutton"><a href="">Parts Delivery</a></div>
<div class="navbutton"><a href="">Request Callback</a></div>
</div>
</div>

<div class="navbutton"><a href="#">About</a></div>

<div class="navbutton"><a href="contact.html">Contact</a></div>
</nav>
</header>

<!-- This is in the main section HEROBOX1-->
<main>
<div class="herobox1">
<h1>Mobile Bike Repairs</h1>
<p>
Many people have problems with their bikes on a daily basis, <br />
if you are in the same situation, you've come to the right place. There is so
much we can help you with, we are the experts on bikes, from building them from
scratch to excellent repairs. Please contact us for all your bike repair needs.
</p>
<a href="testpage.html" class="mybutton">Book Online</a>
</div>

<!-- HEROBOX2 -->
<div class="herobox2">
<img src="images/image-bike-repair-service.jpg" alt="bike repair service" />
</div>
</main>

<div class="cards">
<div class="card1">
<a href="bookonline.html">
<h2>Book Online</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</a>
</div>

<div class="card2">
<a href="#">
<h2>Service Types</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</a>
</div>

<div class="card3">
<a href="#">
<h2>Call for Advice</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</a>
</div>
</div>
<div class="testimonials">
<div class="tbox">
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam consequuntur
magni nihil architecto impedit animi laudantium blanditiis, sit ad? Ullam dolor
laboriosam iste repellendus corrupti suscipit vel maiores voluptate?
</p>
<p>yes</p>
</div>

<div class="tbox">
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam consequuntur
magni nihil architecto impedit animi laudantium blanditiis, sit ad? Ullam dolor
laboriosam iste repellendus corrupti suscipit vel maiores voluptate?
</p>
<p>yes</p>
</div>

<div class="tbox">
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam consequuntur
magni nihil architecto impedit animi laudantium blanditiis, sit ad? Ullam dolor
laboriosam iste repellendus corrupti suscipit vel maiores voluptate?
</p>
<p>yes</p>
</div>

<div class="tbox">
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam consequuntur
magni nihil architecto impedit animi laudantium blanditiis, sit ad? Ullam dolor
laboriosam iste repellendus corrupti suscipit vel maiores voluptate?
</p>
<p>yes</p>
</div>

<div class="tbox">
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam consequuntur
magni nihil architecto impedit animi laudantium blanditiis, sit ad? Ullam dolor
laboriosam iste repellendus corrupti suscipit vel maiores voluptate?
</p>
<p>yes</p>
</div>
<div class="tbox">
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam consequuntur
magni nihil architecto impedit animi laudantium blanditiis, sit ad? Ullam dolor
laboriosam iste repellendus corrupti suscipit vel maiores voluptate?
</p>
<p>yes</p>
</div>
</div>
</div>

<script src="script.js"></script>
</body>
</html>








html {
  background-image: linear-gradient(rgb(116, 235, 103), rgb(15, 223, 15));
}

body {
  background-image: url(images/image-lion-background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Roboto", sans-serif;
  font-family: "Sunflower", sans-serif;
  color: white;
  font-size: 1.125rem;
}

.container {
  width: 1025px;
  /*background-color: darkgreen;*/

  min-height: 300px;
  margin-right: auto;
  margin-left: auto;
}
header {
  /*background-color: lightgreen;*/
  /*min-height: 100px;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px white solid;
}
.navbutton:hover {
  background-color: green;
}
.dropdown {
  display: none;
  position: absolute;
  z-index: 1;
  padding-top: 20px;
  text-align: center;
}
.navbutton:hover .dropdown {
  display: block;
}
.dropdown .navbutton {
  width: 120px;
  background-color: rgb(100, 222, 100);
  margin-right: 50px;
}
.dropdown .navbutton:hover {
  background-color: green;
}

main {
  /*background-color: rgb(120, 217, 133);*/
  min-height: 300px;
  display: flex;
  align-items: center;
}
.main2 {
  min-height: 300px;
  padding: 15px;
  font-size: 1.1rem;
}
.cards {
  /*background-color: aqua;*/
  /*min-height: 300px;*/
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.card1 {
  background-image: url(images/VideoCapture_20230928-151522\ 1.jpg);
  /*background-color: rgb(110, 110, 173);*/
  /*min-height: 300px;*/
  background-size: cover;
  background-position: bottom;
  min-height: 250px;
  width: 30%;
  /*border-radius: 15px;*/
}
.card2 {
  background-image: url(images/image-background-card2.jpg);
  /*background-color: rgb(110, 110, 173);*/
  /*min-height: 300px;*/
  background-size: cover;
  background-position: bottom;
  min-height: 250px;
  width: 30%;
  /*border-radius: 15px;*/
}
.card3 {
  background-image: url(images/image-background-card3.jpg);
  /*background-color: rgb(110, 110, 173);*/
  /*min-height: 300px;*/
  background-size: cover;
  background-position: bottom;
  min-height: 250px;
  width: 30%;
  /*border-radius: 15px;*/
}
.card1,
.card2,
.card3 {
  padding: 30px 30px 20px 30px;
  box-sizing: border-box;
  border-radius: 15px;
}

.herobox1 {
  /*ackground-color: yellow;*/
  flex: 2;
  padding-right: 100px;
}
.herobox2 {
  /*background-color: rgb(255, 187, 0);*/
  flex: 1;
}

.herobox2 img {
  border-radius: 15px;
}
h1 {
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0px 5px 3px black;
}
h2 {
  font-size: 2rem;
  margin-top: 100px;
}
p {
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
}
.cards p {
  font-size: 1.2rem;
  line-height: 1.7rem;
  padding-top: 30px;
}
.cards a:hover {
  color: green;
}
a {
  color: white;
  text-decoration: none;
}
.mybutton {
  background-color: white;
  color: rgb(0, 128, 0);
  padding: 11px 25px;
  display: inline-block;

  margin-top: 10px;
  margin-bottom: 30px;

  box-shadow: 5px 5px;
}
.mybutton:hover {
  background-color: rgb(72, 212, 72);
}
a.mybutton {
  display: inline-block;
}
nav a.mybutton {
  margin-left: 30px;

  color: rgb(136, 205, 136);
}
.navbutton {
  border: 2px solid white;
  padding: 11px 25px;
  margin-left: 10px;
  display: inline-block;
  position: relative;
}
.testimonials {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;
}
.tbox:hover {
  background-color: green;
}
.tbox {
  width: 48%;
  padding: 50px;
  border: 1px solid;
  box-sizing: border-box;
  margin-top: 50px;
}
.tbox :last-child {
  font-size: 0.8rem;
  padding-left: 30px;
}

.inputwrapper {
  margin: 20px 10px 20px 0px;
  font-size: 1rem;
}



const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById('visaButton');
const masterButton = document.getElementById('masterButton');
const payPalButton = document.getElementById('payPalButton');
const mySubmit = document.getElementById('mySubmit');
const submitResult = document.getElementById('submitResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function () {
if (myCheckBox.checked) {
submitResult.textContent = `You are subscribed`;
console.log('You are subscribed');
} else {
submitResult.textContent = `You are not subscribed`;
console.log('You are not subscribed');
}
if (visaButton.checked) {
paymentResult.textContent = `You are paying with Visa`;
console.log('You are paying with Visa');
} else if (masterButton.checked) {
paymentResult.textContent = `You are paying with MasterCard`;
console.log('You are paying with MasterCard');
} else if (payPalButton.checked) {
paymentResult.textContent = `You are paying with PayPal`;
console.log('You are paying with PayPal');
} else {
paymentResult.textContent = `Please select a payment option`;
console.log('Please select a payment option');
}
};
