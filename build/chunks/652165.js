/** chunk id: 652165 params = (module,exports,require) **/
a.d(t, {
    B4: () => m,
    o6: () => u
});
var n = a(835245);
a(192308);
var r = a(397927),
    i = a(73153),
    s = a(589078),
    l = a(301518),
    o = a(373856),
    c = a(652215);
a(231723);
let d = "orb-checkout-payment-modal-key",
    u = () => (0, r.Ry6)(d),
    m = e => {
        let {
            skuId: t,
            onCheckoutSuccess: a,
            analyticsLocations: i = [],
            analyticsSourceLocation: s,
            applicationId: u,
            onCloseCallback: m
        } = e, _ = (0, n.A)(), h = !1;
        return p({
            loadId: _,
            skuId: t,
            onCheckoutSuccess: e => {
                h || a(e), h = !0
            },
            applicationId: u,
            analyticsLocations: i,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, l.S)({
                    checkoutSucceeded: h
                }), m?.()
            },
            onCloseRequest: () => {
                h || (0, o.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: _,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: s
                }), (0, r.OoC)(d)
            }
        })
    },
    p = e => {
        let {
            loadId: t,
            skuId: a,
            onCheckoutSuccess: n,
            analyticsLocations: r = [],
            analyticsSourceLocation: l,
            applicationId: o,
            onCloseCallback: c,
            onCloseRequest: u
        } = e;
        return i.h.wait(() => {
            i.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, s.Tt)().openCheckoutModal({
            loadId: t,
            skuId: a,
            applicationId: o,
            analyticsLocations: r,
            analyticsSourceLocation: l,
            flowSpecificOptions: {
                onCheckoutSuccess: n
            },
            openModalOptions: {
                onCloseCallback: c,
                modalKey: d,
                onCloseRequest: u
            }
        })
    }