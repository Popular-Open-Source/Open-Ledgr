export const toSlug = function(name) {
  return '/' + name.replace(' ', '-').toLowerCase();
}
