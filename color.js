function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
    function setRandomColor() {
        // document.getElementById("box").style.color("background-color", getRandomColor());
        document.getElementById("box").style.background = getRandomColor();

}
