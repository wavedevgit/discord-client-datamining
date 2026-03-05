/** chunk id: 787425 params = (module,exports,require) **/
"use strict";
var a = r(251796),
    n = Array.prototype.concat,
    o = Array.prototype.slice,
    s = e.exports = function(e) {
        for (var t = [], r = 0, s = e.length; r < s; r++) {
            var i = e[r];
            a(i) ? t = n.call(t, o.call(i)) : t.push(i)
        }
        return t
    };
s.wrap = function(e) {
    return function() {
        return e(s(arguments))
    }
}