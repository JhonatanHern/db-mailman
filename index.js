/**
 * for clinic in clinics
 *   if( clinic.date && clinic.updated )
 *       clinic.sendAdvice()
 *   else
 *       ignoreClinic()
*/

var fateDate = {
	year : '2118',
	month : '2'
}

var debug = true // only for debugging

var validClinics = require('./validateClinics')
	nodemailer = require('nodemailer'),//mail npm module
	ecleaner = require('./cleanEmails'),//discard the bad emails
	html   = require('./html'),//HTML template for a mail
	db   = require('./databasequerie')//database handler

var transporter = nodemailer.createTransport({//credentials and stuff
	service: 'gmail',
	auth: {
		user: 'sistemas.serofca@gmail.com',
		pass: 'XXXXXXXXXXXXXXXXXXX'
	}
})

var print = console.log // I like python, so, this is a shorthand.

db(function(error,clinics,fields) {//query to the database SELECT * FROM clinicas;
	/*in case of error*/
	if (error) {//error
		print('error')
		throw error
	}
	clinics = clinics.filter(e=>{ // discard the outdated ones
		if(e['prox_visita']){
			let d = e['prox_visita']
			return  String( d.getFullYear( )    ) === fateDate.year &&
					String( d.getUTCMonth( ) + 1) === fateDate.month
		}else{
			return false
		}
	})
	if (debug) {
		print('updated clinics')
		print(clinics)
	}
	let validation = validClinics(clinics)
	if(validation){
		clinics.forEach(sendMailToClinic)
	}else{
		print('fail')
	}
})

function sendMailToClinic(clinic) {
	var mailOptions = {
		from: 'sistemas.serofca@gmail.com',
		to: ecleaner.clean(clinic.emails),
		subject: 'SEROFCA (Notificación de visita)',
		html: ( html( clinic[ 'prox_visita' ] ) ) // html body
	}
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			print( 'Error at' + clinic.nombre )
		} else {
			print( 'Sent to ' + clinic.nombre + ' ( ' + info.response + ' ) ' )
		}
	})
}