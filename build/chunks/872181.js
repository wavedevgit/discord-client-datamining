/** Chunk was on web.js **/
/** chunk id: 872181, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(860511),
    i = n(985848),
    a = n(339626),
    o = n(676528),
    s = n(65978),
    l = n(192819),
    c = n(627),
    u = r.Function,
    d = /MSIE .\./.test(s) || "BUN" === o && function() {
        var e = r.Bun.version.split(".");
        return e.length < 3 || "0" === e[0] && (e[1] < 3 || "3" === e[1] && "0" === e[2])
    }();
e.exports = function(e, t) {
    var n = t ? 2 : 1;
    return d ? function(r, o) {
        var s = c(arguments.length, 1) > n,
            d = a(r) ? r : u(r),
            f = s ? l(arguments, n) : [],
            p = s ? function() {
                i(d, this, f)
            } : d;
        return t ? e(p, o) : e(p)
    } : e
}