'use strict';

var _ = require('lodash');

function BuildsService(DataService, $filter) {
  return {
    setClass: function(name) {
      this.class = name;
    },

    setSkillsData: function(data) {
      return this.skillsData = data;
    },

    getSkills: function(className) {
      return _.find(this.skillsData, {name: className})
    },

    get: function() {
      var self = this;
      return DataService.get('classes').then(function(data){
        return self.setSkillsData(data.classes);
      });
    },

    setRune: function(id, name) {

      var foo = function(el) {
        if (el.id == id) {
          el.rune = '';
        }

        return el;
      }
      _.map([], foo);
    }
  };
}

export default ['DataService', '$filter', BuildsService];

