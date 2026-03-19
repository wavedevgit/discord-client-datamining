/** chunk id: 652165 params = (module,exports,require) **/
n.d(t, {
    B4: () => u,
    o6: () => s
});
var r = n(835245);
n(192308);
var a = n(397927),
    o = n(73153),
    _ = n(589078),
    i = n(301518),
    d = n(373856),
    l = n(652215);
n(231723);
let c = "orb-checkout-payment-modal-key",
    s = () => (0, a.Ry6)(c),
    u = e => {
        let {
            skuId: t,
            onCheckoutSuccess: n,
            analyticsLocations: o = [],
            analyticsSourceLocation: _,
            onCloseCallback: s
        } = e, u = (0, r.A)(), b = !1;
        return f({
            loadId: u,
            skuId: t,
            onCheckoutSuccess: e => {
                b || n(e), b = !0
            },
            analyticsLocations: o,
            analyticsSourceLocation: _,
            onCloseCallback: () => {
                (0, i.S)({
                    checkoutSucceeded: b
                }), s?.()
            },
            onCloseRequest: () => {
                b || (0, d.g)(l.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: u,
                    skuId: t,
                    analyticsLocations: o,
                    analyticsSourceLocation: _
                }), (0, a.OoC)(c)
            }
        })
    },
    f = e => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
            analyticsLocations: a = [],
            analyticsSourceLocation: i,
            onCloseCallback: d,
            onCloseRequest: l
        } = e;
        return o.h.wait(() => {
            o.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, _.Tt)().openCheckoutModal({
            loadId: t,
            skuId: n,
            analyticsLocations: a,
            analyticsSourceLocation: i,
            flowSpecificOptions: {
                onCheckoutSuccess: r
            },
            openModalOptions: {
                onCloseCallback: d,
                modalKey: c,
                onCloseRequest: l
            }
        })
    }