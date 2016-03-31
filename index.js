const splitTrees = require('rogain-utils').splitTrees;

module.exports = function Range(tree, props) {
  var split = splitTrees(tree.children, { type: 'component', name: 'Else' });
  var data = parseInt(tree.data, 10);
  var min = parseInt(tree.attrs.min, 10);
  var max = parseInt(tree.attrs.max, 10);
  var res = split[1];

  if (!tree.attrs.min) min = -1 * Infinity;
  if (!tree.attrs.max) max = Infinity;

  if (tree.data !== undefined) {
    if (data >= min && data <= max) res = split[0];
  }

  return res && res.length > 0 ? res : undefined;
}