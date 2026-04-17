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
            discoverySessionId: d,
            applicationId: p,
            onCloseCallback: C
        } = e, m = (0, n.A)(), x = !1;
        return k({
            loadId: m,
            discoverySessionId: d,
            skuId: t,
            onCheckoutSuccess: e => {
                x || r(e), x = !0
            },
            applicationId: p,
            analyticsLocations: i,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, a.S)({
                    checkoutSucceeded: x
                }), C?.()
            },
            onCloseRequest: () => {
                x || (0, o.g)(u.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: m,
                    discoverySessionId: d,
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
            discoverySessionId: r,
            skuId: n,
            onCheckoutSuccess: l,
            analyticsLocations: a = [],
            analyticsSourceLocation: o,
            applicationId: u,
            onCloseCallback: d,
            onCloseRequest: p
        } = e;
        return i.h.wait(() => {
            i.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, s.Tt)().openCheckoutModal({
            loadId: t,
            discoverySessionId: r,
            skuId: n,
            applicationId: u,
            analyticsLocations: a,
            analyticsSourceLocation: o,
            flowSpecificOptions: {
                onCheckoutSuccess: l
            },
            openModalOptions: {
                onCloseCallback: d,
                modalKey: c,
                onCloseRequest: p
            }
        })
    }