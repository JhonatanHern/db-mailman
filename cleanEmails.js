String.prototype.removeSpaces = function() {
	return this.split(' ').join('').split('\n').join('').split('\t').join('')
}

var regexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

module.exports = {
	clean:function(emails) {
		emails = emails
			.split(',')
			.map(e=>e.removeSpaces())
			.filter(e=>regexp.test(e))
			.join(',')
		return emails
	},
	valid:function(emails) {
		emails = emails.split(',').map(e=>e.removeSpaces())
		for (var i = emails.length - 1; i >= 0; i--) {
			if(!regexp.test(emails[i])){
				return {
					valid : false ,
					error : emails[i]
				}//endreturnobject
			}//endif
		}//endfor
		return { valid : true , cleanMails : emails }
	}//endfunction
}//endobject