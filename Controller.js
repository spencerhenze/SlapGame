
function SlapController() {

    // Private

    //instantiate a SlapService object
    var slapService = new SlapService();



    // Public

    // Attack Functions
    this.slap = function slap() {
        slapService.slapRobot();
    }

    this.punch = function punch() {
        slapService.punchRobot();
    }

    this.kick = function kick() {
        slapService.kickRobot();
    }

    this.annihilate = function annihilate() {
        slapService.annihilateRobot();
    }


    function newPlayer() {
        slapService.newPlayer();
    }


    // Item Functions
    this.brassKnuckles = function brassKnuckles() {
        slapService.brassKnuckles();
    }

    this.spikyBoots = function spikyBoots() {
        slapService.spikyBoots();
    }

    this.rocketLauncher = function rocketLauncher() {
        slapService.rocketLauncher();
    }




}//end of Controller