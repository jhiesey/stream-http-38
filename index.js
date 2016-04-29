var http = require('http')

document.querySelector('#button').addEventListener('click', function () {
	http.get('http://example.com').on('error', function (err) {
		console.error('CAUGHT ERROR:', err)
	})
})
