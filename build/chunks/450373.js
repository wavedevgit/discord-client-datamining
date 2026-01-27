/** Chunk was on web.js **/
/** chunk id: 450373, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(64700),
    i = n(440745),
    a = n.n(i),
    o = n(317097),
    s = n(311907),
    l = n(775602);
let c = e => {
    let t = (0, s.bG)([l.A], () => l.A.desaturateUserColors ? l.A.saturation : 1);
    return (0, r.useMemo)(() => {
        let {
            h: n,
            s: r,
            l: i
        } = a()((0, o.Hl)(e)).toHsl(), s = a()({
            h: n,
            s: r * t,
            l: i
        });
        return {
            hex: s.toHexString(),
            hsl: s.toHslString()
        }
    }, [e, t])
}