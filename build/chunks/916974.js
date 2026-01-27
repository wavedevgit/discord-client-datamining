/** Chunk was on web.js **/
/** chunk id: 916974, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    CancellationContext: () => o,
    X: () => s
});
var r = n(64700),
    i = n(158954),
    a = n(788868);
let o = r.createContext({
        setStep: () => {},
        premiumType: a.PremiumTypes.TIER_0,
        onClose: () => {},
        transitionState: i.ip4.ENTERING,
        premiumSubscription: {},
        analyticsLocations: [],
        analyticsLocation: void 0,
        confettiCanvas: null,
        churnUserDiscountOffer: null,
        isFetchingChurnDiscountOffer: !1,
        paymentsBlocked: !1,
        renewalInvoice: null,
        renewalInvoiceDetails: null,
        handleCancellation: async () => {},
        applyOffer: async () => {},
        pauseDuration: null,
        setPauseDuration: () => {}
    }),
    s = () => r.useContext(o)