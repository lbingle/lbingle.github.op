//Functions when clicking on Where do you want to go?
function showStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'block';
		}
		
function message(num_red, id) {
	if (num_red == 0) {
		window.alert('Where are you? Select location from the list above.');
	} else if (num_red == 1) {
	//Need way to determine route based on value of x
	//This should end with an image name that can be placed into showStuff(id)
	//Could name routes something like Be-Bu2 which would then coorespond to and image r1, r2, r3...
		path(id);
	} else if (num_red > 1) {
		alert('Wow, you are in two places at once! Unless you are superhuman, I would suggest selecting one location.');
	}
}

function Going(id) {
	var x = document.getElementsByClassName("red");
	var num_red = x.length;
	message(num_red, id);
	}

//using value property to return option value assigned to element
function path(id) {
	var x = document.getElementsByClassName("red");
	var value_x = x[0].value;
	var str1 = 'images/';
	var path = str1.concat(id,'-', value_x,'.png');
	showStuff(path)
	alert(path)
}