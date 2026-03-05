/** chunk id: 400292, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(380278),
    l = n(397927),
    a = n(65470),
    r = n(792656),
    o = n(652215),
    d = n(433538);
let c = function(e) {
    let {
        isVisible: t,
        subscriptionTier: n,
        isEligibleForBogoPromotion: c
    } = e, u = (0, l.zhh)({
        transform: t ? "translateY(-100%)" : "translateY(0%)",
        opacity: +!!t,
        config: {
            tension: 120,
            friction: 12
        }
    }), _ = {
        section: o.JJy.MARKETING_FLOATING_CTA
    };
    return (0, i.jsx)(s.animated.div, {
        className: d.i,
        style: u,
        "data-mtctest-ignore": "true",
        children: (0, i.jsxs)("div", {
            className: d.U,
            children: [(0, i.jsx)(r.A, {
                size: "md",
                subscriptionTier: n,
                hasActivePromotion: !!c,
                isPersistentCTA: !0,
                premiumModalAnalyticsLocation: _
            }), (0, i.jsx)(a.A, {
                variant: "secondary",
                size: "md"
            })]
        })
    })
}