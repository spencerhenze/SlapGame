var health = 100;
var name = '';
var hits = 0;

// var targetId = 1;

//constructors
function Target(name, image) {
    // this.targetId = targetId;
    this.name = name;
    this.image = image;
    this.health = 100;
    this.hits = 0;
    this.items = [];
    this.totalMods = 1;

    // targetID++;

    this.getTotalModifier = function () {
        for (var i = 0; i < this.items.length; i++) {
            var currentItem = this.items[i];
            this.totalMods += currentItem.modifier;
        }
        return this.totalMods;
    }
}

function Item(name, modifier) {
    this.name = name;
    this.modifier = modifier;
}

//create an object with the item names as keys. This makes accessing them easy.
var items = {
    brassKnuckles: new Item("Brass Knuckles", 4),
    spikyBoots: new Item("Spiky Boots", 3),
    shield: new Item("Shield", 0.3)
}


//functions


function slap() {
    mainPlayer.health -= (1*mainPlayer.totalMods);
    mainPlayer.hits++;
    update();
}

function punch() {
    mainPlayer.health -= (5*mainPlayer.totalMods);
    mainPlayer.hits++;
    update();
}

function kick() {
    mainPlayer.health -= (10*mainPlayer.totalMods);
    mainPlayer.hits++;
    update();
}

function annihilate() {
    mainPlayer.health = (4*mainPlayer.totalMods);
    mainPlayer.hits++;
    update();
}

function addItem(item){
    mainPlayer.items.push(item);
    mainPlayer.getTotalModifier();
}

//modifier button actions
function brassKnuckles(){
    addItem(items.brassKnuckles);
    update();
}

//this function will be responsible for updating the user interace whenver a value changes
function update() {
    if (mainPlayer.health < 0) {
        mainPlayer.health = 0;
    }

    document.getElementById('target-image').innerHTML = mainPlayer.image;
    document.getElementById('name').innerHTML = mainPlayer.name;
    document.getElementById('hits').innerHTML = mainPlayer.hits;
    document.getElementById('health').innerHTML = mainPlayer.health;

}

function newPlayer() {
    var playerName = prompt("Who do you want to beat up?")
    var playerImage = `<img class="target" src="https://robohash.org/${playerName}.png" alt="robot">`;

    var player1 = new Target(playerName, playerImage);
    return player1; 
}

var mainPlayer = newPlayer();
update(); //this makes it so that you always start off with populated values