
function SlapService() {
    var mainPlayer = null;

    function Target(name, image) {
        this.name = name;
        this.image = image;
        this.health = 100;
        this.hits = 0;
        this.items = [];
        this.totalMods = 0.00000000000000000001;
        this.equipment = '';


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
        mainPlayer.equipment = item.name + ` (x ${item.modifier}) for applicable attacks`;
        mainPlayer.items.push(item);
        mainPlayer.getTotalModifier();
    }




    function updateProgressBar() {
        var barColor = '';
        if (mainPlayer.health > 30) {
            barColor = 'progress-bar-success';
        }
        if (mainPlayer.health <= 30 && mainPlayer.health > 20) {
            barColor = 'progress-bar-warning';
        }
        if (mainPlayer.health <= 20) {
            barColor = 'progress-bar-danger';
        }

        var template = `
            <div class="progress-bar health-bar-general ${barColor}" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ${mainPlayer.health}%;">
                ${mainPlayer.health}%
            </div>
        `
        return template;
    }

    //this function will be responsible for updating the user interace whenver a value changes
    function update() {
        if (mainPlayer.health < 0) {
            mainPlayer.health = 0;
        }

    }




    //Public
    // Process to make a player
    this.newPlayer = function newPlayer(cb) {
        var playerName = prompt("Who do you want to beat up?")
        var playerImage = `<img class="target" src="https://robohash.org/${playerName}.png" alt="robot">`;

        mainPlayer = new Target(playerName, playerImage);
        cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);
    }


    this.slapRobot = function slapRobot(cb) {
        // iterate through the items array.
        for (var i = 0; i < mainPlayer.items.length; i++) {
            var currentItem = mainPlayer.items[i];
            if (currentItem.name == "Brass Knuckles") {
                mainPlayer.health -= (1 * mainPlayer.totalMods);
                mainPlayer.hits++;
                update();
                cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);
            }
        }

        mainPlayer.health--;
        mainPlayer.hits++;
        update();
        cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);

    }

    this.punchRobot = function punchRobot(cb) {
        for (var i = 0; i < mainPlayer.items.length; i++) {
            var currentItem = mainPlayer.items[i];
            if (currentItem.name == "Brass Knuckles") {
                mainPlayer.health -= (5 * mainPlayer.totalMods);
                mainPlayer.hits++;
                update();
                cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);
            }
        }
        mainPlayer.health -= 5;
        mainPlayer.hits++;
        update();
        cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);

    }

    this.kickRobot = function kickRobot(cb) {
        for (var i = 0; i < mainPlayer.items.length; i++) {
            var currentItem = mainPlayer.items[i];
            if (currentItem.name == "Spiky Boots") {
                mainPlayer.health -= (10 * mainPlayer.totalMods);
                mainPlayer.hits++;
                update();
                cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);
            }
        }
        mainPlayer.health -= 10;
        mainPlayer.hits++;
        update();
        cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);
    }

    this.annihilateRobot = function annihilateRobot(cb) {
        for (var i = 0; i < mainPlayer.items.length; i++) {
            var currentItem = mainPlayer.items[i];
            if (currentItem.name == "Rocket Launcher") {
                mainPlayer.health -= (100 * mainPlayer.totalMods);
                mainPlayer.hits++;
                update();
                cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);
            }
        }
        alert("Dang... You're cold as ice. \nIf you're sure about this you'll have to equip yourself with the rocket launcher.")
    }



    //modifier button actions
    this.brassKnuckles = function brassKnuckles(cb) {
        clearItem();
        addItem(items.brassKnuckles);
        update();
        cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);

    }

    this.spikyBoots = function spikyBoots(cb) {
        clearItem();
        addItem(items.spikyBoots);
        update();
        cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);

    }

    this.rocketLauncher = function rocketLauncher(cb) {
        clearItem();
        addItem(items.rocketLauncher);
        update();
        cb(mainPlayer.health, updateProgressBar(), mainPlayer.image, mainPlayer.name, mainPlayer.hits, mainPlayer.equipment);

    }

    // update();

} // end service constructor
