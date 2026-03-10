/** chunk id: 690737 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(490249),
    r = n(421380),
    o = n(397927),
    d = n(736653),
    c = n(194509),
    u = n(396375),
    _ = n(652215),
    g = n(178501);
let m = function(e) {
    let {
        isVisible: t,
        subscriptionTier: n,
        isApplicationHome: s,
        isEligibleForBogoPromotion: m
    } = e, A = (0, o.zhh)({
        transform: t ? "translateY(-100%)" : "translateY(0%)",
        opacity: +!!t,
        config: {
            tension: 120,
            friction: 12
        }
    }), h = {
        section: _.JJy.MARKETING_FLOATING_CTA
    }, p = (0, d.Ay)(), x = (0, o.Mwr)(p);
    return (0, i.jsx)(a.animated.div, {
        className: l()(g.iE, {
            [g.H8]: s,
            [g.q4]: !t
        }),
        style: A,
        children: (0, i.jsxs)("div", {
            className: s ? g.zW : g.iJ,
            children: [(0, i.jsx)(u.A, {
                color: x ? r.XD.BRAND_INVERTED : void 0,
                className: l()(g.x6, {
                    [g.Ph]: x
                }),
                subscriptionTier: n,
                premiumModalAnalyticsLocation: h,
                isPersistentCTA: !0,
                hasActivePromotion: m,
                shinyButtonClassName: x ? void 0 : g.PJ
            }), (0, i.jsx)(c.A, {
                className: g.x6,
                premiumModalAnalyticsLocation: h
            })]
        })
    })
}