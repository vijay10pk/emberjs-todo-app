import Ember from 'ember';
// import Cookies from 'js-cookie';

export default Ember.Service.extend({
  currentUser: null,
  store: Ember.inject.service(),
  login(user){
    this.set("currentUser", user)
    sessionStorage.setItem('userId', user.id)
  },
  logout(){
    this.set("currentUser", null)
    sessionStorage.removeItem('userId')
  },
  initializeFromCookie: function(){
    var userId = sessionStorage.getItem('userId');
    if(userId){
      var user = this.get('store').find('user', userId)
      this.set('currentUser', user)
    }
  }.on('init')
});
