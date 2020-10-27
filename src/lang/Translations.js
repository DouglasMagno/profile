import { Settings } from 'luxon';
const translate = (key) => {

	// this.lang = lang;
	// this.defaultLang = Settings.defaultLocale;
	// Settings.defaultLocale = lang;
	const lang = 'en';
	try {
		const m = require('./' + lang + '.js');
		var messages = require('./'+lang+'.js');
		// do stuff
	} catch (ex) {
		messages = require('./pt-br.js');
	}

	if (messages.default[key] !== undefined) {

		return messages.default[key];

	}else{

		return key;

	}

}

export default translate;
