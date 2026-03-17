/** chunk id: 633026 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => f
});
var n = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    a = s(172218),
    i = s(651162),
    o = s(311907),
    c = s(397927),
    d = s(287809),
    u = s(993408),
    _ = s(212407),
    g = s(815280),
    m = s(695413),
    h = s(201073);
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
            heroBlock: s,
            tab: r,
            onVisibilityChange: i
        } = e, u = (0, a.K)(e => {
            i?.(e)
        }, .1, null != i), f = (0, o.bG)([d.default], () => d.default.getCurrentUser()), {
            bannerDisplayConfig: x,
            logoDisplayConfig: E,
            heroLogo: b,
            heroBannerStatic: C,
            heroBannerAnimated: A
        } = (0, _.Kk)(s), S = x?.responsive ?? !1, v = x?.backgroundStyle;
        return null != f && (t || s !== p) ? (0, n.jsxs)("div", {
            ref: u,
            className: h.os,
            children: [(0, n.jsx)("div", {
                className: l()(h.vK, {
                    [h.no]: S
                }),
                style: null != v ? {
                    background: v
                } : void 0,
                children: null != C && (0, n.jsx)(g.A, {
                    bannerStatic: C,
                    bannerAnimated: A,
                    isResponsive: S
                })
            }), (0, n.jsxs)("div", {
                className: h.xX,
                children: [(0, n.jsx)("div", {
                    className: l()(h.bC, {
                        [h.no]: S
                    }),
                    children: t ? (0, n.jsx)("div", {
                        className: h.Hw
                    }) : (0, n.jsx)("div", {
                        className: h.Hw,
                        children: (0, n.jsxs)("div", {
                            className: h.Wq,
                            children: [null != b && (0, n.jsx)("img", {
                                className: h.rm,
                                src: b,
                                alt: s.name,
                                style: E?.toDesktopStyles()
                            }), null != s.title && (0, n.jsx)(c.Heading, {
                                variant: "heading-xxl/bold",
                                className: h.DD,
                                color: "text-strong",
                                children: s.title
                            }), "" !== s.summary && (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: h.Tm,
                                style: null != s.bannerTextColor ? {
                                    color: s.bannerTextColor
                                } : void 0,
                                children: s.summary
                            })]
                        })
                    })
                }), (0, n.jsx)(m.A, {
                    isBlockLoading: t,
                    heroBlock: s,
                    tab: r
                })]
            })]
        }) : null
    }