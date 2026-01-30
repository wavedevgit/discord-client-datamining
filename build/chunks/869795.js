/** chunk id: 869795, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    EG: () => c,
    N9: () => a,
    au: () => o,
    j5: () => l
});
var r = n(408713),
    i = n(723906);

function a(e) {
    return (0, r.lg)() ? e.altKey : e.ctrlKey
}

function o(e, t) {
    var n, r;
    let i = `[data-key="${CSS.escape(String(t))}"]`,
        a = null == (n = e.current) ? void 0 : n.dataset.collection;
    return a && (i = `[data-collection="${CSS.escape(a)}"]${i}`), null == (r = e.current) ? void 0 : r.querySelector(i)
}
let s = new WeakMap;

function l(e) {
    let t = (0, i.Bi)();
    return s.set(e, t), t
}

function c(e) {
    return s.get(e)
}