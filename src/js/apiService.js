class NewApiService {
  static getData(query) {
    $('#demo').pagination({
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${query}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
          success: function (data) {
            console.log(data);
            if ('_embedded' in data) {
              done(data._embedded.events);
            }
          },
        });
      },
      pageSize: 6,
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
