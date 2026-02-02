/** chunk id: 633026, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(172218),
    i = n(651162),
    o = n(311907),
    c = n(397927),
    u = n(287809),
    d = n(993408),
    g = n(212407),
    f = n(815280),
    m = n(695413),
    p = n(201073);
(0, d.$b)(90);
let _ = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: i.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0
    },
    b = e => {
        var t;
        let {
            isLoading: n = !1,
            heroBlock: l,
            tab: i,
            onVisibilityChange: d
        } = e, b = (0, a.K)(e => {
            null == d || d(e)
        }, .1, null != d), h = (0, o.bG)([u.default], () => u.default.getCurrentUser()), {
            bannerDisplayConfig: E,
            logoDisplayConfig: v,
            heroLogo: C,
            heroBannerStatic: A,
            heroBannerAnimated: x
        } = (0, g.Kk)(l), S = null != (t = null == E ? void 0 : E.responsive) && t, O = null == E ? void 0 : E.backgroundStyle;
        return null != h && (n || l !== _) ? (0, r.jsxs)("div", {
            ref: b,
            className: p.os,
            children: [(0, r.jsx)("div", {
                className: s()(p.vK, {
                    [p.no]: S
                }),
                style: null != O ? {
                    background: O
                } : void 0,
                children: null != A && (0, r.jsx)(f.A, {
                    bannerStatic: A,
                    bannerAnimated: x,
                    isResponsive: S
                })
            }), (0, r.jsxs)("div", {
                className: p.xX,
                children: [(0, r.jsx)("div", {
                    className: s()(p.bC, {
                        [p.no]: S
                    }),
                    children: n ? (0, r.jsx)("div", {
                        className: p.Hw
                    }) : (0, r.jsx)("div", {
                        className: p.Hw,
                        children: (0, r.jsxs)("div", {
                            className: p.Wq,
                            children: [null != C && (0, r.jsx)("img", {
                                className: p.rm,
                                src: C,
                                alt: l.name,
                                style: null == v ? void 0 : v.toDesktopStyles()
                            }), null != l.title && (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/bold",
                                className: p.DD,
                                color: "text-strong",
                                children: l.title
                            }), "" !== l.summary && (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: p.Tm,
                                style: null != l.bannerTextColor ? {
                                    color: l.bannerTextColor
                                } : void 0,
                                children: l.summary
                            })]
                        })
                    })
                }), (0, r.jsx)(m.A, {
                    isBlockLoading: n,
                    heroBlock: l,
                    tab: i
                })]
            })]
        }) : null
    }