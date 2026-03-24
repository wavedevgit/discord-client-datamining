/** chunk id: 44120 params = (module,exports,require) **/
a.d(t, {
    A: () => j
});
var l = a(627968);
a(64700);
var n = a(835245),
    r = a(397927),
    s = a(73153),
    i = a(391048),
    o = a(636099),
    d = a(608805),
    c = a(120700),
    u = a(589078),
    x = a(979286),
    h = a(287809),
    m = a(954571),
    b = a(166532),
    p = a(301518),
    g = a(652215);
let f = new Set([b.pn.REVIEW, b.pn.CONFIRM, b.pn.GIFT_CUSTOMIZATION]);

function j(e) {
    let t, {
            skuId: u,
            analyticsLocations: b,
            analyticsObject: j,
            isGift: y = !1,
            giftMessage: k,
            giftingOrigin: _,
            giftRecipient: A,
            onClose: S,
            onComplete: C
        } = e,
        I = !1,
        T = (0, n.A)(),
        w = y ? "gift-payment-modal" : "payment-modal",
        V = h.default.getCurrentUser();
    V?.verified ? (s.h.wait(() => {
        s.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), v({
        loadId: T,
        skuId: u,
        analyticsLocations: b,
        onStepChange: e => {
            t = e
        },
        modalKey: w,
        isGift: y,
        giftMessage: k,
        giftingOrigin: _,
        giftRecipient: A,
        onClose: S,
        onCloseCallback: () => {
            if ((0, p.S)({
                    checkoutSucceeded: I
                }), !I) {
                let e = (0, d.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT
                });
                m.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: T,
                    payment_type: g.frM[g.VVm.ONE_TIME],
                    location: j,
                    is_gift: y,
                    sku_id: u,
                    location_stack: b,
                    checkout_design: e ? d.rS.UNIFIED : d.rS.LEGACY
                })
            }(0, i.ET)(), (0, o.z)(), S?.(I), I && (0, x.gB)()
        },
        onCloseRequest: () => {
            null != t && f.has(t) && (0, r.OoC)(w)
        },
        onComplete: () => {
            I = !0, C?.()
        }
    })) : (0, r.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([a.e("12206"), a.e("90406")]).then(a.bind(a, 661925));
        return t => {
            let {
                onClose: a,
                ...n
            } = t;
            return (0, l.jsx)(e, {
                ...n,
                onClose: () => {
                    a(), S?.(!1)
                }
            })
        }
    })
}
let v = e => {
    let {
        loadId: t,
        skuId: a,
        analyticsLocations: l,
        onStepChange: n,
        modalKey: r,
        isGift: s = !1,
        giftMessage: i,
        giftingOrigin: o,
        giftRecipient: d,
        onClose: c,
        onCloseCallback: x,
        onCloseRequest: h,
        onComplete: m
    } = e;
    return (0, u.Tx)().openCheckoutModal({
        loadId: t,
        skuId: a,
        analyticsLocations: l,
        giftContextProps: {
            isGift: s,
            giftMessage: i,
            giftingOrigin: o,
            giftRecipient: d
        },
        onClose: c,
        onComplete: m,
        flowSpecificOptions: {
            onStepChange: n
        },
        openModalOptions: {
            modalKey: r,
            onCloseCallback: x,
            onCloseRequest: h
        }
    })
}