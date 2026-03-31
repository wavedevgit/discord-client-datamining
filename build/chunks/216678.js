/** chunk id: 216678 params = (module,exports,require) **/
e.d(i, {
    A: () => d
});
var n = e(627968);
e(64700);
var l = e(835245),
    s = e(397927),
    a = e(391048),
    r = e(636099),
    o = e(742810),
    u = e(954571),
    c = e(652215);

function d(t) {
    let {
        applicationId: i,
        skuId: d,
        onClose: S,
        onComplete: p,
        analyticsLocations: I,
        analyticsLocationObject: A,
        contextKey: _,
        isGift: T = !1,
        checkoutFlow: E
    } = t, C = !1, f = (0, l.A)();
    (0, s.mMO)(async () => {
        let {
            default: t
        } = await e.e("53068").then(e.bind(e, 226151));
        return e => {
            let {
                onClose: l,
                ...s
            } = e;
            return (0, n.jsx)(t, {
                ...s,
                loadId: f,
                applicationId: i,
                skuId: d,
                analyticsLocations: I,
                analyticsLocationObject: A,
                isGift: T,
                onClose: t => {
                    l(), S?.(t)
                },
                onComplete: t => {
                    C = !0, p?.(t)
                },
                checkoutFlow: E
            })
        }
    }, {
        contextKey: _,
        onCloseCallback: () => {
            if (!C) {
                let t = (0, o.q1)({
                    location: "StandardOneTimePaymentModal",
                    unifiedCheckoutFlow: E
                });
                u.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: f,
                    payment_type: c.frM[c.VVm.ONE_TIME],
                    location: A,
                    is_gift: T,
                    sku_id: d,
                    application_id: i,
                    location_stack: I,
                    checkout_design: t ? o.rS.UNIFIED : o.rS.LEGACY,
                    checkout_flow: E
                })
            }(0, a.ET)(), (0, r.z)(), S?.(C)
        },
        onCloseRequest: c.tEg
    })
}