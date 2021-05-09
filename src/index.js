import refs from './js/refs';
import './styles.css';
import * as basicLightbox from 'basiclightbox';
import './basicLightBox.min.css';
import tmpl from './templates/tmpl.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// import $ from 'jquery';
import pagination from 'paginationjs';

class NewApiService {
  static getData(query) {
    $('#demo').pagination({
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
          success: function (data) {
            console.log(data);
            if ('_embedded' in data) {
              done(data._embedded.events);
            }
          },
        });
      },
      pageSize: 5,
      showPrevious: false,
      showNext: false,
      callback: function (data) {
        console.log(data);
        $('#dataContainer').html(tmpl(data));
      },
    });
  }
}

NewApiService.getData('US');
