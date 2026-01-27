/** Chunk was on web.js **/
/** chunk id: 557939, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(860511),
    i = n(873078).f,
    a = n(706938),
    o = n(693655),
    s = n(88388),
    l = n(517771),
    c = n(521351);
e.exports = function(e, t) {
    var n, u, d, f, p, _ = e.target,
        h = e.global,
        m = e.stat;
    if (n = h ? r : m ? r[_] || s(_, {}) : r[_] && r[_].prototype)
        for (u in t) {
            if (f = t[u], d = e.dontCallGetSet ? (p = i(n, u)) && p.value : n[u], !c(h ? u : _ + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
                if (typeof f == typeof d) continue;
                l(f, d)
            }(e.sham || d && d.sham) && a(f, "sham", !0), o(n, u, f, e)
        }
}