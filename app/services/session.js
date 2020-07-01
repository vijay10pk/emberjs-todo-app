import Ember from 'ember';
// import Cookies from 'js-cookie';

export default Ember.Service.extend({
    currentUser: null,
    store: Ember.inject.service(),
  login(user){
    this.set('currentUser', user)
    // document.cookie.set('userId', user.id)
    document.cookie = "userId=" + user.id;
  },
  logout(){
    this.set('currentUser', null)
    // document.cookie.remove('userId')
    document.cookie ="userId=; expires=new Date().toUTCString()"
  },
 /*  initializeFromCookie: function(){
    var userId = window.Cookies.get('userId');
    if(userId){
      var user = this.get('store').find('user', userId)
      this.set('currentUser', user)
    }
  }.on('init') */
  // initializeFromCookie: function(){ 
  //   let userId = document.cookie.get('userId');
  //   if(userId){
  //     var user = this.get('store').find('user', userId)
  //     this.set('currentUser', user)
  //   }
  // }.on("init")
  
});
