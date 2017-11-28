//mouseover and mouseoff functions
		function showStuff(id) {
			var x = document.getElementById(id)
			x.style.display = 'block';
		}

		function hideStuff(id) {
			var x = document.getElementById(id);
			x.style.display = 'none';
		}

		function border(id){
			var x =document.getElementById(id);
			x.style.borderColor = 'red';
		}