'use strict';

var _ = require('lodash');

function BuildsService(DataService, $filter) {
  var defaultBuild = {
      name: "The no name build",
      class: "Witch Doctor",
      active: [
        {"id": 0, "skill": "Nothing Selected", "rune": ""},
        {"id": 1, "skill": "Nothing Selected", "rune": ""},
        {"id": 2, "skill": "Nothing Selected", "rune": ""},
        {"id": 3, "skill": "Nothing Selected", "rune": ""},
        {"id": 4, "skill": "Nothing Selected", "rune": ""},
        {"id": 5, "skill": "Nothing Selected", "rune": ""}
      ],
      passive: [
        {"id": 0, "skill": "Nothing Selected"},
        {"id": 1, "skill": "Nothing Selected"},
        {"id": 2, "skill": "Nothing Selected"},
        {"id": 3, "skill": "Nothing Selected"}
      ]
  };

  return {
    build: defaultBuild,

    resetBuild: function() {
      return this.build = defaultBuild;
    },

    setBuild: function(data) {
      return this.build = data;
    },

    get: function(id) {
      var self = this;
      return DataService.get('builds/' + id).then(function(data){
        return self.setBuild(data);
      });
    },

    setActiveSkill: function(id, name) {
      var foo = function(el) {
        if (el.id == id) {
          el.skill = name;
          el.rune = '';
          return el;
        }
      };

      return _.map(this.build.active, foo);
    },

    setPassiveSkill: function(id, name) {
      var foo = function(el) {
        if (el.id == id) {
          el.skill = name;
          el.rune = '';
          return el;
        }
      };

      return _.map(this.build.passive, foo);
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

