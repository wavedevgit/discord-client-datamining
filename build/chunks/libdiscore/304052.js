/** chunk id: 304052, original params: t,e,r (module,exports,require) **/
var n = r(221015),
    o = r(93714),
    i = r(250594),
    a = r(503199),
    u = function(t) {
        var e = 1 === t;
        return function(r, u, c) {
            for (var s, f = i(r), _ = o(f), l = a(_), p = n(u, c); l-- > 0;)
                if (p(s = _[l], l, f)) switch (t) {
                    case 0:
                        return s;
                    case 1:
                        return l
                }
            return e ? -1 : void 0
        }
    };
t.exports = {
    findLast: u(0),
    findLastIndex: u(1)
}