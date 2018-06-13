// Enemies our player must avoid
var Enemy = function(vertical) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    
    //Each enemy has an X and Y coordinate and a speed
    this.y = vertical;
    this.reset();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //console.log(dt);
    if (this.x <= 550){
        this.x = this.x + (dt*this.speed);
    } else{
        this.reset();
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    //console.log(`drawing enemy at ${this.x} , ${this.y}`)
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function(){
    this.x = -100;
    this.speed = Math.floor((Math.random() * 600) + 200);
    //console.log(`setting enemy at ${this.x}, ${this.y}, speed = ${this.speed}`);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';

    //The player has positional coordinates as well
    this.reset();
};

Player.prototype.update = function(){

};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //console.log(`moving player to x = ${this.x}, ${this.y}`);
};

Player.prototype.handleInput = function(keyName){
    switch(keyName) {
        case 'up':
            this.y = Math.max((this.y - 80), -40);
            break;
        case 'down':
            this.y = Math.min((this.y + 80), 360);
            break;
        case 'left':
            this.x = Math.max((this.x - 100), 0);
            break;
        case 'right':
            this.x = Math.min((this.x + 100), 400);
            break;
        default:
            console.error("invalid input");
    }
};

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 360;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(40), new Enemy(120), new Enemy(200)];
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
