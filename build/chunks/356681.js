/** Chunk was on web.js **/
/** chunk id: 356681, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(319135),
    i = n(879618),
    a = n(142896),
    o = n(906046),
    s = n(267768),
    l = n(428495),
    c = o("Object.prototype.toString"),
    u = n(581070)(),
    d = "u" < typeof globalThis ? n.g : globalThis,
    f = i(),
    p = o("String.prototype.slice"),
    _ = o("Array.prototype.indexOf", !0) || function(e, t) {
        for (var n = 0; n < e.length; n += 1)
            if (e[n] === t) return n;
        return -1
    },
    h = {
        __proto__: null
    };
u && s && l ? r(f, function(e) {
    var t = new d[e];
    if (Symbol.toStringTag in t && l) {
        var n = l(t),
            r = s(n, Symbol.toStringTag);
        !r && n && (r = s(l(n), Symbol.toStringTag)), h["$" + e] = a(r.get)
    }
}) : r(f, function(e) {
    var t = new d[e],
        n = t.slice || t.set;
    n && (h["$" + e] = a(n))
});
var m = function(e) {
        var t = !1;
        return r(h, function(n, r) {
            if (!t) try {
                "$" + n(e) === r && (t = p(r, 1))
            } catch (e) {}
        }), t
    },
    g = function(e) {
        var t = !1;
        return r(h, function(n, r) {
            if (!t) try {
                n(e), t = p(r, 1)
            } catch (e) {}
        }), t
    };
e.exports = function(e) {
    if (!e || "object" != typeof e) return !1;
    if (!u) {
        var t = p(c(e), 8, -1);
        return _(f, t) > -1 ? t : "Object" === t && g(e)
    }
    return s ? m(e) : null
}