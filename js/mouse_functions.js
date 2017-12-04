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

//Functions to use with Where are you going? buttons
//using value property to return option value assigned to element
function path(id) {
	var x = document.getElementsByClassName("red");
	var value_x = x[0].value;
	var path = id.concat('-', value_x);
	showStuff(path)
	//alert(path)
}

function message(num_red, id) {
	if (num_red == 0) {
		window.alert('Where are you? Select location from the list above.');
	} else if (num_red == 1) {
		path(id);
	} else if (num_red > 1) {
		alert('Wow, you are in two places at once! Unless you are superhuman, I would suggest selecting one location.');
	}
}

function goingHighlight(y, show_thing) {
	if(y.classList.contains('none')){
		showStuff(show_thing);
		y.className = 'green'
	} else {
		hideStuff(show_thing);
		y.className ='none';
	}
}

function Going(id) {
	var x = document.getElementsByClassName("red");
	var y = document.getElementById(id)
	var z = document.getElementsByClassName('green')
	var id_base = id.substring(0, 2);
	var show_thing = id_base.concat('3')
	var num_red = x.length;
	var num_green = z.length;
	goingHighlight(y, show_thing);
	message(num_red, id);
	}

function test(id) {
	x = id.substring(0, 2);
	y = x.concat('3')
	alert(y);
}