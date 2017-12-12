//functions to show and hide elements
		function showStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'block';
		}

		function hideStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'none';
		}

//Functions to change border color
		function borderColor(x, color) {
			x.className = color;
		}

		function borderNone(x) {
			x.className ='none';
		}

//Function to hide Location buttons that are not selected
		function HideButtons(id, loc) {
			var loc_length = loc.length;
			var i;
			for (i=0; i < loc_length; i++){
					var array_id = loc[i];
					if(id != array_id) {
						hideStuff(array_id);
					}
				}
		}

		function ShowButtons(loc, value_y_hide) {
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
	var y = document.getElementsByClassName("red");
	var z = document.getElementsByClassName("green");
	var hide_thing = id.concat('2');
	var show_thing = id.concat('3');
	//var value_y = y[0].value;
	//var value_y_hide = value_y.substring(0,2);
	var loc = ['Be','Bu','MO','Ne','Ni','Pa'];
	if(x.classList.contains('none')){
		borderColor(x, 'red');
		showStuff(show_thing);
		hideStuff(hide_thing);
		HideButtons(id, loc)
	} else {
		borderNone(x);
		hideStuff(show_thing);
		showStuff(hide_thing);
		ShowButtons(loc, value_y_hide);
	}
}

//Function to use with Where are you going? buttons
function Going(id) {
	var x = document.getElementById(id);
	var y = document.getElementsByClassName("red");
	var z = document.getElementsByClassName("green")
	var id_base = id.substring(0, 2);
	var show_thing = id_base.concat('3');
	var loc = ['Be2','Bu2','MO2','Ne2','Ni2','Pa2'];
	var value_y = y[0].value;
	var value_y_base = value_y.substring(0,2);
	var value_y_hide = value_y_base.concat('2');
	var path_id = id.concat('-', value_y);

	if(x.classList.contains('none')){
		borderColor(x, 'green');
		showStuff(show_thing);
		HideButtons(id, loc);
		showStuff(path_id);
	} else {
		borderNone(x);
		hideStuff(show_thing);
		hideStuff(path_id);
		ShowButtons(loc, value_y_hide);
	}
	}

//Test functions using test button, results displayed in a pop up
function test() {
	var x = document.getElementsByClassName("red");
	alert(value_x_hide)
}