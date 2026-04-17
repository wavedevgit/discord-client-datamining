/** chunk id: 652165 params = (module,exports,require) **/
a.d(t, {
    B4: () => u,
    o6: () => l
});
var r = a(835245);
a(192308);
var n = a(397927),
    o = a(73153),
    i = a(589078),
    c = a(301518),
    _ = a(373856),
    d = a(652215);
a(231723);
let s = "orb-checkout-payment-modal-key",
    l = () => (0, n.Ry6)(s),
    u = e => {
        let {
            skuId: t,
            onCheckoutSuccess: a,
            analyticsLocations: o = [],
            analyticsSourceLocation: i,
            discoverySessionId: l,
            applicationId: u,
            onCloseCallback: p
        } = e, f = (0, r.A)(), b = !1;
        return m({
            loadId: f,
            discoverySessionId: l,
            skuId: t,
            onCheckoutSuccess: e => {
                b || a(e), b = !0
            },
            applicationId: u,
            analyticsLocations: o,
            analyticsSourceLocation: i,
            onCloseCallback: () => {
                (0, c.S)({
                    checkoutSucceeded: b
                }), p?.()
            },
            onCloseRequest: () => {
                b || (0, _.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: f,
                    discoverySessionId: l,
                    skuId: t,
                    analyticsLocations: o,
                    analyticsSourceLocation: i
                }), (0, n.OoC)(s)
            }
        })
    },
    m = e => {
        let {
            loadId: t,
            discoverySessionId: a,
            skuId: r,
            onCheckoutSuccess: n,
            analyticsLocations: c = [],
            analyticsSourceLocation: _,
            applicationId: d,
            onCloseCallback: l,
            onCloseRequest: u
        } = e;
        return o.h.wait(() => {
            o.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, i.Tt)().openCheckoutModal({
            loadId: t,
            discoverySessionId: a,
            skuId: r,
            applicationId: d,
            analyticsLocations: c,
            analyticsSourceLocation: _,
            flowSpecificOptions: {
                onCheckoutSuccess: n
            },
            openModalOptions: {
                onCloseCallback: l,
                modalKey: s,
                onCloseRequest: u
            }
        })
    }