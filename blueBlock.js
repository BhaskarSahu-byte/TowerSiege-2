class BlueBlock {
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.2
      };
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.image = loadImage("cans/blueCan.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    };
    display() {
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    };
};