var inputs = Array.from(document.querySelectorAll('#wrapper input[type="number"]'));
var square = document.getElementById('cinco');
var cssOutput = document.getElementById('cssOutput');
var copyButton = document.getElementById('copyCSS');

function onlyNumbers(value) {
  var text = value.trim();
  if (text.length === 0) {
    return false;
  }

  for (var i = 0; i < text.length; i += 1) {
    var ch = text[i];
    if (ch < '0' || ch > '9') {
      return false;
    }
  }

  return true;
}

function getSafeValue(input) {
  var text = input.value.trim();
  if (text.length === 0 || !onlyNumbers(text)) {
    return '0';
  }

  return text;
}

function buildRadiusString(values) {
  return values.slice(0, 4).join('px ') + 'px / ' + values.slice(4).join('px ') + 'px';
}

function updateSquareShape() {
  var values = inputs.map(function(input) {
    return getSafeValue(input);
  });
  var radiusValue = buildRadiusString(values);

  square.style.borderRadius = radiusValue;
  cssOutput.textContent = 'border-radius: ' + radiusValue + ';';
}

function copyCssToClipboard() {
  var text = cssOutput.textContent;

  if (!navigator.clipboard) {
    return;
  }

  navigator.clipboard.writeText(text).then(function() {
    copyButton.textContent = 'Copiado!';
    window.setTimeout(function() {
      copyButton.textContent = 'Copiar CSS';
    }, 900);
  });
}

inputs.forEach(function(input) {
  input.addEventListener('input', updateSquareShape);
});

copyButton.addEventListener('click', copyCssToClipboard);

updateSquareShape();
