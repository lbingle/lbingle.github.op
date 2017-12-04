//Branch test text
//functions to show and hide location highlighting
		function showStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'block';
		}

		function hideStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'none';
		}

//Functions to show and hide button highlighting
		function borderRed(x, hide_thing){
				x.className = 'red';
				hideStuff(hide_thing);
		}

		function borderNone(x, hide_thing){
				x.className ='none';
				showStuff(hide_thing);
		}

//Function to decide to turn highlighting on or off

		function borderOnOff(x, hide_thing, show_thing){
			if(x.classList.contains('none')){
				borderRed(x, hide_thing);
				showStuff(show_thing);
			} else {
				borderNone(x, hide_thing);
				hideStuff(show_thing);
			}
		}

//Function to use with Where are you? buttons
		function border(id){
			var x =document.getElementById(id);
			//to remove button in, Where do you want to go?
			var number_add = '2';
			var number_add2= '3';
			var hide_thing = id.concat('', number_add);
			var show_thing = id.concat('', number_add2);
			borderOnOff(x, hide_thing, show_thing);
		}