'use strict';

function OverlayService() {
  return {
    active: {},
    passive: {},
    setActiveSkill: function(type, id, name) {
      debugger
      return this[type][id] = name;
    }
  };
}

export default [OverlayService];

