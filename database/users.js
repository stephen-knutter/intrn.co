var knex = require('./config.js');

var query = {
  getAllUsers: function(){
    return knex('users');
  },

  addUser: function(profile, accessToken){
    return knex('users').insert({
      google_id: profile.id,
      token: accessToken,
      first_name: profile.name.givenName,
      last_name: profile.name.familyName,
      email: profile.email,
    }, "*")
  },

  getUserById: function(googleID){
    return knex('users').where('google_id', googleID)
  }
};

module.exports = query;
