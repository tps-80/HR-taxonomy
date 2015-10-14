var HoneyMakerBee = function() {
 Bee.call(this);  //passes along the same this binding
 this.age = 10;
 this.job = 'make honey';
 this.honeyPot = 0;

};


HoneyMakerBee.prototype = Object.create(Bee.prototype); //this object holds the methods only for the HoneyMakerBee  - if we look for a method that Honeymaker doesn't have, it delegates to Bee  if we made HoneyMaker.prototype equal to Bee.prototype  a change in one would change the other
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot+=1;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot-=1;
}
