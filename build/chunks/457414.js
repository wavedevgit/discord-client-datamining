/** chunk id: 457414 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => u
});
var n = s(627968);
s(64700);
var l = s(172218),
    r = s(397927),
    a = s(854818),
    i = s(212407),
    o = s(815280),
    c = s(985018),
    d = s(537947);
let u = e => {
    let {
        immersiveBannerBlock: t,
        onVisibilityChange: s
    } = e, u = (0, l.K)(e => {
        s?.(e)
    }, .33, null != s), {
        bannerUrl: _,
        bannerAnimatedUrl: g
    } = (0, i.qY)(t), m = null != t.textColor ? {
        color: t.textColor
    } : void 0, h = null != t.body && "" !== t.body, p = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, n.jsxs)("div", {
        ref: u,
        className: d.BX,
        children: [(0, n.jsx)("div", {
            className: d.vK,
            children: null != _ && (0, n.jsx)(o.A, {
                bannerStatic: _,
                bannerAnimated: g
            })
        }), (0, n.jsx)("div", {
            className: d.HQ,
            children: (0, n.jsxs)("div", {
                className: d.Yn,
                children: [null != t.endTime ? (0, n.jsx)(a.e, {
                    endDate: t.endTime,
                    size: "lg"
                }) : null, (0, n.jsx)(r.Heading, {
                    variant: "heading-xxl/bold",
                    className: d.DD,
                    color: "text-strong",
                    style: {
                        ...m
                    },
                    children: t.title
                }), h || p ? (0, n.jsxs)(r.Text, {
                    variant: "text-md/medium",
                    style: {
                        ...m
                    },
                    children: [h && t.body, h && p && " ", p && (0, n.jsx)(r.MzZ, {
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