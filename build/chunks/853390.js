/** Chunk was on web.js **/
/** chunk id: 853390, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    f: () => s
}), n(896048);
var r = n(64700),
    i = n(451988),
    a = n(927813);
let o = e => String(e).padStart(2, "0"),
    s = e => {
        let t = Math.floor(e) % a.A.Seconds.MINUTE,
            n = Math.floor(e / a.A.Seconds.MINUTE) % a.A.Seconds.MINUTE,
            r = Math.floor(e / a.A.Seconds.HOUR);
        return 0 === r ? "".concat(o(n), ":").concat(o(t)) : "".concat(o(r), ":").concat(o(n), ":").concat(o(t))
    };

function l(e) {
    let {
        start: t,
        end: n
    } = e, [o] = (0, r.useState)(new i.IX), [s, l] = (0, r.useState)(Date.now());
    (0, r.useEffect)(() => (o.start(a.A.Millis.HALF_SECOND, () => l(Date.now())), () => o.stop()), [o]);
    let c = (n - t) / a.A.Millis.SECOND,
        u = Math.max(Math.min((s - t) / a.A.Millis.SECOND, c), 0);
    return {
        elapsed: u,
        duration: c,
        percentage: Math.max(Math.min(u / c, 1), 0)
    }
}