/** chunk id: 652165, original params: t,e,a (module,exports,require) **/
a.d(e, {
    B4: () => h,
    o6: () => d
});
var n = a(835245);
a(192308);
var l = a(397927),
    r = a(73153),
    s = a(589078),
    i = a(301518),
    o = a(373856),
    u = a(652215);
a(231723);
let c = "orb-checkout-payment-modal-key",
    d = () => (0, l.Ry6)(c),
    h = t => {
        let {
            skuId: e,
            onCheckoutSuccess: a,
            analyticsLocations: r = [],
            analyticsSourceLocation: s,
            onCloseCallback: d
        } = t, h = (0, n.A)(), v = !1;
        return p({
            loadId: h,
            skuId: e,
            onCheckoutSuccess: t => {
                v || a(t), v = !0
            },
            analyticsLocations: r,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, i.S)({
                    checkoutSucceeded: v
                }), d?.()
            },
            onCloseRequest: () => {
                v || (0, o.g)(u.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: h,
                    skuId: e,
                    analyticsLocations: r,
                    analyticsSourceLocation: s
                }), (0, l.OoC)(c)
            }
        })
    },
    p = t => {
        let {
            loadId: e,
            skuId: a,
            onCheckoutSuccess: n,
            analyticsLocations: l = [],
            analyticsSourceLocation: i,
            onCloseCallback: o,
            onCloseRequest: u
        } = t;
        return r.h.wait(() => {
            r.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, s.Tt)().openCheckoutModal({
            loadId: e,
            skuId: a,
            analyticsLocations: l,
            analyticsSourceLocation: i,
            flowSpecificOptions: {
                onCheckoutSuccess: n
            },
            openModalOptions: {
                onCloseCallback: o,
                modalKey: c,
                onCloseRequest: u
            }
        })
    }