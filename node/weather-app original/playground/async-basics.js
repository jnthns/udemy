// Call Stack -> Node APIs -> Callback Queue -> Event Loop
// Section 4, Lecture 27

console.log('Starting app...')

// asynchronous callback that fires after 2000 ms
setTimeout(() => {
	console.log('Inside of callback');
}, 2000);

setTimeout(() => {
	console.log('Zero delay');
}, 0);

console.log('Finishing app.')