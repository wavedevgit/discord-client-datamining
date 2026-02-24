/** chunk id: 633026, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var s = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(172218),
    i = n(651162),
    o = n(311907),
    c = n(397927),
    d = n(287809),
    u = n(993408),
    g = n(212407),
    _ = n(815280),
    m = n(695413),
    h = n(419447);
(0, u.$b)(90);
let p = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: i.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0
    },
    f = e => {
        let {
            isLoading: t = !1,
            heroBlock: n,
            tab: l,
            onVisibilityChange: i
        } = e, u = (0, a.K)(e => {
            i?.(e)
        }, .1, null != i), f = (0, o.bG)([d.default], () => d.default.getCurrentUser()), {
            bannerDisplayConfig: x,
            logoDisplayConfig: E,
            heroLogo: C,
            heroBannerStatic: A,
            heroBannerAnimated: b
        } = (0, g.Kk)(n), S = x?.responsive ?? !1, v = x?.backgroundStyle;
        return null != f && (t || n !== p) ? (0, s.jsxs)("div", {
            ref: u,
            className: h.os,
            children: [(0, s.jsx)("div", {
                className: r()(h.vK, {
                    [h.no]: S
                }),
                style: null != v ? {
                    background: v
                } : void 0,
                children: null != A && (0, s.jsx)(_.A, {
                    bannerStatic: A,
                    bannerAnimated: b,
                    isResponsive: S
                })
            }), (0, s.jsxs)("div", {
                className: h.xX,
                children: [(0, s.jsx)("div", {
                    className: r()(h.bC, {
                        [h.no]: S
                    }),
                    children: t ? (0, s.jsx)("div", {
                        className: h.Hw
                    }) : (0, s.jsx)("div", {
                        className: h.Hw,
                        children: (0, s.jsxs)("div", {
                            className: h.Wq,
                            children: [null != C && (0, s.jsx)("img", {
                                className: h.rm,
                                src: C,
                                alt: n.name,
                                style: E?.toDesktopStyles()
                            }), null != n.title && (0, s.jsx)(c.Heading, {
                                variant: "heading-xxl/bold",
                                className: h.DD,
                                color: "text-strong",
                                children: n.title
                            }), "" !== n.summary && (0, s.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: h.Tm,
                                style: null != n.bannerTextColor ? {
                                    color: n.bannerTextColor
                                } : void 0,
                                children: n.summary
                            })]
                        })
                    })
                }), (0, s.jsx)(m.A, {
                    isBlockLoading: t,
                    heroBlock: n,
                    tab: l
                })]
            })]
        }) : null
    }