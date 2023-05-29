onEvent("slider", "change", function(event) {
  for (var z = 1; z < getNumber("slider"); z++) {
    penUp();
    moveTo(155, 250);
    penDown();
    penRGB(randomNumber (0, 255), randomNumber(0, 255), randomNumber(0, 255));
    penWidth(1);
    arcLeft(60, z);
    arcLeft(0, z);
    hide();
    turnRight(40);
  }
});
