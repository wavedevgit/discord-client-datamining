/** Chunk was on web.js **/
/** chunk id: 543699, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    tJ: () => u,
    tM: () => c,
    v2: () => f,
    wg: () => d
}), n(896048);
var r = n(310784),
    i = n.n(r),
    a = n(735438),
    o = n(317097),
    s = n(582754);
n(325335);
var l = n(652215);

function c(e) {
    return null == e ? null : (0, o.OK)(e) > .5 ? l.NJ8.DARK : l.NJ8.LIGHT
}

function u(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)]
}
let d = (0, a.memoize)(e => {
        let t = (0, s.OB)(e, {
            base: "#ffffff",
            contrastRatio: s.Tr.HighContrastText
        });
        return (0, o.LX)(t)
    }, e => e),
    f = (0, a.memoize)((e, t, n) => {
        let r = (null != n ? n : c(e)) !== l.NJ8.LIGHT,
            o = .5,
            s = .1,
            u = .8,
            d = i().mix(i()(e), i()(t), o, "lab"),
            f = Math.round(100 * d.get("hsl.l")) / 100,
            p = r ? (0, a.clamp)(f, 0, s) : (0, a.clamp)(f, u, 1);
        return i()(d).set("hsl.l", p).num()
    }, (e, t, n) => "".concat(e, "-").concat(t, "-").concat(n))