// import refs from './js/refs';
import './styles.css';
import * as basicLightbox from 'basiclightbox';
import './basicLightBox.min.css';
import tmpl from './templates/tmpl.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// import $ from 'jquery';
import pagination from 'paginationjs';

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  select: document.querySelector('.select'),
  eventsList: document.querySelector('.events-list'),
  container: document.querySelector('.container'),
};

class NewApiService {
  static getData() {
    $('#demo').pagination({
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${refs.searchInput.value}&countryCode=${refs.select.value}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
          success: function (response) {
            console.log(response);
            if ('_embedded' in response) {
              done(response._embedded.events);
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

function onSubmit(e) {
  e.preventDefault();
  NewApiService.getData();
}

refs.searchForm.addEventListener('submit', onSubmit);
