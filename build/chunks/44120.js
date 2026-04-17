/** chunk id: 44120 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968);
n(64700);
var a = n(835245),
    i = n(397927),
    r = n(73153),
    s = n(391048),
    o = n(636099),
    c = n(120700),
    d = n(589078),
    u = n(742810),
    m = n(979286),
    f = n(287809),
    h = n(954571),
    x = n(166532),
    g = n(301518),
    p = n(652215);
let _ = new Set([x.pn.REVIEW, x.pn.CONFIRM, x.pn.GIFT_CUSTOMIZATION]);

function v(e) {
    let t, {
            discoverySessionId: d,
            skuId: x,
            analyticsLocations: v,
            analyticsObject: b,
            isGift: E = !1,
            giftMessage: j,
            giftingOrigin: I,
            giftRecipient: C,
            onClose: N,
            onComplete: S
        } = e,
        T = !1,
        y = (0, a.A)(),
        L = E ? "gift-payment-modal" : "payment-modal",
        k = f.default.getCurrentUser();
    k?.verified ? (r.h.wait(() => {
        r.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), A({
        loadId: y,
        discoverySessionId: d,
        skuId: x,
        analyticsLocations: v,
        onStepChange: e => {
            t = e
        },
        modalKey: L,
        isGift: E,
        giftMessage: j,
        giftingOrigin: I,
        giftRecipient: C,
        onClose: N,
        onCloseCallback: () => {
            if ((0, g.S)({
                    checkoutSucceeded: T
                }), !T) {
                let e = (0, u.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT
                });
                h.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: y,
                    discovery_session_id: d,
                    payment_type: p.frM[p.VVm.ONE_TIME],
                    location: b,
                    is_gift: E,
                    sku_id: x,
                    location_stack: v,
                    checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                    checkout_flow: c.C.COLLECTIBLES_CHECKOUT
                })
            }(0, s.ET)(), (0, o.z)(), N?.(T), T && (0, m.gB)()
        },
        onCloseRequest: () => {
            null != t && _.has(t) && (0, i.OoC)(L)
        },
        onComplete: () => {
            T = !0, S?.()
        }
    })) : (0, i.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
        return t => {
            let {
                onClose: n,
                ...a
            } = t;
            return (0, l.jsx)(e, {
                ...a,
                onClose: () => {
                    n(), N?.(!1)
                }
            })
        }
    })
}
let A = e => {
    let {
        loadId: t,
        discoverySessionId: n,
        skuId: l,
        analyticsLocations: a,
        onStepChange: i,
        modalKey: r,
        isGift: s = !1,
        giftMessage: o,
        giftingOrigin: c,
        giftRecipient: u,
        onClose: m,
        onCloseCallback: f,
        onCloseRequest: h,
        onComplete: x
    } = e;
    return (0, d.Tx)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        skuId: l,
        analyticsLocations: a,
        giftContextProps: {
            isGift: s,
            giftMessage: o,
            giftingOrigin: c,
            giftRecipient: u
        },
        onClose: m,
        onComplete: x,
        flowSpecificOptions: {
            onStepChange: i
        },
        openModalOptions: {
            modalKey: r,
            onCloseCallback: f,
            onCloseRequest: h
        }
    })
}