/** Chunk was on 5606 **/
/** chunk id: 252711, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(353709),
    a = n(421380),
    o = n(397927),
    c = n(736653),
    d = n(194509),
    u = n(396375),
    p = n(652215),
    _ = n(41099);
let m = function(e) {
    let {
        isVisible: t,
        subscriptionTier: n,
        isApplicationHome: i,
        isEligibleForBogoPromotion: m
    } = e, g = (0, o.zhh)({
        transform: t ? "translateY(-100%)" : "translateY(0%)",
        opacity: +!!t,
        config: {
            tension: 120,
            friction: 12
        }
    }), f = {
        section: p.JJy.MARKETING_FLOATING_CTA
    }, b = (0, c.Ay)(), h = (0, o.Mwr)(b);
    return (0, r.jsx)(s.animated.div, {
        className: l()(_.iE, {
            [_.H8]: i,
            [_.q4]: !t
        }),
        style: g,
        children: (0, r.jsxs)("div", {
            className: i ? _.zW : _.iJ,
            children: [(0, r.jsx)(u.A, {
                color: h ? a.XD.BRAND_INVERTED : void 0,
                className: l()(_.x6, {
                    [_.Ph]: h
                }),
                subscriptionTier: n,
                premiumModalAnalyticsLocation: f,
                isPersistentCTA: !0,
                hasActivePromotion: m,
                shinyButtonClassName: h ? void 0 : _.PJ
            }), (0, r.jsx)(d.A, {
                className: _.x6,
                premiumModalAnalyticsLocation: f
            })]
        })
    })
}