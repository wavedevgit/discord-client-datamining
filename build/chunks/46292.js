/** chunk id: 46292 params = (module,exports,require) **/
r.d(t, {
    PremiumResubscribeModal: () => x
});
var o = r(627968),
    n = r(64700),
    a = r(284009),
    i = r.n(a),
    _ = r(688810),
    s = r(937008),
    l = r(156312),
    c = r(166532),
    d = r(639289),
    p = r(674619),
    u = r(927578),
    m = r(480254),
    b = r(232392),
    C = r(190269),
    h = r(788868);
let x = e => {
    let {
        analyticsLocations: t,
        premiumSubscription: r
    } = e, a = (0, u.EL)(r)?.planId, x = null != a ? (0, u.m6)(a) : null;
    i()(null != x, "Should not be resubscribing Nitro without premiumType");
    let g = x === h.PremiumTypes.TIER_0,
        [S, I] = n.useState(b.g.CONFIRM),
        f = n.useCallback(() => {
            switch (S) {
                case b.g.CONFIRM:
                    return (0, o.jsx)(m.m, {
                        ...e,
                        setStep: I
                    });
                case b.g.SUCCESS:
                    return (0, o.jsx)(C.B, {
                        ...e,
                        premiumType: x
                    });
                default:
                    return (0, o.jsx)(m.m, {
                        ...e,
                        setStep: I
                    })
            }
        }, [S, e, x]);
    return (0, o.jsx)(_.f5, {
        value: t,
        children: (0, o.jsx)(l.PaymentContextProvider, {
            activeSubscription: r,
            stepConfigs: (0, p.E)(),
            skuIDs: [],
            breadcrumbs: [c.pn.CONFIRM],
            children: (0, o.jsx)(s.Mq, {
                children: (0, o.jsx)(d.A, {
                    isConfirmationStep: S === b.g.SUCCESS,
                    isEligibleForWowMoment: !g,
                    shouldPrefetchWowMoment: !g,
                    children: f()
                })
            })
        })
    })
}