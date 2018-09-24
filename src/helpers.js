export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function isEmpty(myObject) {
  if (typeof myObject !== 'undefined' && myObject !== 'null') {
    if (typeof myObject === 'object') {
      for (var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
          return false;
        }
      }
    }
    if (typeof myObject === 'string') {
      if (myObject.length > 0) {
        return false;
      }
    }
  }
  return true;
}
