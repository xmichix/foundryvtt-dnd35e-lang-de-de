
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'dnd35e-de-DE',
			lang: 'de',
			dir: 'compendium'
		});
	}

});
