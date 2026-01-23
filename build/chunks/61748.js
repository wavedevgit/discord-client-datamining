/** Chunk was on 94678 **/
/** chunk id: 61748, original params: t,r,e (module,exports,require) **/
"use strict";
var n = e(308227),
    o = e(175380),
    s = e(512008),
    i = e(226775),
    u = e(875746),
    c = e(524011),
    a = n.Symbol,
    f = o("wks"),
    p = c ? a.for || a : a && a.withoutSetter || i;
t.exports = function(t) {
    return s(f, t) || (f[t] = u && s(a, t) ? a[t] : p("Symbol." + t)), f[t]
}