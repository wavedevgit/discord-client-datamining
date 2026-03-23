/** chunk id: 931088 params = (module,exports,require) **/
l.d(t, {
    m: () => b
});
var a = l(627968),
    n = l(64700),
    r = l(793574),
    i = l(688810),
    o = l(95337),
    s = l(412314),
    u = l(456459),
    c = l(473702),
    d = l(916974),
    p = l(347378),
    m = l(606423),
    h = l(652215);
let b = e => {
        let {
            transitionState: t,
            onClose: l,
            premiumSubscription: o,
            premiumType: s,
            churnDiscount: u,
            planId: c,
            renewalInvoice: p,
            renewalInvoiceDetails: m,
            errorOnCancel: b,
            errorOnRedeem: y,
            setActiveStep: f,
            activeStep: g
        } = e, {
            analyticsLocations: v
        } = (0, i.Ay)(r.A.USER_SETTINGS), [_, E] = n.useState(x(g));
        return (0, n.useEffect)(() => {
            E(x(g))
        }, [g]), (0, a.jsx)(d.CancellationContext.Provider, {
            value: {
                setStep: f,
                premiumType: s,
                onClose: l,
                transitionState: t,
                premiumSubscription: o,
                analyticsLocations: v,
                analyticsLocation: h.ThZ.USER_SETTINGS,
                confettiCanvas: null,
                churnUserDiscountOffer: u,
                isFetchingChurnDiscountOffer: !1,
                fullPrice: "$9.99",
                discountedPrice: "$4.99",
                planId: c,
                paymentsBlocked: !1,
                renewalInvoice: p,
                renewalInvoiceDetails: m,
                handleCancellation: () => new Promise((e, t) => {
                    setTimeout(() => {
                        b ? t() : e()
                    }, 1e3)
                }),
                applyOffer: () => new Promise((e, t) => {
                    setTimeout(() => {
                        y ? t() : e()
                    }, 1e3)
                }),
                pauseDuration: null,
                setPauseDuration: () => {}
            },
            children: _
        })
    },
    x = e => {
        switch (e) {
            case c.g.DISCOUNT_APPLIED:
                return (0, a.jsx)(u.V, {});
            case c.g.CONFIRM_DISCOUNT:
                return (0, a.jsx)(s.M, {});
            case c.g.CONFIRM:
                return (0, a.jsx)(o.r, {});
            case c.g.PREVIEW:
                return (0, a.jsx)(p.E, {});
            case c.g.WHAT_YOU_LOSE:
            default:
                return (0, a.jsx)(m.Z, {})
        }
    }