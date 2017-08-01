
function SlapController() {

    // Private


    //instantiate a SlapService object
    var slapService = new SlapService();

    function draw(health, progBar, image, name, hits, equip) {

        document.getElementById('health-bar').innerHTML = progBar;
        document.getElementById('target-image').innerHTML = image;
        document.getElementById('name').innerHTML = name;
        document.getElementById('hits').innerHTML = hits;
        document.getElementById('mod-list').innerHTML = equip;

    }


    // Public

    // Attack Functions
    this.slap = function slap() {
        slapService.slapRobot(draw);
    }

    this.punch = function punch() {
        slapService.punchRobot(draw);
    }

    this.kick = function kick() {
        slapService.kickRobot(draw);
    }

    this.annihilate = function annihilate() {
        slapService.annihilateRobot(draw);
    }


    function newPlayer() {
        slapService.newPlayer(draw);
    }


    // Item Functions
    this.brassKnuckles = function brassKnuckles() {
        slapService.brassKnuckles(draw);
    }

    this.spikyBoots = function spikyBoots() {
        slapService.spikyBoots(draw);
    }

    this.rocketLauncher = function rocketLauncher() {
        slapService.rocketLauncher(draw);
    }
    newPlayer();


}//end of Controller