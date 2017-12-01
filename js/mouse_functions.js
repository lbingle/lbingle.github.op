//mouseover and mouseoff functions
		function showStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'block';
		}

		function hideStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'none';
		}

//Functions when clicking on Where are you? buttons
		function borderRed(x, hide_thing){
				x.className = 'red';
				hideStuff(hide_thing);
		}

		function borderNone(x, hide_thing){
				x.className ='none';
				showStuff(hide_thing);
		}

		function border(id){
			var x =document.getElementById(id);
			//to remove button in, Where do you want to go?
			var number_add = '2';
			var number_add2= '3';
			var hide_thing = id.concat('', number_add);
			var show_thing = id.concat('', number_add2);
			//action on initil click
			if (x.classList.contains('none')){
				borderRed(x, hide_thing);
				showStuff(show_thing);
			}
			//action on reclick
			else {
				borderNone(x, hide_thing);
				hideStuff(show_thing);
			}
		}