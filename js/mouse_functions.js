//mouseover and mouseoff functions
		function showStuff(id) {
			var x = document.getElementById(id)
			x.style.display = 'block';
		}

		function hideStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'none';
		}

//Functions when clicking on buttons
		function borderRed(x, hide_thing){
				removeRed();
				x.className = 'red';
		}

		function borderNone(x, hide_thing){
				x.className ='none';
		}

		function removeRed(){
			var other_buttons=document.querySelectorAll('button.red');
			var i;
			var other_length_of = other_buttons.length
			for (i=0; i<other_length_of; i++) {
				other_buttons[i].className = 'none'
			}
		}

		function border(id){
			var x =document.getElementById(id);
			//to remove button in, Where do you want to go?
			var number_add = '2';
			var hide_thing = id.concat('', number_add);
			//action on initil click
			if (x.classList.contains('none')){
				borderRed(x, hide_thing);
			}
			//action on reclick
			else {
				borderNone(x, hide_thing);
			}
		}