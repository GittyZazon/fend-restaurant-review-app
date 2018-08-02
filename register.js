navigator.serviceWorker.register('./sw.js')
.then(function(response) {
	console.log('Registration Complete');
}).catch(function(error) {
	console.log('Booooo!', error);
});
