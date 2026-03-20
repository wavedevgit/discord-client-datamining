/** chunk id: 44120 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968);
n(64700);
var l = n(835245),
    i = n(397927),
    r = n(73153),
    s = n(391048),
    o = n(636099),
    c = n(608805),
    d = n(120700),
    u = n(589078),
    m = n(979286),
    x = n(287809),
    _ = n(954571),
    g = n(166532),
    f = n(301518),
    p = n(652215);
let h = new Set([g.pn.REVIEW, g.pn.CONFIRM, g.pn.GIFT_CUSTOMIZATION]);

function v(e) {
    let t, {
            skuId: u,
            analyticsLocations: g,
            analyticsObject: v,
            isGift: j = !1,
            giftMessage: I,
            giftingOrigin: b,
            giftRecipient: C,
            onClose: E,
            onComplete: N
        } = e,
        T = !1,
        S = (0, l.A)(),
        L = j ? "gift-payment-modal" : "payment-modal",
        k = x.default.getCurrentUser();
    k?.verified ? (r.h.wait(() => {
        r.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), A({
        loadId: S,
        skuId: u,
        analyticsLocations: g,
        onStepChange: e => {
            t = e
        },
        modalKey: L,
        isGift: j,
        giftMessage: I,
        giftingOrigin: b,
        giftRecipient: C,
        onClose: E,
        onCloseCallback: () => {
            if ((0, f.S)({
                    checkoutSucceeded: T
                }), !T) {
                let e = (0, c.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT
                });
                _.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: S,
                    payment_type: p.frM[p.VVm.ONE_TIME],
                    location: v,
                    is_gift: j,
                    sku_id: u,
                    location_stack: g,
                    checkout_design: e ? c.rS.UNIFIED : c.rS.LEGACY
                })
            }(0, s.ET)(), (0, o.z)(), E?.(T), T && (0, m.gB)()
        },
        onCloseRequest: () => {
            null != t && h.has(t) && (0, i.OoC)(L)
        },
        onComplete: () => {
            T = !0, N?.()
        }
    })) : (0, i.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
        return t => {
            let {
                onClose: n,
                ...l
            } = t;
            return (0, a.jsx)(e, {
                ...l,
                onClose: () => {
                    n(), E?.(!1)
                }
            })
        }
    })
}
let A = e => {
    let {
        loadId: t,
        skuId: n,
        analyticsLocations: a,
        onStepChange: l,
        modalKey: i,
        isGift: r = !1,
        giftMessage: s,
        giftingOrigin: o,
        giftRecipient: c,
        onClose: d,
        onCloseCallback: m,
        onCloseRequest: x,
        onComplete: _
    } = e;
    return (0, u.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: a,
        giftContextProps: {
            isGift: r,
            giftMessage: s,
            giftingOrigin: o,
            giftRecipient: c
        },
        onClose: d,
        onComplete: _,
        flowSpecificOptions: {
            onStepChange: l
        },
        openModalOptions: {
            modalKey: i,
            onCloseCallback: m,
            onCloseRequest: x
        }
    })
}