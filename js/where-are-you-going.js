//Functions when clicking on Where do you want to go?

		function Going() {
			var x = document.getElementsByClassName("red");
			var num_red = x.length
			if (num_red == 0) {
				window.alert('Where are you? Select location from the list above.');
			} else if (num_red == 1) {
				//Function to determine route to display
				alert('Good');
			} else if (num_red > 1) {
				alert('Wow, you are in two places at once! Unless you are superhuman, I would suggest selecting one location.');
			}
		}