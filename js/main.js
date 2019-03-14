var slideout = new Slideout({
    'panel': document.getElementById('bkg-container'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right'
  });

  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });

  // Float Labels
  var floatlabels = new FloatLabels( 'form', {
    customEvent      : null,
    customLabel      : null,
    customPlaceholder: null,
    exclude          : '.no-label',
    inputRegex       : /email|number|password|search|tel|text|url/,
    prefix           : 'fl-',
    prioritize       : 'label',
    requiredClass    : 'required',
    style            : 2,
    transform        : 'input, select, textarea',
  });