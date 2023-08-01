const pDiv = document.getElementById("p-div");
const pButton = document.getElementById("p-button");

const imgDiv = document.getElementById("img-div");
const imgButton = document.getElementById("img-button");

const nothingButton = document.getElementById("nothing-button");
const blankDiv = document.createElement("div");
blankDiv.style["display"] = "none";
document.body.appendChild(blankDiv);

const pCountElem = document.getElementById("p-count");
const imgCountElem = document.getElementById("img-count");
const nothingCountElem = document.getElementById("nothing-count");

let pCount = 0;
let imgCount = 0;
let nothingCount = 0;

pButton.addEventListener("click", event => {
	pDiv.style["display"] = "block";
	imgDiv.style["display"] = "none";
	blankDiv.style["display"] = "none";

	const p = document.createElement("p");
	const content = document.createTextNode("(╯°□°）╯︵ ┻━┻");
	p.style["text-align"] = "center";
	p.append(content);
	pDiv.appendChild(p);

	pCountElem.innerText = "pCount: " + (++pCount);
});

imgButton.addEventListener("click", event => {
	imgDiv.style["display"] = "block";
	pDiv.style["display"] = "none";
	blankDiv.style["display"] = "none";

	const image = document.createElement("img");
	image.src = "assets/cat.png";
	image.style["width"] = "25%";
	image.style["height"] = "25%";
	imgDiv.appendChild(image);

	imgCountElem.innerText = "imgCount: " + (++imgCount);
});

nothingButton.addEventListener("click", event => {
	imgDiv.style["display"] = "none";
	pDiv.style["display"] = "none";
	blankDiv.style["display"] = "block";

	nothingCountElem.innerText = "nothingCount: " + (++nothingCount);
});
