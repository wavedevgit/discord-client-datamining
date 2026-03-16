/** chunk id: 690737 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(497766),
    r = n(421380),
    o = n(397927),
    d = n(736653),
    c = n(194509),
    u = n(396375),
    _ = n(652215),
    m = n(178501);
let g = function(e) {
    let {
        isVisible: t,
        subscriptionTier: n,
        isApplicationHome: s,
        isEligibleForBogoPromotion: g
    } = e, A = (0, o.zhh)({
        transform: t ? "translateY(-100%)" : "translateY(0%)",
        opacity: +!!t,
        config: {
            tension: 120,
            friction: 12
        }
    }), h = {
        section: _.JJy.MARKETING_FLOATING_CTA
    }, x = (0, d.Ay)(), p = (0, o.Mwr)(x);
    return (0, i.jsx)(a.animated.div, {
        className: l()(m.iE, {
            [m.H8]: s,
            [m.q4]: !t
        }),
        style: A,
        children: (0, i.jsxs)("div", {
            className: s ? m.zW : m.iJ,
            children: [(0, i.jsx)(u.A, {
                color: p ? r.XD.BRAND_INVERTED : void 0,
                className: l()(m.x6, {
                    [m.Ph]: p
                }),
                subscriptionTier: n,
                premiumModalAnalyticsLocation: h,
                isPersistentCTA: !0,
                hasActivePromotion: g,
                shinyButtonClassName: p ? void 0 : m.PJ
            }), (0, i.jsx)(c.A, {
                className: m.x6,
                premiumModalAnalyticsLocation: h
            })]
        })
    })
}