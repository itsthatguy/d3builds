'use strict';

var _ = require('lodash');

function BuildsService(DataService, $filter) {
  return {
    setBuild: function(data) {
      return this.build = data;
    },

    get: function(id) {
      var self = this;
      return DataService.get('builds/' + id).then(function(data){
        return self.setBuild(data);
      });
    },

    setSkill: function(type, id, name) {

      var foo = function(el) {
        if (el.id == id) {
          el.skill = name;
          el.rune = '';
        }

        return el;
      };

      _.map(this.build[type], foo);

      this.build[type]
    },

    setRune: function(id, name) {

      var foo = function(el) {
        if (el.id == id) {
          el.rune = '';
        }

        return el;
      }

      _.map(this.build.active, foo);

      this.build[type]
    }
  };
}

export default ['DataService', '$filter', BuildsService];

