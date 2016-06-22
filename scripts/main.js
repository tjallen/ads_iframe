(function($) {
  // dom
  var select = $('#adselect');
  var iFrame = $('#ad');
  var selectValue;
  /* array of ads we want to show
  src: iframe src/directory name
  name (optional): name to show in dropdown select option
  */
  var ads = [
    { src: '300x250', name: 'beach generic 320x250' },
    { src: '480x320', name: 'beach gen 480x320' },
    { src: '728x90' },
  ];
  // populate the select from the ads array
  for (var i = 0; i < ads.length; i++) {
    // use directory name as name if not set in array
    if (!ads[i].name) {
      ads[i].name = ads[i].src;
    }
    select.append('<option value="' + ads[i].src + '">' + ads[i].name + '</option>' );
  }
  // handle a change of value on the select
  select.change(function() {
    selectValue = $(this).val();
    console.log('changed to', selectValue);
    iFrame.attr('src', 'ads/' + selectValue);
  });
})(jQuery);

//# sourceMappingURL=main.js.map
