(function($) {
  // dom
  var iFrame = $('#ad');
  var selectValue;
  var reSelect = $('.reselect__list');
  var reSelectItems = $('.reselect__option');
  /* array of ads we want to show
  src: iframe src/directory name
  name (optional): name to show in dropdown select option
  */
  var ads = [
    { src: '---', name: 'Manila' },
    { src: '300x250', name: 'beach generic 320x250' },
    { src: '480x320', name: 'beach gen 480x320' },
    { src: '728x90' },
    { src: '300x250', name: 'beach generic 320x250' },
    { src: '---', name: 'Frankfurt' },
    { src: '480x320', name: 'beach gen 480x320' },
    { src: '728x90' },
    { src: '300x250', name: 'beach generic 320x250' },
  ];
  
  // populate the select from the ads array
  function populate() {
    for (var i = 0; i < ads.length; i++) {
      // set src property to 3 dashes for an optgroup
      // name property defines the label
      if (ads[i].src === '---') {
        reSelect.append('<li class="reselect__label">' + ads[i].name + '</li>');
      } else {
        // use directory name as name if not set in array
        if (!ads[i].name) {
          ads[i].name = ads[i].src;
        }
        // append the item
        reSelect.append('<li class="reselect__option" data-src="' + ads[i].src + '">' + ads[i].name + '</li>' );
      }
    }
    console.log('populate() called');
  }
  
  // update the iframe src value
  function updateIframeSrc(src) {
    iFrame.attr('src', 'ads/' + src);
    console.log('iframe src changed to:', src);
  }
  
  // initialize after population
  function init() {
    // set active class on first elem in select list
    var firstItem = $('.reselect__option').first();
    firstItem.addClass('active visible');
    // set initial iframe attribute to first item
    updateIframeSrc(firstItem.attr('data-src'))
  }
  
  // handlers for reSelect
  // focus in
  reSelect.attr('tabindex', -1).on('focus', function(event) {
    event.stopPropagation();
    $(this).addClass('interact');
    $(this).children().addClass('visible');
    // handle a click on child while focused
    $('.reselect__option').on('click', function() {
      updateIframeSrc($(this).attr('data-src'));
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
    console.log('focus in');
  });
  
  // focus out
  reSelect.attr('tabindex', -1).on('focusout', function(event) {
    event.stopPropagation();
    $(this).removeClass('interact');
    $(this).children().removeClass('visible');
    console.log('focus out');
  });

  populate();
  init();
  
})(jQuery);

//# sourceMappingURL=main.js.map
