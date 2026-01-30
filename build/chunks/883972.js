/** chunk id: 883972, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i, a, o = n(993767),
    s = n(860511),
    l = n(598349),
    c = n(706938),
    u = n(210140),
    d = n(121536),
    f = n(583178),
    p = n(239586),
    _ = "Object already initialized",
    h = s.TypeError,
    m = s.WeakMap,
    g = function(e) {
        return a(e) ? i(e) : r(e, {})
    },
    E = function(e) {
        return function(t) {
            var n;
            if (!l(t) || (n = i(t)).type !== e) throw new h("Incompatible receiver, " + e + " required");
            return n
        }
    };
if (o || d.state) {
    var y = d.state || (d.state = new m);
    y.get = y.get, y.has = y.has, y.set = y.set, r = function(e, t) {
        if (y.has(e)) throw new h(_);
        return t.facade = e, y.set(e, t), t
    }, i = function(e) {
        return y.get(e) || {}
    }, a = function(e) {
        return y.has(e)
    }
} else {
    var b = f("state");
    p[b] = !0, r = function(e, t) {
        if (u(e, b)) throw new h(_);
        return t.facade = e, c(e, b, t), t
    }, i = function(e) {
        return u(e, b) ? e[b] : {}
    }, a = function(e) {
        return u(e, b)
    }
}
e.exports = {
    set: r,
    get: i,
    has: a,
    enforce: g,
    getterFor: E
}