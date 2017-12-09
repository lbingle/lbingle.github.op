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
		}

		function borderNone(x, hide_thing){
				x.className ='none';
		}

//Function to decide to turn highlighting on or off

		function RedBorderOnOff(x, hide_thing, show_thing, id){
			if(x.classList.contains('none')){
				borderRed(x, hide_thing);
				showStuff(show_thing);
				hideStuff(hide_thing);
				HideLocations(id)
			} else {
				borderNone(x, hide_thing);
				hideStuff(show_thing);
				showStuff(hide_thing);
				ShowLocations();
			}
		}

//Function to hide Location buttons that are not selected
		function HideLocations(id) {
			loc = ['Be','Bu','MO','Ne','Ni','Pa'];
			var loc_length = loc.length;
			var i;
			for (i=0; i < loc_length; i++){
					var array_id = loc[i];
					if(id != array_id) {
						hideStuff(array_id);
					}
				}
		}

		function ShowLocations() {
			loc = ['Be','Bu','MO','Ne','Ni','Pa'];
			var loc_length = loc.length;
			var i;
			for (i=0; i < loc_length; i++){
					var array_id = loc[i];
					showStuff(array_id);
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
			RedBorderOnOff(x, hide_thing, show_thing, id);
		}

//Functions to use with Where are you going? buttons
//using value property to return option value assigned to element

//Function to hide and show Destination buttons that are not selected
function HideDestination(id) {
	loc = ['Be2','Bu2','MO2','Ne2','Ni2','Pa2'];
	var loc_length = loc.length;
	var i;
	for (i=0; i < loc_length; i++){
		var array_id = loc[i];
		if(id != array_id) {
		hideStuff(array_id);
		}
	}
}

function ShowDestination() {
	loc = ['Be2','Bu2','MO2','Ne2','Ni2','Pa2'];
	var loc_length = loc.length;
	var i;
	for (i=0; i < loc_length; i++){
		var array_id = loc[i];
		showStuff(array_id);
	}
}

function path(id, x) {
	var value_x = x[0].value;
	var path = id.concat('-', value_x);
	showStuff(path);
}

function pathHide(id, x) {
	var value_x = x[0].value;
	var path = id.concat('-', value_x);
	hideStuff(path);
}

function borderGreen(y) {
	y.className = 'green';
}

function borderNoneG(y) {
	y.className ='none';
}


function GreenBorderOnOff(x, y, show_thing, id) {
	if(y.classList.contains('none')){
		borderGreen(y);
		showStuff(show_thing);
		HideDestination(id);
		path(id, x);
	} else {
		borderNoneG(y);
		hideStuff(show_thing);
		ShowDestination();
		pathHide(id, x);
	}
}

function Going(id) {
	var x = document.getElementsByClassName("red");
	var y = document.getElementById(id)
	var id_base = id.substring(0, 2);
	var show_thing = id_base.concat('3')
	GreenBorderOnOff(x, y, show_thing, id);
	}