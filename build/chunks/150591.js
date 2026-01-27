/** Chunk was on web.js **/
/** chunk id: 150591, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    hP: () => c,
    kS: () => u
});
var r = n(64700),
    i = n(717421),
    a = n(844222),
    o = n(815390);
let s = {
        mass: 1,
        tension: 1e3,
        friction: 48
    },
    l = {
        mass: 1,
        tension: 1200,
        friction: 80
    },
    c = s;

function u(e, t) {
    let n = e === o.i.ENTERING || e === o.i.ENTERED,
        {
            reducedMotion: c
        } = r.useContext(a.C),
        u = n || c.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
    return (0, i.z)({
        opacity: +!!n,
        transform: u,
        config: n ? s : l,
        delay: 64 * !!n
    }, "animate-always")
}