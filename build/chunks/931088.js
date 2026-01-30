/** chunk id: 931088, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(793574),
    o = n(688810),
    s = n(95337),
    l = n(412314),
    c = n(456459),
    u = n(473702),
    d = n(916974),
    f = n(347378),
    p = n(606423),
    _ = n(652215);
let h = e => {
        let {
            transitionState: t,
            onClose: n,
            premiumSubscription: s,
            premiumType: l,
            churnDiscount: c,
            planId: u,
            renewalInvoice: f,
            renewalInvoiceDetails: p,
            errorOnCancel: h,
            errorOnRedeem: g,
            setActiveStep: E,
            activeStep: y
        } = e, {
            analyticsLocations: b
        } = (0, o.Ay)(a.A.USER_SETTINGS), [O, v] = i.useState(m(y));
        return (0, i.useEffect)(() => {
            v(m(y))
        }, [y]), (0, r.jsx)(d.CancellationContext.Provider, {
            value: {
                setStep: E,
                premiumType: l,
                onClose: n,
                transitionState: t,
                premiumSubscription: s,
                analyticsLocations: b,
                analyticsLocation: _.ThZ.USER_SETTINGS,
                confettiCanvas: null,
                churnUserDiscountOffer: c,
                isFetchingChurnDiscountOffer: !1,
                fullPrice: "$9.99",
                discountedPrice: "$4.99",
                planId: u,
                paymentsBlocked: !1,
                renewalInvoice: f,
                renewalInvoiceDetails: p,
                handleCancellation: () => new Promise((e, t) => {
                    setTimeout(() => {
                        h ? t() : e()
                    }, 1e3)
                }),
                applyOffer: () => new Promise((e, t) => {
                    setTimeout(() => {
                        g ? t() : e()
                    }, 1e3)
                }),
                pauseDuration: null,
                setPauseDuration: () => {}
            },
            children: O
        })
    },
    m = e => {
        switch (e) {
            case u.g.DISCOUNT_APPLIED:
                return (0, r.jsx)(c.V, {});
            case u.g.CONFIRM_DISCOUNT:
                return (0, r.jsx)(l.M, {});
            case u.g.CONFIRM:
                return (0, r.jsx)(s.r, {});
            case u.g.PREVIEW:
                return (0, r.jsx)(f.E, {});
            case u.g.WHAT_YOU_LOSE:
            default:
                return (0, r.jsx)(p.Z, {})
        }
    }