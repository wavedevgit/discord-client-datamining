/** chunk id: 815280 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => _
});
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(311907),
    i = s(653887),
    o = s(775602),
    c = s(607470),
    d = s(531685),
    u = s(626419);
let _ = e => {
    let {
        bannerStatic: t,
        bannerAnimated: s,
        bannerRive: l,
        isResponsive: _ = !1,
        eventTargetRef: g
    } = e, m = (0, a.bG)([o.A], () => o.A.useReducedMotion), h = (0, a.bG)([d.A], () => d.A.isFocused()), p = null != s && !m && h;
    return null != l ? (0, n.jsx)(i._, {
        src: l,
        fit: "fit-width",
        eventTargetRef: g
    }) : p ? (0, n.jsx)(c.A, {
        className: r()({
            [u.no]: _
        }, u.BW, u.ud),
        src: s,
        autoPlay: !0,
        loop: !0
    }) : (0, n.jsx)("div", {
        className: r()({
            [u.no]: _
        }, u.BW, u._e),
        style: {
            backgroundImage: `url(${t})`
        }
    })
}