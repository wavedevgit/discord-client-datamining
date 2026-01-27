/** Chunk was on web.js **/
/** chunk id: 626584, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(118356),
    i = n(53943);
let a = Date.now(),
    o = a;
(0, r.$o)(function(e, t, n) {
    for (var s = arguments.length, l = Array(s > 3 ? s - 3 : 0), c = 3; c < s; c++) l[c - 3] = arguments[c];
    let u = Date.now(),
        d = ((u - a) / 1e3).toFixed(3),
        f = ((u - o) / 1e3).toFixed(3),
        p = "Σ:".concat(d, "s, Δ:").concat(f, "s");
    o = u, i.z8({
        name: e,
        timing: p
    }, n, ...l), (0, r.gZ)(e, t, n, ...l)
});
let s = r.Vy