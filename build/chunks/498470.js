/** chunk id: 498470 params = (module,exports,require) **/
n.d(t, {
    h: () => o
});
var i = n(232582),
    s = n(532794),
    l = n(976860),
    r = n(788868),
    a = n(652215);

function o(e) {
    let {
        buttonAction: t,
        analyticsLocations: n = [],
        analyticsLocation: o,
        onClose: d
    } = e;
    switch (t) {
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                (0, l.pX)(a.BVt.APPLICATION_STORE), d?.()
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () => (0, s.A)({
                subscriptionTier: r.pe.TIER_1,
                analyticsLocations: n,
                analyticsObject: {
                    ...o,
                    object: a.ZSU.BUTTON_CTA,
                    objectType: a.AnalyticsObjectTypes.TIER_1
                },
                onClose: e => {
                    e && d?.()
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
                subscriptionTier: r.pe.TIER_2,
                analyticsLocations: n,
                analyticsObject: {
                    ...o,
                    object: a.ZSU.BUTTON_CTA,
                    objectType: a.AnalyticsObjectTypes.TIER_2
                },
                onClose: e => {
                    e && d?.()
                }
            })
    }
}