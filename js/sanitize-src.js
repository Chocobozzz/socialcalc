window.sanitizeHTML = function (str) {
  if (typeof window.DOMParser !== 'undefined') {
    const parsed = new DOMParser().parseFromString(str, "text/html");
    parsed.body.querySelectorAll("*").forEach(elem => [ ...elem.attributes ].forEach(attr => {
      if ([ "href", "alt", "title", "src" ].includes(attr.name) !== true) {
        return elem.removeAttribute(attr.name);
      }
    }))

    return parsed.body.innerHTML;
  }

  var sanitizeHtml = require('sanitize-html');

  return sanitizeHtml(str, {
    allowedAttributes: {
      '*': [  "href", "alt", "title", "src" ]
    }
  });
}
