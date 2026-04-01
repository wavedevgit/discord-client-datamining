/** chunk id: 690737 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(773690),
    r = n(421380),
    o = n(397927),
    d = n(736653),
    c = n(194509),
    u = n(396375),
    m = n(652215),
    g = n(253646);
let _ = function(e) {
    let {
        isVisible: t,
        subscriptionTier: n,
        isApplicationHome: s,
        isEligibleForBogoPromotion: _
    } = e, x = (0, o.zhh)({
        transform: t ? "translateY(-100%)" : "translateY(0%)",
        opacity: +!!t,
        config: {
            tension: 120,
            friction: 12
        }
    }), A = {
        section: m.JJy.MARKETING_FLOATING_CTA
    }, h = (0, d.Ay)(), p = (0, o.Mwr)(h);
    return (0, i.jsx)(a.animated.div, {
        className: l()(g.iE, {
            [g.H8]: s,
            [g.q4]: !t
        }),
        style: x,
        children: (0, i.jsxs)("div", {
            className: s ? g.zW : g.iJ,
            children: [(0, i.jsx)(u.A, {
                color: p ? r.XD.BRAND_INVERTED : void 0,
                className: l()(g.x6, {
                    [g.Ph]: p
                }),
                subscriptionTier: n,
                premiumModalAnalyticsLocation: A,
                isPersistentCTA: !0,
                hasActivePromotion: _,
                shinyButtonClassName: p ? void 0 : g.PJ
            }), (0, i.jsx)(c.A, {
                className: g.x6,
                premiumModalAnalyticsLocation: A
            })]
        })
    })
}