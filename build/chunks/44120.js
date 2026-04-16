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
    c = n(120700),
    d = n(589078),
    u = n(742810),
    m = n(979286),
    f = n(287809),
    x = n(954571),
    h = n(166532),
    g = n(301518),
    p = n(652215);
let _ = new Set([h.pn.REVIEW, h.pn.CONFIRM, h.pn.GIFT_CUSTOMIZATION]);

function v(e) {
    let t, {
            skuId: d,
            analyticsLocations: h,
            analyticsObject: v,
            isGift: b = !1,
            giftMessage: E,
            giftingOrigin: j,
            giftRecipient: I,
            onClose: C,
            onComplete: N
        } = e,
        S = !1,
        T = (0, l.A)(),
        y = b ? "gift-payment-modal" : "payment-modal",
        L = f.default.getCurrentUser();
    L?.verified ? (r.h.wait(() => {
        r.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), A({
        loadId: T,
        skuId: d,
        analyticsLocations: h,
        onStepChange: e => {
            t = e
        },
        modalKey: y,
        isGift: b,
        giftMessage: E,
        giftingOrigin: j,
        giftRecipient: I,
        onClose: C,
        onCloseCallback: () => {
            if ((0, g.S)({
                    checkoutSucceeded: S
                }), !S) {
                let e = (0, u.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT
                });
                x.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: T,
                    payment_type: p.frM[p.VVm.ONE_TIME],
                    location: v,
                    is_gift: b,
                    sku_id: d,
                    location_stack: h,
                    checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                    checkout_flow: c.C.COLLECTIBLES_CHECKOUT
                })
            }(0, s.ET)(), (0, o.z)(), C?.(S), S && (0, m.gB)()
        },
        onCloseRequest: () => {
            null != t && _.has(t) && (0, i.OoC)(y)
        },
        onComplete: () => {
            S = !0, N?.()
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
                    n(), C?.(!1)
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
        onClose: u,
        onCloseCallback: m,
        onCloseRequest: f,
        onComplete: x
    } = e;
    return (0, d.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: a,
        giftContextProps: {
            isGift: r,
            giftMessage: s,
            giftingOrigin: o,
            giftRecipient: c
        },
        onClose: u,
        onComplete: x,
        flowSpecificOptions: {
            onStepChange: l
        },
        openModalOptions: {
            modalKey: i,
            onCloseCallback: m,
            onCloseRequest: f
        }
    })
}