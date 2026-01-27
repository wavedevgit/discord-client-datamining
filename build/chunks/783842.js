/** Chunk was on web.js **/
/** chunk id: 783842, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(257943),
    i = n(410323),
    a = n(446474),
    o = n(503628),
    s = n(537403),
    l = n(800098),
    c = n(988366),
    u = n(250594),
    d = n(93714),
    f = Object.assign,
    p = Object.defineProperty,
    _ = i([].concat);
e.exports = !f || o(function() {
    if (r && 1 !== f({
            b: 1
        }, f(p({}, "a", {
            enumerable: !0,
            get: function() {
                p(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b) return !0;
    var e = {},
        t = {},
        n = Symbol("assign detection"),
        i = "abcdefghijklmnopqrst";
    return e[n] = 7, i.split("").forEach(function(e) {
        t[e] = e
    }), 7 !== f({}, e)[n] || s(f({}, t)).join("") !== i
}) ? function(e, t) {
    for (var n = u(e), i = arguments.length, o = 1, f = l.f, p = c.f; i > o;)
        for (var h, m = d(arguments[o++]), g = f ? _(s(m), f(m)) : s(m), E = g.length, y = 0; E > y;) h = g[y++], (!r || a(p, m, h)) && (n[h] = m[h]);
    return n
} : f