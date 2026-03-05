/** chunk id: 652165 params = (module,exports,require) **/
a.d(n, {
    B4: () => p,
    o6: () => c
});
var t = a(835245);
a(192308);
var i = a(397927),
    l = a(73153),
    r = a(589078),
    s = a(301518),
    o = a(373856),
    d = a(652215);
a(231723);
let u = "orb-checkout-payment-modal-key",
    c = () => (0, i.Ry6)(u),
    p = e => {
        let {
            skuId: n,
            onCheckoutSuccess: a,
            analyticsLocations: l = [],
            analyticsSourceLocation: r,
            onCloseCallback: c
        } = e, p = (0, t.A)(), v = !1;
        return g({
            loadId: p,
            skuId: n,
            onCheckoutSuccess: e => {
                v || a(e), v = !0
            },
            analyticsLocations: l,
            analyticsSourceLocation: r,
            onCloseCallback: () => {
                (0, s.S)({
                    checkoutSucceeded: v
                }), c?.()
            },
            onCloseRequest: () => {
                v || (0, o.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: p,
                    skuId: n,
                    analyticsLocations: l,
                    analyticsSourceLocation: r
                }), (0, i.OoC)(u)
            }
        })
    },
    g = e => {
        let {
            loadId: n,
            skuId: a,
            onCheckoutSuccess: t,
            analyticsLocations: i = [],
            analyticsSourceLocation: s,
            onCloseCallback: o,
            onCloseRequest: d
        } = e;
        return l.h.wait(() => {
            l.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, r.Tt)().openCheckoutModal({
            loadId: n,
            skuId: a,
            analyticsLocations: i,
            analyticsSourceLocation: s,
            flowSpecificOptions: {
                onCheckoutSuccess: t
            },
            openModalOptions: {
                onCloseCallback: o,
                modalKey: u,
                onCloseRequest: d
            }
        })
    }