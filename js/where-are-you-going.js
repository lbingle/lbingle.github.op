//Functions when clicking on Where do you want to go?
function showStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'block';
		}
		
function Going(id) {
	var x = document.getElementsByClassName("red");
	var y = document.getElementById(id);
	var a = 'Logan'
	var b = 'Bingle'
	var path_name = a.concat('-', b);
	//var num_red = x.length;
	document.getElementById('demo').innerHTML = path_name;
	if (num_red == 0) {
		window.alert('Where are you? Select location from the list above.');
	} else if (num_red == 1) {
	//Need way to determine route based on value of x
	//This should end with an image name that can be placed into showStuff(id)
	//Could name routes something like Be-Bu2 which would then coorespond to and image r1, r2, r3...
		showStuff('Be3');
	} else if (num_red > 1) {
		alert('Wow, you are in two places at once! Unless you are superhuman, I would suggest selecting one location.');
	}
	}