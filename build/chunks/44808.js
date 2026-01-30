/** chunk id: 44808, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(158954),
    l = n(451988),
    c = n(487166);
let u = 200;
var d = function(e) {
    return e[e.TRANSLATE = 1] = "TRANSLATE", e[e.SCALE = 2] = "SCALE", e[e.FADE = 3] = "FADE", e
}(d || {});
let f = Object.freeze({
        1: c.Tl,
        2: c.hs,
        3: c.Rv
    }),
    p = Object.freeze({
        top: c.ZR,
        bottom: c.XI,
        left: c.Hn,
        right: c.sS,
        center: c.pm,
        window_center: c.pm
    });

function _(e) {
    let {
        position: t,
        type: n,
        children: a
    } = e, {
        reducedMotion: d
    } = i.useContext(s.CZY), _ = d.enabled ? 3 : n, [h, m] = i.useState(null != t), [g] = i.useState(() => new l.Ep), [E, y] = i.useState(!0), b = i.useRef(null);
    return i.useLayoutEffect(() => {
        var e;
        null == (e = b.current) || e.addEventListener("transitionend", () => {
            y(!1)
        }), setTimeout(() => {
            y(!1)
        }, u)
    }, []), i.useEffect(() => () => g.stop(), [g]), i.useEffect(() => {
        null != t && g.start(10, () => m(!0))
    }, [t, g]), (0, r.jsx)("div", {
        "data-popout-animating": E,
        className: o()(null != t ? p[t] : null, {
            [f[_]]: null != t,
            [c.Wr]: h
        }),
        children: a
    })
}
_.Types = d