
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'FoundryVTT-dnd35e-de',
			lang: 'de',
			dir: 'compendium'
		});
	}

});
