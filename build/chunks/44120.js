/** chunk id: 44120 params = (module,exports,require) **/
i.d(t, {
    A: () => f
});
var r = i(627968);
i(64700);
var l = i(835245),
    n = i(397927),
    s = i(73153),
    u = i(391048),
    a = i(636099),
    o = i(608805),
    d = i(120700),
    c = i(589078),
    h = i(979286),
    I = i(287809),
    S = i(954571),
    m = i(166532),
    A = i(301518),
    g = i(652215);
let E = new Set([m.pn.REVIEW, m.pn.CONFIRM, m.pn.GIFT_CUSTOMIZATION]);

function f(e) {
    let t, {
            skuId: c,
            analyticsLocations: m,
            analyticsObject: f,
            isGift: M = !1,
            giftMessage: p,
            giftingOrigin: C,
            giftRecipient: _,
            onClose: x,
            onComplete: v
        } = e,
        U = !1,
        R = (0, l.A)(),
        j = M ? "gift-payment-modal" : "payment-modal",
        k = I.default.getCurrentUser();
    k?.verified ? (s.h.wait(() => {
        s.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), L({
        loadId: R,
        skuId: c,
        analyticsLocations: m,
        onStepChange: e => {
            t = e
        },
        modalKey: j,
        isGift: M,
        giftMessage: p,
        giftingOrigin: C,
        giftRecipient: _,
        onClose: x,
        onCloseCallback: () => {
            if ((0, A.S)({
                    checkoutSucceeded: U
                }), !U) {
                let e = (0, o.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT
                });
                S.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: R,
                    payment_type: g.frM[g.VVm.ONE_TIME],
                    location: f,
                    is_gift: M,
                    sku_id: c,
                    location_stack: m,
                    checkout_design: e ? o.rS.UNIFIED : o.rS.LEGACY
                })
            }(0, u.ET)(), (0, a.z)(), x?.(U), U && (0, h.gB)()
        },
        onCloseRequest: () => {
            null != t && E.has(t) && (0, n.OoC)(j)
        },
        onComplete: () => {
            U = !0, v?.()
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
                    i(), x?.(!1)
                }
            })
        }
    })
}
let L = e => {
    let {
        loadId: t,
        skuId: i,
        analyticsLocations: r,
        onStepChange: l,
        modalKey: n,
        isGift: s = !1,
        giftMessage: u,
        giftingOrigin: a,
        giftRecipient: o,
        onClose: d,
        onCloseCallback: h,
        onCloseRequest: I,
        onComplete: S
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        skuId: i,
        analyticsLocations: r,
        giftContextProps: {
            isGift: s,
            giftMessage: u,
            giftingOrigin: a,
            giftRecipient: o
        },
        onClose: d,
        onComplete: S,
        flowSpecificOptions: {
            onStepChange: l
        },
        openModalOptions: {
            modalKey: n,
            onCloseCallback: h,
            onCloseRequest: I
        }
    })
}