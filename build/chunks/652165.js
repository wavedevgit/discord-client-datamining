/** chunk id: 652165 params = (module,exports,require) **/
"use strict";
r.d(t, {
    B4: () => m,
    o6: () => u
});
var n = r(835245);
r(192308);
var i = r(397927),
    s = r(73153),
    a = r(589078),
    l = r(301518),
    o = r(373856),
    c = r(652215);
r(231723);
let d = "orb-checkout-payment-modal-key",
    u = () => (0, i.Ry6)(d),
    m = e => {
        let {
            skuId: t,
            onCheckoutSuccess: r,
            analyticsLocations: s = [],
            analyticsSourceLocation: a,
            onCloseCallback: u
        } = e, m = (0, n.A)(), h = !1;
        return p({
            loadId: m,
            skuId: t,
            onCheckoutSuccess: e => {
                h || r(e), h = !0
            },
            analyticsLocations: s,
            analyticsSourceLocation: a,
            onCloseCallback: () => {
                (0, l.S)({
                    checkoutSucceeded: h
                }), u?.()
            },
            onCloseRequest: () => {
                h || (0, o.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                    loadId: m,
                    skuId: t,
                    analyticsLocations: s,
                    analyticsSourceLocation: a
                }), (0, i.OoC)(d)
            }
        })
    },
    p = e => {
        let {
            loadId: t,
            skuId: r,
            onCheckoutSuccess: n,
            analyticsLocations: i = [],
            analyticsSourceLocation: l,
            onCloseCallback: o,
            onCloseRequest: c
        } = e;
        return s.h.wait(() => {
            s.h.dispatch({
                type: "PAYMENT_MODAL_OPEN"
            })
        }), (0, a.Tt)().openCheckoutModal({
            loadId: t,
            skuId: r,
            analyticsLocations: i,
            analyticsSourceLocation: l,
            flowSpecificOptions: {
                onCheckoutSuccess: n
            },
            openModalOptions: {
                onCloseCallback: o,
                modalKey: d,
                onCloseRequest: c
            }
        })
    }