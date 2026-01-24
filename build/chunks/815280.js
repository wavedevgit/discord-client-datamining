/** Chunk was on 59275 **/
/** chunk id: 815280, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    i = n(653887),
    o = n(775602),
    c = n(607470),
    u = n(531685),
    d = n(402314);
let g = e => {
    let {
        bannerStatic: t,
        bannerAnimated: n,
        bannerRive: l,
        isResponsive: g = !1,
        eventTargetRef: f
    } = e, m = (0, a.bG)([o.A], () => o.A.useReducedMotion), p = (0, a.bG)([u.A], () => u.A.isFocused()), _ = null != n && !m && p;
    return null != l ? (0, r.jsx)(i._, {
        src: l,
        fit: "fit-width",
        eventTargetRef: f
    }) : _ ? (0, r.jsx)(c.A, {
        className: s()({
            [d.no]: g
        }, d.BW, d.ud),
        src: n,
        autoPlay: !0,
        loop: !0
    }) : (0, r.jsx)("div", {
        className: s()({
            [d.no]: g
        }, d.BW, d._e),
        style: {
            backgroundImage: "url(".concat(t, ")")
        }
    })
}