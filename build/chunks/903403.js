/** chunk id: 903403, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(417597),
    o = n(653887),
    c = n(775602),
    u = n(607470),
    d = n(531685),
    g = n(993408),
    f = n(203312),
    m = n(212407),
    p = n(985018),
    _ = n(68763);

function b(e) {
    let {
        category: t
    } = e, n = (0, i.bG)([c.A], () => c.A.useReducedMotion), s = (0, i.bG)([d.A], () => d.A.isFocused()), {
        catalogBannerStatic: g,
        catalogBannerAnimated: b,
        catalogBannerRive: h
    } = (0, m.MV)(t), E = l.useRef(null), v = null != h;
    return (0, r.jsxs)("div", {
        ref: E,
        className: a()(_.sW, {
            [_.by]: v
        }),
        children: [v ? (0, r.jsx)(o._, {
            src: h,
            fit: "cover",
            alignment: "center-left",
            style: {
                width: "100%",
                height: "100%"
            },
            eventTargetRef: E,
            autoplay: !0
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("img", {
                className: _.ze,
                src: g,
                alt: t.name
            }), null != b && !n && s && (0, r.jsx)(u.A, {
                src: b,
                className: _.tr,
                autoPlay: !0,
                loop: !0
            })]
        }), (0, r.jsx)(f.A, {
            category: t,
            className: _.v0,
            daysRemainingText: p.t["8gsP5M"]
        })]
    })
}(0, g.$b)(90)