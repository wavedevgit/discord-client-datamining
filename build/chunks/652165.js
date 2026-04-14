/** chunk id: 652165 params = (module,exports,require) **/
r.d(t, {
    B4: () => p,
    o6: () => d
});
var n = r(835245);
r(192308);
var l = r(397927),
    i = r(73153),
    s = r(589078),
    a = r(301518),
    o = r(373856),
    u = r(652215);
r(231723);
let c = "orb-checkout-payment-modal-key",
    d = () => (0, l.Ry6)(c),
    p = e => {
        let {
            skuId: t,
            onCheckoutSuccess: r,
            analyticsLocations: i = [],
            analyticsSourceLocation: s,
            applicationId: d,
            onCloseCallback: p
        } = e, C = (0, n.A)(), m = !1;
        return k({
            loadId: C,
            skuId: t,
            onCheckoutSuccess: e => {
                m || r(e), m = !0
            },
            applicationId: d,
            analyticsLocations: i,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, a.S)({
                    checkoutSucceeded: m
                }), p?.()
            },
            onCloseRequest: () => {
                m || (0, o.g)(u.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: C,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: s
                }), (0, l.OoC)(c)
            }
        })
    },
    k = e => {
        let {
            loadId: t,
            skuId: r,
            onCheckoutSuccess: n,
            analyticsLocations: l = [],
            analyticsSourceLocation: a,
            applicationId: o,
            onCloseCallback: u,
            onCloseRequest: d
        } = e;
        return i.h.wait(() => {
            i.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, s.Tt)().openCheckoutModal({
            loadId: t,
            skuId: r,
            applicationId: o,
            analyticsLocations: l,
            analyticsSourceLocation: a,
            flowSpecificOptions: {
                onCheckoutSuccess: n
            },
            openModalOptions: {
                onCloseCallback: u,
                modalKey: c,
                onCloseRequest: d
            }
        })
    }