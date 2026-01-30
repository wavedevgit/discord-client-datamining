/** chunk id: 835245, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(702072),
    i = n(582062),
    a = n(652938);
let o = function(e, t, n) {
    if (r.A.randomUUID && !t && !e) return r.A.randomUUID();
    let o = (e = e || {}).random || (e.rng || i.A)();
    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
        n = n || 0;
        for (let e = 0; e < 16; ++e) t[n + e] = o[e];
        return t
    }
    return (0, a.k)(o)
}