var darkTheme = false;
document.querySelector(".theme").addEventListener("click", function () {
  darkTheme = !darkTheme;
  if (darkTheme) {
    document.body.style.background = "black";
    var elements = document.querySelectorAll("div, h1");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "white";
    }
  } else {
    document.body.style.background =
      "linear-gradient(112deg, #FFE500 0%, #FFA800 100%)";
    var elements = document.querySelectorAll("div, h1");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }
  }
});

document.querySelector('.next').addEventListener('click', function() {
    // Convert the categories object to an array of keys (category names)
    var categoryNames = Object.keys(categories);

    // Pick a random category
    var category = categories[categoryNames[Math.floor(Math.random() * categoryNames.length)]];

    // Pick a random word from the chosen category
    var word = category[Math.floor(Math.random() * category.length)];

    // Display the word (or do something else with it)
    console.log(word);
});