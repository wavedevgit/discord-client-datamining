/** chunk id: 457414, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var s = n(627968);
n(64700);
var l = n(172218),
    r = n(397927),
    a = n(854818),
    i = n(212407),
    o = n(815280),
    c = n(985018),
    d = n(214086);
let u = e => {
    let {
        immersiveBannerBlock: t,
        onVisibilityChange: n
    } = e, u = (0, l.K)(e => {
        n?.(e)
    }, .33, null != n), {
        bannerUrl: g,
        bannerAnimatedUrl: _
    } = (0, i.qY)(t), m = null != t.textColor ? {
        color: t.textColor
    } : void 0, h = null != t.body && "" !== t.body, p = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, s.jsxs)("div", {
        ref: u,
        className: d.BX,
        children: [(0, s.jsx)("div", {
            className: d.vK,
            children: null != g && (0, s.jsx)(o.A, {
                bannerStatic: g,
                bannerAnimated: _
            })
        }), (0, s.jsx)("div", {
            className: d.HQ,
            children: (0, s.jsxs)("div", {
                className: d.Yn,
                children: [null != t.endTime ? (0, s.jsx)(a.e, {
                    endDate: t.endTime,
                    size: "lg"
                }) : null, (0, s.jsx)(r.Heading, {
                    variant: "heading-xxl/bold",
                    className: d.DD,
                    color: "text-strong",
                    style: {
                        ...m
                    },
                    children: t.title
                }), h || p ? (0, s.jsxs)(r.Text, {
                    variant: "text-md/medium",
                    style: {
                        ...m
                    },
                    children: [h && t.body, h && p && " ", p && (0, s.jsx)(r.MzZ, {
                        href: t.helpCenterUrl,
                        className: d.CU,
                        style: {
                            ...m
                        },
                        children: c.intl.string(c.t.O7ADgv)
                    })]
                }) : null]
            })
        })]
    })
}