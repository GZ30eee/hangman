comments = function () {
  if (lives >= 7) {
    showLives.innerHTML = "You have <span style='color:green'>" + lives + "</span> lives";
  } else if (lives >= 4) {
    showLives.innerHTML = "You have <span style='color:orange'>" + lives + "</span> lives";
  } else if (lives >= 1) {
    showLives.innerHTML = "You have <span style='color:red'>" + lives + "</span> lives";
  } else {
    showLives.innerHTML = "<span style='color:red'>G A M E O V E R</span>";
  }
  
  for (var i = 0; i < geusses.length; i++){
    if (counter + space === geusses.length){
      showLives.innerHTML = "<span style='color:green'>Y O U W I N !</span>";
    }
  }
}



comments = function () {
  // Check if the user has correctly guessed all the letters in the word
  var correctlyGuessed = true;
  for (var i = 0; i < geusses.length; i++) {
    if (geusses[i].innerHTML === "_") {
      correctlyGuessed = false;
      break;
    }
  }

  

  if (correctlyGuessed) {
    showLives.innerHTML = "<span style='color:green'>Y O U W I N !</span>";
  } else if (lives >= 7) {
    showLives.innerHTML = "You have <span style='color:green'>" + lives + "</span> lives";
  } else if (lives >= 4) {
    showLives.innerHTML = "You have <span style='color:orange'>" + lives + "</span> lives";
  } else if (lives >= 1) {
    showLives.innerHTML = "You have <span style='color:red'>" + lives + "</span> lives";
  } else {
    showLives.innerHTML = "<span style='color:red'>G A M E O V E R</span>";
  }
}


var lightBlueElements = document.querySelectorAll("#light-blue line");
    var redElements = document.querySelectorAll("#red line");
    var blueElements = document.querySelectorAll("#blue line");

    // Loop through all the elements and change their stroke color
    for (var i = 0; i < lightBlueElements.length; i++) {
      lightBlueElements[i].style.stroke = "orange";
    }
    for (var i = 0; i < redElements.length; i++) {
      redElements[i].style.stroke = "green";
    }
    for (var i = 0; i < blueElements.length; i++) {
      blueElements[i].style.stroke = "purple";
    }




// Define the themes
var themes = [
  // Default theme
  {
    headColor: "black",
    scoreDisplayColor: "black",
    categoryNameColor: "black",
    holdBackgroundColor: "white",
    myLivesColor: "black",
    clueColor: "black",
    stickmanBorderColor: "black",
    hintButtonBackgroundColor: "white",
    resetButtonBackgroundColor: "white",
    nextButtonBackgroundColor: "white"
  },
  // Monochromatic theme 1
  {
    headColor: "blue",
    scoreDisplayColor: "blue",
    buttonsBackgroundColor: "lightblue",
    categoryNameColor: "blue",
    holdBackgroundColor: "lightblue",
    myLivesColor: "blue",
    clueColor: "blue",
    stickmanBorderColor: "blue",
    hintButtonBackgroundColor: "lightblue",
    resetButtonBackgroundColor: "lightblue",
    nextButtonBackgroundColor: "lightblue"
  },
  // Monochromatic theme 2
  {
    headColor: "red",
    scoreDisplayColor: "red",
    buttonsBackgroundColor: "pink",
    categoryNameColor: "red",
    holdBackgroundColor: "pink",
    myLivesColor: "red",
    clueColor: "red",
    stickmanBorderColor: "red",
    hintButtonBackgroundColor: "pink",
    resetButtonBackgroundColor: "pink",
    nextButtonBackgroundColor: "pink"
  }
];

// Keep track of the current theme
var currentTheme = 0;

// Get the theme button element
var themeButton = document.getElementById("theme-button");

// Add an event listener to the theme button
themeButton.addEventListener("click", function() {
  // Update the current theme
  currentTheme = (currentTheme + 1) % themes.length;

  // Get the current theme
  var theme = themes[currentTheme];

  // Get all the elements that need to be updated
  var headElement = document.getElementById("head");
  var scoreDisplayElement = document.getElementById("scoreDisplay");
  var buttonsElement = document.getElementById("buttons");
  var categoryNameElement = document.getElementById("catagoryName");
  var holdElement = document.getElementById("hold");
  var myLivesElement = document.getElementById("mylives");
  var clueElement = document.getElementById("clue");
  var stickmanElement = document.getElementById("stickman");
  var hintButton = document.getElementById("hint");
  var resetButton = document.getElementById("reset");
  var nextButton = document.getElementById("next");

  // Update the styles of the elements
  headElement.style.color = theme.headColor;
  scoreDisplayElement.style.color = theme.scoreDisplayColor;
  buttonsElement.style.backgroundColor = theme.buttonsBackgroundColor;
  categoryNameElement.style.color = theme.categoryNameColor;
  holdElement.style.backgroundColor = theme.holdBackgroundColor;
  myLivesElement.style.color = theme.myLivesColor;
  clueElement.style.color = theme.clueColor;
  stickmanElement.style.borderColor = theme.stickmanBorderColor;
  hintButton.style.backgroundColor = theme.hintButtonBackgroundColor;
  resetButton.style.backgroundColor = theme.resetButtonBackgroundColor;
  nextButton.style.backgroundColor = theme.nextButtonBackgroundColor;
});



// Get the "Next" button from the page
var nextButton = document.getElementById("next");

// Add an event listener to the "Next" button
nextButton.addEventListener("click", function() {
  // Randomly select a new category and word
    // Clear the hint display
    
    showClue.innerHTML = "";
  chosenCategory = categories[Math.floor(Math.random() * categories.length)];
  word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
  word = word.replace(/\s/g, "-");
  console.log(word);
  resetAlphabetButtons();
  // Reset the game state
  geusses = [ ];
  lives = 10;
  counter = 0;
  space = 0;
  
  // Update the game display
  result();
  comments();
  selectCat();
  canvas();
});


// Select Catagory
var selectCat = function() {
    if(chosenCategory === categories[0]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:blue'>Premier League Football Teams</span>";
    }
    else if(chosenCategory === categories[1]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:tomato'>HOLLYWOOD</span>";
    }
    else if(chosenCategory === categories[2]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:teal'>CITIES</span>";
      }
      else if(chosenCategory === categories[3]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:orange'>BIRDS</span>";
      }
      else if(chosenCategory === categories[4]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:mediumblue'>ANIMALS</span>";
      }
      else if(chosenCategory === categories[5]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:orchid'>SEA ANIMALS</span>";
      }
      else if(chosenCategory === categories[6]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:yellowgreen'>TELEVISION SERIES</span>";
      }
      else if(chosenCategory === categories[7]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:violet'>BOLLYWOOD</span>";
      }
      else if(chosenCategory === categories[8]){
        catagoryName.innerHTML = "Chosen Category Is <span style='color:yellow'>COMPANIES</span>";
      }
  }



  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("select-button");

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      var categorySelect = document.getElementById("category-select");
      chosenCategory = categorySelect.value;
      selectCat();
      modal.style.display = "none";
      document.getElementById("game").style.display = "block";
  }

  // Show the modal when the page is loaded
  
      modal.style.display = "block";



      var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("select-button");

// When the user clicks on the button, open the modal
btn.onclick = function() {
	var categorySelect = document.getElementById("category-select");
	chosenCategory = categorySelect.value;
	selectCat();
	modal.style.display = "none";
	document.getElementById("game").style.display = "block";
}

// Show the modal when the page is loaded
modal.style.display = "block";


// Select Catagory
var selectCat = function()
{
if(chosenCategory === categories[0]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:blue'>FOOTBALL TEAMS</span>";
}
else if(chosenCategory === categories[1]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:tomato'>HOLLYWOOD</span>";
}
else if(chosenCategory === categories[2]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:teal'>CITIES</span>";
  }
  else if(chosenCategory === categories[3]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:orange'>BIRDS</span>";
  }
  else if(chosenCategory === categories[4]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:mediumblue'>ANIMALS</span>";
  }
  else if(chosenCategory === categories[5]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:orchid'>SEA ANIMALS</span>";
  }
  else if(chosenCategory === categories[6]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:yellowgreen'>TELEVISION SERIES</span>";
  }
  else if(chosenCategory === categories[7]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:violet'>BOLLYWOOD</span>";
  }
  else if(chosenCategory === categories[8]){
    catagoryName.innerHTML = "Chosen Category Is <span style='color:yellow'>COMPANIES</span>";
  }
}

<div class="select-wrapper">
		  <select id="category-select">
			<option value="FOOTBALL TEAMS">FOOTBALL TEAMS</option>
			<option value="HOLLYWOOD">HOLLYWOOD</option>
			<option value="CITIES">CITIES</option>
			<option value="BIRDS">BIRDS</option>
			<option value="ANIMALS">ANIMALS</option>
			<option value="SEA ANIMALS">SEA ANIMALS</option>
			<option value="TELEVISION SERIES">TELEVISION SERIES</option>
			<option value="BOLLYWOOD">BOLLYWOOD</option>
			<option value="COMPANIES">COMPANIES</option>
		  </select>
		  
		  <button id="select-button">Select</button>
		</div>


<div id="myModal" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
		  <div class="modal-header">H A N G M A N</div>
		  <div class="modal-subheader">- welcome to the game-</div>
		  <button id="playButton">Play</button>

		</div>
	  </div>

	