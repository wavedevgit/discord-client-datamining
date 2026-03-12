/** chunk id: 965591 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(490249),
    a = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(927578),
    u = n(473702),
    _ = n(985018),
    m = n(741833),
    g = n(67423);
let A = function(e) {
    let {
        isVisible: t,
        premiumSubscription: s,
        churnDiscountOffer: A,
        discountedPrice: h
    } = e, {
        analyticsLocations: x
    } = (0, d.Ay)(o.A.CHURN_DISCOUNT_PERSISTENT_CTA), p = (0, a.zhh)({
        transform: t ? "translateY(-100%)" : "translateY(0%)",
        opacity: +!!t,
        config: {
            tension: 120,
            friction: 12
        }
    });
    return (0, i.jsx)(r.animated.div, {
        className: l()(m.iE, {
            [m.q4]: !t
        }),
        style: p,
        children: (0, i.jsxs)("div", {
            className: m.iJ,
            children: [(0, i.jsx)("img", {
                alt: "",
                src: g,
                className: m.oU
            }), (0, i.jsxs)("div", {
                className: m.iQ,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: _.intl.format(_.t["3yZP0G"], {
                        percent: A.discount.amount
                    })
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: _.intl.format(_.t["3Q4wCy"], {
                        numMonths: A.discount.user_usage_limit,
                        discountedPrice: h,
                        billingPeriod: (0, c.Ke)(A.discount.user_usage_limit_interval)
                    })
                })]
            }), (0, i.jsx)(a.Button, {
                variant: "expressive",
                icon: a.tvc,
                size: "md",
                text: _.intl.string(_.t.zrCzVB),
                onClick: () => void(0, a.mMO)(async () => {
                    let {
                        PremiumBrandRefreshSubscriptionCancellationModal: e
                    } = await Promise.all([n.e("41353"), n.e("35432"), n.e("36151")]).then(n.bind(n, 281439));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        premiumSubscription: s,
                        analyticsLocations: x,
                        initialStep: u.g.CONFIRM_DISCOUNT
                    })
                })
            })]
        })
    })
}