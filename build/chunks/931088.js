/** chunk id: 931088 params = (module,exports,require) **/
l.d(t, {
    m: () => x
});
var a = l(627968),
    n = l(64700),
    r = l(793574),
    i = l(688810),
    o = l(95337),
    s = l(412314),
    u = l(456459),
    d = l(473702),
    c = l(916974),
    p = l(347378),
    m = l(606423),
    h = l(652215);
let x = e => {
        let {
            transitionState: t,
            onClose: l,
            premiumSubscription: o,
            premiumType: s,
            churnDiscount: u,
            planId: d,
            renewalInvoice: p,
            renewalInvoiceDetails: m,
            errorOnCancel: x,
            errorOnRedeem: f,
            setActiveStep: y,
            activeStep: g
        } = e, {
            analyticsLocations: v
        } = (0, i.Ay)(r.A.USER_SETTINGS), [E, _] = n.useState(b(g));
        return (0, n.useEffect)(() => {
            _(b(g))
        }, [g]), (0, a.jsx)(c.CancellationContext.Provider, {
            value: {
                setStep: y,
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
                planId: d,
                paymentsBlocked: !1,
                renewalInvoice: p,
                renewalInvoiceDetails: m,
                handleCancellation: () => new Promise((e, t) => {
                    setTimeout(() => {
                        x ? t() : e()
                    }, 1e3)
                }),
                applyOffer: () => new Promise((e, t) => {
                    setTimeout(() => {
                        f ? t() : e()
                    }, 1e3)
                }),
                pauseDuration: null,
                setPauseDuration: () => {}
            },
            children: E
        })
    },
    b = e => {
        switch (e) {
            case d.g.DISCOUNT_APPLIED:
                return (0, a.jsx)(u.V, {});
            case d.g.CONFIRM_DISCOUNT:
                return (0, a.jsx)(s.M, {});
            case d.g.CONFIRM:
                return (0, a.jsx)(o.r, {});
            case d.g.PREVIEW:
                return (0, a.jsx)(p.E, {});
            case d.g.WHAT_YOU_LOSE:
            default:
                return (0, a.jsx)(m.Z, {})
        }
    }