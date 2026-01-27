/** Chunk was on web.js **/
/** chunk id: 263577, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(990078),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(985018),
    f = n(895237);

function p(e) {
    let {
        src: t,
        size: n,
        constrain: a = "height",
        className: p,
        alt: _,
        fallbackSrc: h,
        "aria-hidden": m,
        showTooltip: g = !1
    } = e, E = (0, u.Ay)(), y = "".concat(n, "px"), [b, O] = i.useState(!1), [v, A] = i.useState(!1), I = null == h || v;
    if (null == t || b && I) return (0, r.jsx)(c._7Z, {
        size: "custom",
        width: "100%",
        height: "100%",
        color: (0, l.Mw)(E) ? c.LU0.colors.WHITE : c.LU0.colors.BLACK,
        style: {
            maxWidth: y
        },
        className: o()(f.f, p)
    });
    let S = "height" === a ? {
        maxWidth: y,
        height: y
    } : {
        maxWidth: y,
        minHeight: y
    };
    return (0, r.jsx)(s.m, {
        "aria-label": _,
        __unsupportedReactNodeAsText: _,
        shouldShow: g,
        children: (0, r.jsx)("img", {
            style: S,
            className: o()(f.f, p),
            src: b && null != h ? h : t,
            "aria-hidden": m,
            alt: null != _ ? _ : m ? void 0 : d.intl.string(d.t["2B/phM"]),
            onError: e => b ? A(!0) : O(!0)
        })
    }, "content-image")
}