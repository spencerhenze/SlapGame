
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
    this.equipment = '';

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
    shield: new Item("Shield", 0.3),
    rocketLauncher: new Item("Rocket Launcher", 100)
}


//functions


function slap() {
    // iterate through the items array.
    for (var i = 0; i < mainPlayer.items.length; i++) {
        var currentItem = mainPlayer.items[i];
        if (currentItem.name == "Brass Knuckles") {
            mainPlayer.health -= (1 * mainPlayer.totalMods);
            mainPlayer.hits++;
            debugger
            update();
            return;
        }
    }

    mainPlayer.health--;
    mainPlayer.hits++;
    update();
}

function punch() {
    for (var i = 0; i < mainPlayer.items.length; i++) {
        var currentItem = mainPlayer.items[i];
        if (currentItem.name == "Brass Knuckles") {
            mainPlayer.health -= (5 * mainPlayer.totalMods);
            mainPlayer.hits++;
            update();
            return;
        }
    }
    mainPlayer.health -= 5;
    mainPlayer.hits++;
    update();
}

function kick() {
    for (var i = 0; i < mainPlayer.items.length; i++) {
        var currentItem = mainPlayer.items[i];
        if (currentItem.name == "Spiky Boots") {
            mainPlayer.health -= (10 * mainPlayer.totalMods);
            mainPlayer.hits++;
            update();
            return;
        }
    }
    mainPlayer.health -= 10;
    mainPlayer.hits++;
    update();
}

function annihilate() {
    for (var i = 0; i < mainPlayer.items.length; i++) {
        var currentItem = mainPlayer.items[i];
        if (currentItem.name == "Rocket Launcher") {
            mainPlayer.health -= (100 * mainPlayer.totalMods);
            mainPlayer.hits++;
            update();
            return;
        }
    }
    alert("Dang... You're cold as ice. \nIf you're sure about this you'll have to equip yourself with the rocket launcher.")
}

function addItem(item) {
    mainPlayer.equipment = item.name + ` (x ${item.modifier})`;
    mainPlayer.items.push(item);
    mainPlayer.getTotalModifier();
}

//modifier button actions
function brassKnuckles() {
    mainPlayer.items.pop();
    addItem(items.brassKnuckles);
    update();
}
function spikyBoots() {
    mainPlayer.items.pop();
    addItem(items.spikyBoots);
    update();
}
function rocketLauncher() {
    mainPlayer.items.pop();
    addItem(items.rocketLauncher);
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
    document.getElementById('mod-list').innerHTML = mainPlayer.equipment;

}

function newPlayer() {
    var playerName = prompt("Who do you want to beat up?")
    var playerImage = `<img class="target" src="https://robohash.org/${playerName}.png" alt="robot">`;

    var player1 = new Target(playerName, playerImage);
    return player1;
}

var mainPlayer = newPlayer();
update(); //this makes it so that you always start off with populated values