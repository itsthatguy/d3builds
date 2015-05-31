'use strict';

var _ = require('lodash');
var skillsData = require('../../data/skills');

function SkillsService(DataService) {
  var service = {
    all: [],
    current: {}
  };

  return {
    all: function() {
      return new Promise(function(resolve) {
        service.all = skillsData.skills;
        return resolve(skillsData.skills);
      });
    },

    get: function(className) {
      var self = this;
      return new Promise(function(resolve) {
        self.all().then(function(data) {
          var skills = _.where(data, {class: className});
          return resolve(skills);
        });
      });
    },

    setClass: function(className) {
      this.get(className).then(function(data) {
        return;
      });
    },

    getRunes: function(skillName) {
      var skillSet = _.find(this.currentSkills.active_skills, {name: skillName});
    },

    setRune: function(id, name) {
      var foo = function(el) {
        if (el.id == id) {
          el.rune = '';
        }

        return el;
      };
      _.map([], foo);
    }
  };
}

export default ['DataService', SkillsService];
