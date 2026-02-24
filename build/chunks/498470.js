/** chunk id: 498470, original params: e,t,n (module,exports,require) **/
n.d(t, {
    h: () => o
});
var i = n(232582),
    s = n(532794),
    a = n(976860),
    l = n(788868),
    r = n(652215);

function o(e) {
    let {
        buttonAction: t,
        analyticsLocations: n = [],
        analyticsLocation: o,
        onClose: c
    } = e;
    switch (t) {
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                (0, a.pX)(r.BVt.APPLICATION_STORE), c?.()
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () => (0, s.A)({
                subscriptionTier: l.pe.TIER_1,
                analyticsLocations: n,
                analyticsObject: {
                    ...o,
                    object: r.ZSU.BUTTON_CTA,
                    objectType: r.AnalyticsObjectTypes.TIER_1
                },
                onClose: e => {
                    e && c?.()
                }
            });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, s.A)({
                analyticsLocations: n
            });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () => (0, s.A)({
                subscriptionTier: l.pe.TIER_2,
                analyticsLocations: n,
                analyticsObject: {
                    ...o,
                    object: r.ZSU.BUTTON_CTA,
                    objectType: r.AnalyticsObjectTypes.TIER_2
                },
                onClose: e => {
                    e && c?.()
                }
            })
    }
}