(function (app, $, undefined) {
    "use strict";

    app.request = function() {
      var key = document.getElementById('key').value;
      
      if (key && key !== undefined && key !== '') {
        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=0787.HK&interval=1min&apikey='
          + key,
          hook = document.getElementById('fiddleHook');

        hook.innerHTML = '<div class="progress">\n' +
          '  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" ' +
          'aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>\n' +
          '</div>';

        jQuery.ajax({
          url: url,
          dataType: 'json',
          contentType: "application/json",
          success: function(data){
            var p = document.createElement('p'),
              pre = document.createElement('pre');

            if (hook) {
              hook.innerHTML = '';
              p.innerHTML = url;
              pre.innerHTML = JSON.stringify(data);
              pre.setAttribute('style', 'width: 50; white-space: normal; color: yellow;');
              p.setAttribute('style', 'color: white;');
              hook.appendChild(p);
              hook.appendChild(pre);
            }

          }
        });
      }
      

    };

    $(document).ready(function () {

      $('#request' ).click(function() {
        app.request();
      });


    });
})(window.app = window.app || {}, jQuery)
