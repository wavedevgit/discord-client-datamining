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
    c = n(636099),
    o = n(120700),
    d = n(589078),
    u = n(742810),
    m = n(979286),
    x = n(287809),
    h = n(954571),
    g = n(166532),
    f = n(301518),
    p = n(652215);
let _ = new Set([g.pn.REVIEW, g.pn.CONFIRM, g.pn.GIFT_CUSTOMIZATION]);

function v(e) {
    let t, {
            skuId: d,
            analyticsLocations: g,
            analyticsObject: v,
            isGift: j = !1,
            giftMessage: E,
            giftingOrigin: C,
            giftRecipient: I,
            onClose: b,
            onComplete: N
        } = e,
        S = !1,
        T = (0, l.A)(),
        k = j ? "gift-payment-modal" : "payment-modal",
        L = x.default.getCurrentUser();
    L?.verified ? (r.h.wait(() => {
        r.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), A({
        loadId: T,
        skuId: d,
        analyticsLocations: g,
        onStepChange: e => {
            t = e
        },
        modalKey: k,
        isGift: j,
        giftMessage: E,
        giftingOrigin: C,
        giftRecipient: I,
        onClose: b,
        onCloseCallback: () => {
            if ((0, f.S)({
                    checkoutSucceeded: S
                }), !S) {
                let e = (0, u.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: o.C.COLLECTIBLES_CHECKOUT
                });
                h.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: T,
                    payment_type: p.frM[p.VVm.ONE_TIME],
                    location: v,
                    is_gift: j,
                    sku_id: d,
                    location_stack: g,
                    checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                    checkout_flow: o.C.COLLECTIBLES_CHECKOUT
                })
            }(0, s.ET)(), (0, c.z)(), b?.(S), S && (0, m.gB)()
        },
        onCloseRequest: () => {
            null != t && _.has(t) && (0, i.OoC)(k)
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
                    n(), b?.(!1)
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
        giftingOrigin: c,
        giftRecipient: o,
        onClose: u,
        onCloseCallback: m,
        onCloseRequest: x,
        onComplete: h
    } = e;
    return (0, d.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: a,
        giftContextProps: {
            isGift: r,
            giftMessage: s,
            giftingOrigin: c,
            giftRecipient: o
        },
        onClose: u,
        onComplete: h,
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