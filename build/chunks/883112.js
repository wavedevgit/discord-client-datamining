/** Chunk was on web.js **/
/** chunk id: 883112, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r = n(64700),
    i = n(989349),
    a = n.n(i),
    o = n(27867),
    s = n(927813),
    l = n(379418);
let c = [
        [2 * s.A.Seconds.MINUTE, s.A.Seconds.SECOND],
        [5 * s.A.Seconds.MINUTE, s.A.Seconds.MINUTE],
        [45 * s.A.Seconds.MINUTE, 2 * s.A.Seconds.MINUTE],
        [21 * s.A.Seconds.HOUR, 5 * s.A.Seconds.MINUTE]
    ],
    u = 2 * s.A.Seconds.HOUR;

function d(e) {
    let t = (0, o.A)();
    return (r.useEffect(() => {
        if ("R" !== e.format) return;
        let n = 1e3 * u,
            r = Math.abs(e.parsed.diff(a()()));
        for (let [e, t] of c)
            if (r < 1e3 * e) {
                n = 1e3 * t;
                break
            } let i = setInterval(() => {
            t()
        }, n);
        return () => clearInterval(i)
    }, [t, e.format, e.parsed]), "R" === e.format) ? l.kx.R(e.parsed) : e.formatted
}