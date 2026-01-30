/** chunk id: 457414, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var l = n(172218),
    s = n(397927),
    a = n(854818),
    i = n(212407),
    o = n(815280),
    c = n(985018),
    u = n(922868);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let g = e => {
    let {
        immersiveBannerBlock: t,
        onVisibilityChange: n
    } = e, g = (0, l.K)(e => {
        null == n || n(e)
    }, .33, null != n), {
        bannerUrl: f,
        bannerAnimatedUrl: m
    } = (0, i.qY)(t), p = null != t.textColor ? {
        color: t.textColor
    } : void 0, _ = null != t.body && "" !== t.body, b = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, r.jsxs)("div", {
        ref: g,
        className: u.BX,
        children: [(0, r.jsx)("div", {
            className: u.vK,
            children: null != f && (0, r.jsx)(o.A, {
                bannerStatic: f,
                bannerAnimated: m
            })
        }), (0, r.jsx)("div", {
            className: u.HQ,
            children: (0, r.jsxs)("div", {
                className: u.Yn,
                children: [null != t.endTime ? (0, r.jsx)(a.e, {
                    endDate: t.endTime,
                    size: "lg"
                }) : null, (0, r.jsx)(s.Heading, {
                    variant: "heading-xxl/bold",
                    className: u.DD,
                    color: "text-strong",
                    style: d({}, p),
                    children: t.title
                }), _ || b ? (0, r.jsxs)(s.Text, {
                    variant: "text-md/medium",
                    style: d({}, p),
                    children: [_ && t.body, _ && b && " ", b && (0, r.jsx)(s.MzZ, {
                        href: t.helpCenterUrl,
                        className: u.CU,
                        style: d({}, p),
                        children: c.intl.string(c.t.O7ADgv)
                    })]
                }) : null]
            })
        })]
    })
}