/** chunk id: 44120, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => C
});
var r = l(627968);
l(64700);
var n = l(835245),
    i = l(397927),
    a = l(73153),
    s = l(391048),
    u = l(636099),
    o = l(608805),
    d = l(120700),
    c = l(589078),
    h = l(979286),
    A = l(287809),
    p = l(954571),
    E = l(166532),
    m = l(301518),
    f = l(652215);
let g = new Set([E.pn.REVIEW, E.pn.CONFIRM, E.pn.GIFT_CUSTOMIZATION]);

function C(e) {
    let t, {
            skuId: c,
            analyticsLocations: E,
            analyticsObject: C,
            isGift: I = !1,
            giftMessage: P,
            giftingOrigin: R,
            giftRecipient: _,
            onClose: M,
            onComplete: v,
            variantsReturnStyle: O
        } = e,
        y = !1,
        L = (0, n.A)(),
        U = I ? "gift-payment-modal" : "payment-modal",
        w = A.default.getCurrentUser();
    w?.verified ? (a.h.wait(() => {
        a.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), S({
        loadId: L,
        skuId: c,
        analyticsLocations: E,
        onStepChange: e => {
            t = e
        },
        modalKey: U,
        isGift: I,
        giftMessage: P,
        giftingOrigin: R,
        giftRecipient: _,
        onClose: M,
        onCloseCallback: () => {
            if ((0, m.S)({
                    checkoutSucceeded: y
                }), !y) {
                let e = (0, o.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT
                });
                p.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: L,
                    payment_type: f.frM[f.VVm.ONE_TIME],
                    location: C,
                    is_gift: I,
                    sku_id: c,
                    location_stack: E,
                    checkout_design: e ? o.rS.UNIFIED : o.rS.LEGACY
                })
            }(0, s.ET)(), (0, u.z)(), M?.(y), y && (0, h.gB)({
                variantsReturnStyle: O
            })
        },
        onCloseRequest: () => {
            null != t && g.has(t) && (0, i.OoC)(U)
        },
        onComplete: () => {
            y = !0, v?.()
        }
    })) : (0, i.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([l.e("12206"), l.e("90406")]).then(l.bind(l, 661925));
        return t => {
            let {
                onClose: l,
                ...n
            } = t;
            return (0, r.jsx)(e, {
                ...n,
                onClose: () => {
                    l(), M?.(!1)
                }
            })
        }
    })
}
let S = e => {
    let {
        loadId: t,
        skuId: l,
        analyticsLocations: r,
        onStepChange: n,
        modalKey: i,
        isGift: a = !1,
        giftMessage: s,
        giftingOrigin: u,
        giftRecipient: o,
        onClose: d,
        onCloseCallback: h,
        onCloseRequest: A,
        onComplete: p
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        skuId: l,
        analyticsLocations: r,
        giftContextProps: {
            isGift: a,
            giftMessage: s,
            giftingOrigin: u,
            giftRecipient: o
        },
        onClose: d,
        onComplete: p,
        flowSpecificOptions: {
            onStepChange: n
        },
        openModalOptions: {
            modalKey: i,
            onCloseCallback: h,
            onCloseRequest: A
        }
    })
}