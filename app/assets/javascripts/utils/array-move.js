Array.prototype.move = function(old_index, new_index) {
  if (new_index >= 0 && new_index < this.length)
  this.splice(new_index, 0, this.splice(old_index, 1)[0]);
  return this;
};
