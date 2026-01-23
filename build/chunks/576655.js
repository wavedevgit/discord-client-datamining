/** Chunk was on web.js **/
/** chunk id: 576655, original params: e (module,exports,require) **/
"use strict";

function t() {
    this._cache = []
}
t.prototype.add = function(e) {
    -1 === this._cache.indexOf(e) && this._cache.push(e)
}, t.prototype.forEach = function(e) {
    this._cache.forEach(e)
}, e.exports = t