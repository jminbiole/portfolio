import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      classNames: ['back-to-top'],
      tagName: 'footer',

      time: 500,

      didInsertElement() {
        Ember.$(window).scroll(() => {
          if (Ember.$(window).scrollTop() > Ember.$(window).height() / 2) {
            this.$().fadeIn(this.time);
          } else {
            this.$().fadeOut(this.time);
          }
        });
      },

      toTop() {
        Ember.$(`html, body`).animate({ scrollTop: 0 }, this.time);
      },
      scrollToSkills() {
   Ember.$(`html, body`).animate({
     scrollTop: Ember.$(`#skills`).offset().top,
   }, 700);
  },
  }
});
