/** chunk id: 590838, original params: e (module,exports,require) **/
"use strict";
var t = Math.round;
e.exports = function(e) {
    var n = t(e);
    return n < 0 ? 0 : n > 255 ? 255 : 255 & n
}