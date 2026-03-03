/** chunk id: 44120, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968);
n(64700);
var s = n(835245),
    l = n(397927),
    a = n(73153),
    r = n(391048),
    o = n(636099),
    c = n(608805),
    d = n(120700),
    u = n(589078),
    h = n(979286),
    A = n(287809),
    p = n(954571),
    m = n(166532),
    g = n(301518),
    _ = n(652215);
let f = new Set([m.pn.REVIEW, m.pn.CONFIRM, m.pn.GIFT_CUSTOMIZATION]);

function x(e) {
    let t, {
            skuId: u,
            analyticsLocations: m,
            analyticsObject: x,
            isGift: E = !1,
            giftMessage: I,
            giftingOrigin: N,
            giftRecipient: S,
            onClose: b,
            onComplete: T,
            variantsReturnStyle: v
        } = e,
        y = !1,
        j = (0, s.A)(),
        R = E ? "gift-payment-modal" : "payment-modal",
        O = A.default.getCurrentUser();
    O?.verified ? (a.h.wait(() => {
        a.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), C({
        loadId: j,
        skuId: u,
        analyticsLocations: m,
        onStepChange: e => {
            t = e
        },
        modalKey: R,
        isGift: E,
        giftMessage: I,
        giftingOrigin: N,
        giftRecipient: S,
        onClose: b,
        onCloseCallback: () => {
            if ((0, g.S)({
                    checkoutSucceeded: y
                }), !y) {
                let e = (0, c.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT
                });
                p.default.track(_.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: j,
                    payment_type: _.frM[_.VVm.ONE_TIME],
                    location: x,
                    is_gift: E,
                    sku_id: u,
                    location_stack: m,
                    checkout_design: e ? c.rS.UNIFIED : c.rS.LEGACY
                })
            }(0, r.ET)(), (0, o.z)(), b?.(y), y && (0, h.gB)({
                variantsReturnStyle: v
            })
        },
        onCloseRequest: () => {
            null != t && f.has(t) && (0, l.OoC)(R)
        },
        onComplete: () => {
            y = !0, T?.()
        }
    })) : (0, l.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
        return t => {
            let {
                onClose: n,
                ...s
            } = t;
            return (0, i.jsx)(e, {
                ...s,
                onClose: () => {
                    n(), b?.(!1)
                }
            })
        }
    })
}
let C = e => {
    let {
        loadId: t,
        skuId: n,
        analyticsLocations: i,
        onStepChange: s,
        modalKey: l,
        isGift: a = !1,
        giftMessage: r,
        giftingOrigin: o,
        giftRecipient: c,
        onClose: d,
        onCloseCallback: h,
        onCloseRequest: A,
        onComplete: p
    } = e;
    return (0, u.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: i,
        giftContextProps: {
            isGift: a,
            giftMessage: r,
            giftingOrigin: o,
            giftRecipient: c
        },
        onClose: d,
        onComplete: p,
        flowSpecificOptions: {
            onStepChange: s
        },
        openModalOptions: {
            modalKey: l,
            onCloseCallback: h,
            onCloseRequest: A
        }
    })
}