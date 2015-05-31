'use strict';

function ImporterService($http) {

  // var request = window.require('superagent');
  // var cheerio = window.require('cheerio');

  return {
  //   importBuild: function(url) {
  //     var options = {
  //       host: 'http://www.diablofans.com/builds/53770-quin69-gr55-dashing-strike-monk'
  //     };

  //     var $, payload;

  //     request
  //     .get(url || options.host)
  //     .end(function(err, res) {
  //       $ = cheerio.load(res.text);

  //       payload = {
  //         name: $('h2.build-title').text(),
  //         class: $(".build-detail .classBadge").attr('title'),
  //         url: url || '',
  //         active: [],
  //         passive: []
  //       };

  //       $('ul.skill-selection li.class-selected').each(function(i, el) {
  //         payload.active.push({
  //           id: i,
  //           skill: $(el).find('.skill').text(),
  //           rune:  $(el).find('.rune').text()
  //         });
  //       });

  //       $('ul.passive-selection li.class-selected').each(function(i, el) {
  //         payload.passive.push({
  //           id: i,
  //           skill: $(el).find('.skill').text()
  //         });
  //       });

  //       console.log(payload);
  //     });
  //   }
  };
}

export default ['$http', ImporterService];
