var ecleaner = require('./cleanEmails')

var print = console.log

function validClinic(clinic) {
	if (!clinic.emails) {
		print('missing emails in ' + clinic.nombre)
		return false
	}
	let cleanemails = ecleaner.valid(clinic.emails)
	if (!cleanemails.valid) {
		print('error on email in ' + clinic.nombre + ': ( ' + cleanemails.error + ' ) ')
		return false
	}
	return true
}

module.exports = function (clinics) {
	for (var i = clinics.length - 1; i >= 0; i--) {
		if(!validClinic(clinics[i])){
			return false
		}
	}
	return true
}