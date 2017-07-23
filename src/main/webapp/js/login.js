function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	var id_token = googleUser.getAuthResponse().id_token;
	/*console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	var xhr = new XMLHttpRequest();
	xhr.open('GET', window.location.href + 'views/signedIn.html');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function() {
	  console.log('Signed in as: ' + xhr.responseText);
	};
	console.log('idtoken=' + id_token);
	xhr.send('idtoken=' + id_token);*/
	window.location.replace(window.location.href + 'views/home.html');

}