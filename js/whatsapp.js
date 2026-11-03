function sendToWhatsapp(){
	// wa.me needs the number as digits only (no "+")
	let number = "254712350742";
	let website = 'https://www.cakeologyke.com/';
	let name = document.getElementById('name').value.trim();
	let message = document.getElementById('message').value.trim();

	if (!name || !message) {
		alert("Please enter your name and a message.");
		return;
	}

	let text = "Website : " + website + "\n\n"
	+ "Name : " + name + "\n"
	+ "Message : " + message;

	window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(text), '_blank');
}
