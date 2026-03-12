/** chunk id: 965591 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(490249),
    r = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(927578),
    u = n(473702),
    _ = n(985018),
    g = n(741833),
    A = n(67423);
let m = function(e) {
    let {
        isVisible: t,
        premiumSubscription: s,
        churnDiscountOffer: m,
        discountedPrice: h
    } = e, {
        analyticsLocations: p
    } = (0, d.Ay)(o.A.CHURN_DISCOUNT_PERSISTENT_CTA), x = (0, r.zhh)({
        transform: t ? "translateY(-100%)" : "translateY(0%)",
        opacity: +!!t,
        config: {
            tension: 120,
            friction: 12
        }
    });
    return (0, i.jsx)(a.animated.div, {
        className: l()(g.iE, {
            [g.q4]: !t
        }),
        style: x,
        children: (0, i.jsxs)("div", {
            className: g.iJ,
            children: [(0, i.jsx)("img", {
                alt: "",
                src: A,
                className: g.oU
            }), (0, i.jsxs)("div", {
                className: g.iQ,
                children: [(0, i.jsx)(r.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: _.intl.format(_.t["3yZP0G"], {
                        percent: m.discount.amount
                    })
                }), (0, i.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: _.intl.format(_.t["3Q4wCy"], {
                        numMonths: m.discount.user_usage_limit,
                        discountedPrice: h,
                        billingPeriod: (0, c.Ke)(m.discount.user_usage_limit_interval)
                    })
                })]
            }), (0, i.jsx)(r.Button, {
                variant: "expressive",
                icon: r.tvc,
                size: "md",
                text: _.intl.string(_.t.zrCzVB),
                onClick: () => void(0, r.mMO)(async () => {
                    let {
                        PremiumBrandRefreshSubscriptionCancellationModal: e
                    } = await Promise.all([n.e("41353"), n.e("35432"), n.e("36151")]).then(n.bind(n, 281439));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        premiumSubscription: s,
                        analyticsLocations: p,
                        initialStep: u.g.CONFIRM_DISCOUNT
                    })
                })
            })]
        })
    })
}