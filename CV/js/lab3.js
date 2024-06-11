let boldClicks = 0;
let italicClicks = 0;
let underlineClicks = 0;

    function toggleBold() {
        boldClicks++;
        if (boldClicks % 2 === 1) {
            document.getElementById("text-input").style.fontWeight = "bold";
        } else {
            document.getElementById("text-input").style.fontWeight = "normal";
        }
    }

    function toggleItalic() {
        italicClicks++;
        if (italicClicks % 2 === 1) {
            document.getElementById("text-input").style.fontStyle = "italic";
        } else {
            document.getElementById("text-input").style.fontStyle = "normal";
        }
    }

    function toggleUnderline() {
        underlineClicks++;
        if (underlineClicks % 2 === 1) {
            document.getElementById("text-input").style.textDecoration = "underline";
        } else {
            document.getElementById("text-input").style.textDecoration = "none";
        }
    }

    function alignLeft() {
        document.getElementById("text-input").style.textAlign = "left";
    }

    function alignCenter() {
        document.getElementById("text-input").style.textAlign = "center";
    }

    function alignRight() {
        document.getElementById("text-input").style.textAlign = "right";
    }

    function clearText() {
        document.getElementById("text-input").value = "";
    }

    // function animateText() {
    //     var text = document.getElementById("text-input");
    //     text.classList.add("animated-text");
    //     setTimeout(function() {
    //       text.classList.remove("animated-text");
    //     }, 5000); // Видаляємо клас після 5 секунд, щоб зупинити анімацію
    //   }
      function animateText() {
        var text = document.getElementById("text-input");
        if (text.classList.contains("animated-text")) {
            text.classList.remove("animated-text"); // Видаляємо клас, якщо вже існує
        } else {
            text.classList.add("animated-text"); // Додаємо клас, якщо його немає
            setTimeout(function() {
                text.classList.remove("animated-text");
            }, 5000); // Видаляємо клас після 5 секунд, щоб зупинити анімацію
        }
    }

    document.getElementById("font-size").addEventListener("change", function() {
        document.getElementById("text-input").style.fontSize = this.value;
    });

    document.getElementById("font-color").addEventListener("change", function() {
        document.getElementById("text-input").style.color = this.value;
    });
