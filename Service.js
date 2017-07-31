
function SlapService() {

    // var targetId = 1;
    function Target(name, image) {
        // this.targetId = targetId;
        this.name = name;
        this.image = image;
        this.health = 100;
        this.hits = 0;
        this.items = [];
        this.totalMods = 0.00000000000000000001;
        this.equipment = '';

        // targetID++;

        this.getTotalModifier = function () {
            if (this.items.length != 0) {
                for (var i = 0; i < this.items.length; i++) {
                    var currentItem = this.items[i];
                    this.totalMods += currentItem.modifier;
                }
            }
            // return this.totalMods;
            else {
                this.totalMods = 0.00000000000000000001;
            }
        }
    }

    //blueprint for making Items
    function Item(name, modifier) {
        this.name = name;
        this.modifier = modifier;
    }

    // Items dictionary:
    //create an object with the item names as keys. This makes accessing them easy.
    var items = {
        brassKnuckles: new Item("Brass Knuckles", 4),
        spikyBoots: new Item("Spiky Boots", 3),
        shield: new Item("Shield", 0.3),
        rocketLauncher: new Item("Rocket Launcher", 100)
    }

    function clearItem() {
        mainPlayer.items.pop();
        mainPlayer.getTotalModifier();
    }

    function addItem(item) {
        mainPlayer.equipment = item.name + ` (x ${item.modifier})`;
        mainPlayer.items.push(item);
        mainPlayer.getTotalModifier();
    }



    // Process to make a player
    function newPlayer() {
        var playerName = prompt("Who do you want to beat up?")
        var playerImage = `<img class="target" src="https://robohash.org/${playerName}.png" alt="robot">`;

        var player = new Target(playerName, playerImage);
        return player;

    }

    //Make the mainPlayer object
    var mainPlayer = newPlayer();

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




    //Public

    this.slapRobot = function slapRobot() {
        // iterate through the items array.
        for (var i = 0; i < mainPlayer.items.length; i++) {
            var currentItem = mainPlayer.items[i];
            if (currentItem.name == "Brass Knuckles") {
                mainPlayer.health -= (1 * mainPlayer.totalMods);
                mainPlayer.hits++;
                update();
                return;
            }
        }

        mainPlayer.health--;
        mainPlayer.hits++;
        update();
    }

    this.punchRobot = function punchRobot() {
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

    this.kickRobot = function kickRobot() {
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

    this.annihilateRobot = function annihilateRobot() {
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



    //modifier button actions
    this.brassKnuckles = function brassKnuckles() {
        clearItem();
        addItem(items.brassKnuckles);
        update();
    }

    this.spikyBoots = function spikyBoots() {
        clearItem();
        addItem(items.spikyBoots);
        update();
    }

    this.rocketLauncher = function rocketLauncher() {
        clearItem();
        addItem(items.rocketLauncher);
        update();
    }

    update();

} // end service constructor
