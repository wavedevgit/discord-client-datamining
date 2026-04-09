/** chunk id: 652165 params = (module,exports,require) **/
n.d(t, {
    B4: () => _,
    o6: () => u
});
var a = n(835245);
n(192308);
var l = n(397927),
    i = n(73153),
    s = n(589078),
    r = n(301518),
    o = n(373856),
    d = n(652215);
n(231723);
let c = "orb-checkout-payment-modal-key",
    u = () => (0, l.Ry6)(c),
    _ = e => {
        let {
            skuId: t,
            onCheckoutSuccess: n,
            analyticsLocations: i = [],
            analyticsSourceLocation: s,
            applicationId: u,
            onCloseCallback: _
        } = e, h = (0, a.A)(), p = !1;
        return m({
            loadId: h,
            skuId: t,
            onCheckoutSuccess: e => {
                p || n(e), p = !0
            },
            applicationId: u,
            analyticsLocations: i,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, r.S)({
                    checkoutSucceeded: p
                }), _?.()
            },
            onCloseRequest: () => {
                p || (0, o.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: h,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: s
                }), (0, l.OoC)(c)
            }
        })
    },
    m = e => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: a,
            analyticsLocations: l = [],
            analyticsSourceLocation: r,
            applicationId: o,
            onCloseCallback: d,
            onCloseRequest: u
        } = e;
        return i.h.wait(() => {
            i.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, s.Tt)().openCheckoutModal({
            loadId: t,
            skuId: n,
            applicationId: o,
            analyticsLocations: l,
            analyticsSourceLocation: r,
            flowSpecificOptions: {
                onCheckoutSuccess: a
            },
            openModalOptions: {
                onCloseCallback: d,
                modalKey: c,
                onCloseRequest: u
            }
        })
    }