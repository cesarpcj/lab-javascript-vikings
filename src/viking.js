// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;

    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;

    }

    receiveDamage(damage){
        this.health -=damage;
        if(this.health <= 0){
            return  this.name +" has died in act of combat";
        }else{
            return  this.name +" has received " + damage +" points of damage";
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -=damage;
         
        if(this.health <= 0){
            return  'A Saxon has died in combat';
        }else{
            return  `A Saxon has received ${damage} points of damage`;
        }
        
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        const randonSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randonViking = Math.floor(Math.random() * this.vikingArmy.length);
        
        const attack = this.saxonArmy[randonSaxon].receiveDamage(this.vikingArmy[randonViking].strength);
        if(this.saxonArmy[randonSaxon].health < 1){
            this.saxonArmy.splice(randonSaxon, 1);
        }

        return attack;
    }
    saxonAttack(){
        const randonSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randonViking = Math.floor(Math.random() * this.vikingArmy.length);
        const attack = this.vikingArmy[randonViking].receiveDamage(this.saxonArmy[randonSaxon].strength);
        if(this.vikingArmy[randonViking].health < 1){
            this.vikingArmy.splice(randonSaxon, 1);
        }

        return attack;

    }
    showStatus(){

    }
}



