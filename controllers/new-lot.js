Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('lot-name'),
      });

      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
