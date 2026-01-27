/** Chunk was on web.js **/
/** chunk id: 513993, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(410323),
    i = n(321727),
    a = n(304880),
    o = n(633851),
    s = r("".replace),
    l = RegExp("^[" + o + "]+"),
    c = RegExp("(^|[^" + o + "])[" + o + "]+$"),
    u = function(e) {
        return function(t) {
            var n = a(i(t));
            return 1 & e && (n = s(n, l, "")), 2 & e && (n = s(n, c, "$1")), n
        }
    };
e.exports = {
    start: u(1),
    end: u(2),
    trim: u(3)
}