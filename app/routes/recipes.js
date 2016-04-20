import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return [{id: 1, cuisine: "Japanese"},{id: 2, cuisine: "Italian"}, {id: 3, cuisine: "Korean"}];
		//.findBy('id', params.recipe_id);
	}
});
