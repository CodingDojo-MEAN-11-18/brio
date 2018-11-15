	function Ninja(name) {
			this.name = name;
			this.health = 100;
			var speed = 3;
			var strength = 3;

			this.showStats = function() {
				console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
				return this;
			}
		}

		Ninja.prototype.sayName = function() {
			console.log("My ninja name is " + this.name);
			return this;
		}

		Ninja.prototype.drinkSake = function(){
			this.health += 10;
			return this;
		}

		const ninja1 = new Ninja("Hyabusa");
		ninja1.sayName();
		ninja1.showStats();


		const ninja2 = new Ninja("Goemon");
		ninja2.sayName();
		ninja2.drinkSake();
		//ninja2.drinkSake();
		ninja2.showStats();

