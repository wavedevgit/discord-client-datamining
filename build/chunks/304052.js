/** Chunk was on web.js **/
/** chunk id: 304052, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(221015),
    i = n(93714),
    a = n(250594),
    o = n(503199),
    s = function(e) {
        var t = 1 === e;
        return function(n, s, l) {
            for (var c, u = a(n), d = i(u), f = o(d), p = r(s, l); f-- > 0;)
                if (p(c = d[f], f, u)) switch (e) {
                    case 0:
                        return c;
                    case 1:
                        return f
                }
            return t ? -1 : void 0
        }
    };
e.exports = {
    findLast: s(0),
    findLastIndex: s(1)
}