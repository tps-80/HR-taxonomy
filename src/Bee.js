var Bee = function() {
  Grub.call(this);  //delegates the function of setting the Grub properties on the Bee object.   If we used the new keyword 
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  // this.prototype.constructor = Grub.prototype.constructor;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
