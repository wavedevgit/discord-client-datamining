/** chunk id: 44120 params = (module,exports,require) **/
l.d(t, {
    A: () => j
});
var a = l(627968);
l(64700);
var r = l(835245),
    n = l(397927),
    s = l(73153),
    o = l(391048),
    i = l(636099),
    d = l(120700),
    c = l(589078),
    u = l(742810),
    x = l(979286),
    h = l(287809),
    m = l(954571),
    b = l(166532),
    p = l(301518),
    g = l(652215);
let f = new Set([b.pn.REVIEW, b.pn.CONFIRM, b.pn.GIFT_CUSTOMIZATION]);

function j(e) {
    let t, {
            discoverySessionId: c,
            skuId: b,
            analyticsLocations: j,
            analyticsObject: y,
            isGift: k = !1,
            giftMessage: _,
            giftingOrigin: A,
            giftRecipient: C,
            onClose: S,
            onComplete: I
        } = e,
        T = !1,
        w = (0, r.A)(),
        V = k ? "gift-payment-modal" : "payment-modal",
        E = h.default.getCurrentUser();
    E?.verified ? (s.h.wait(() => {
        s.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), v({
        loadId: w,
        discoverySessionId: c,
        skuId: b,
        analyticsLocations: j,
        onStepChange: e => {
            t = e
        },
        modalKey: V,
        isGift: k,
        giftMessage: _,
        giftingOrigin: A,
        giftRecipient: C,
        onClose: S,
        onCloseCallback: () => {
            if ((0, p.S)({
                    checkoutSucceeded: T
                }), !T) {
                let e = (0, u.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT
                });
                m.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: w,
                    discovery_session_id: c,
                    payment_type: g.frM[g.VVm.ONE_TIME],
                    location: y,
                    is_gift: k,
                    sku_id: b,
                    location_stack: j,
                    checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                    checkout_flow: d.C.COLLECTIBLES_CHECKOUT
                })
            }(0, o.ET)(), (0, i.z)(), S?.(T), T && (0, x.gB)()
        },
        onCloseRequest: () => {
            null != t && f.has(t) && (0, n.OoC)(V)
        },
        onComplete: () => {
            T = !0, I?.()
        }
    })) : (0, n.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([l.e("12206"), l.e("90406")]).then(l.bind(l, 661925));
        return t => {
            let {
                onClose: l,
                ...r
            } = t;
            return (0, a.jsx)(e, {
                ...r,
                onClose: () => {
                    l(), S?.(!1)
                }
            })
        }
    })
}
let v = e => {
    let {
        loadId: t,
        discoverySessionId: l,
        skuId: a,
        analyticsLocations: r,
        onStepChange: n,
        modalKey: s,
        isGift: o = !1,
        giftMessage: i,
        giftingOrigin: d,
        giftRecipient: u,
        onClose: x,
        onCloseCallback: h,
        onCloseRequest: m,
        onComplete: b
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        discoverySessionId: l,
        skuId: a,
        analyticsLocations: r,
        giftContextProps: {
            isGift: o,
            giftMessage: i,
            giftingOrigin: d,
            giftRecipient: u
        },
        onClose: x,
        onComplete: b,
        flowSpecificOptions: {
            onStepChange: n
        },
        openModalOptions: {
            modalKey: s,
            onCloseCallback: h,
            onCloseRequest: m
        }
    })
}