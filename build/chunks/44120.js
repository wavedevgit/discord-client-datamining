/** chunk id: 44120 params = (module,exports,require) **/
i.d(t, {
    A: () => E
});
var r = i(627968);
i(64700);
var l = i(835245),
    n = i(397927),
    s = i(73153),
    u = i(391048),
    o = i(636099),
    a = i(120700),
    d = i(589078),
    c = i(742810),
    I = i(979286),
    h = i(287809),
    g = i(954571),
    S = i(166532),
    m = i(301518),
    A = i(652215);
let f = new Set([S.pn.REVIEW, S.pn.CONFIRM, S.pn.GIFT_CUSTOMIZATION]);

function E(e) {
    let t, {
            skuId: d,
            analyticsLocations: S,
            analyticsObject: E,
            isGift: L = !1,
            giftMessage: p,
            giftingOrigin: _,
            giftRecipient: v,
            onClose: M,
            onComplete: x
        } = e,
        O = !1,
        R = (0, l.A)(),
        k = L ? "gift-payment-modal" : "payment-modal",
        U = h.default.getCurrentUser();
    U?.verified ? (s.h.wait(() => {
        s.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), C({
        loadId: R,
        skuId: d,
        analyticsLocations: S,
        onStepChange: e => {
            t = e
        },
        modalKey: k,
        isGift: L,
        giftMessage: p,
        giftingOrigin: _,
        giftRecipient: v,
        onClose: M,
        onCloseCallback: () => {
            if ((0, m.S)({
                    checkoutSucceeded: O
                }), !O) {
                let e = (0, c.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: a.C.COLLECTIBLES_CHECKOUT
                });
                g.default.track(A.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: R,
                    payment_type: A.frM[A.VVm.ONE_TIME],
                    location: E,
                    is_gift: L,
                    sku_id: d,
                    location_stack: S,
                    checkout_design: e ? c.rS.UNIFIED : c.rS.LEGACY,
                    checkout_flow: a.C.COLLECTIBLES_CHECKOUT
                })
            }(0, u.ET)(), (0, o.z)(), M?.(O), O && (0, I.gB)()
        },
        onCloseRequest: () => {
            null != t && f.has(t) && (0, n.OoC)(k)
        },
        onComplete: () => {
            O = !0, x?.()
        }
    })) : (0, n.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([i.e("12206"), i.e("90406")]).then(i.bind(i, 661925));
        return t => {
            let {
                onClose: i,
                ...l
            } = t;
            return (0, r.jsx)(e, {
                ...l,
                onClose: () => {
                    i(), M?.(!1)
                }
            })
        }
    })
}
let C = e => {
    let {
        loadId: t,
        skuId: i,
        analyticsLocations: r,
        onStepChange: l,
        modalKey: n,
        isGift: s = !1,
        giftMessage: u,
        giftingOrigin: o,
        giftRecipient: a,
        onClose: c,
        onCloseCallback: I,
        onCloseRequest: h,
        onComplete: g
    } = e;
    return (0, d.Tx)().openCheckoutModal({
        loadId: t,
        skuId: i,
        analyticsLocations: r,
        giftContextProps: {
            isGift: s,
            giftMessage: u,
            giftingOrigin: o,
            giftRecipient: a
        },
        onClose: c,
        onComplete: g,
        flowSpecificOptions: {
            onStepChange: l
        },
        openModalOptions: {
            modalKey: n,
            onCloseCallback: I,
            onCloseRequest: h
        }
    })
}