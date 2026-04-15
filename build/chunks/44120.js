/** chunk id: 44120 params = (module,exports,require) **/
a.d(t, {
    A: () => j
});
var l = a(627968);
a(64700);
var r = a(835245),
    n = a(397927),
    s = a(73153),
    i = a(391048),
    o = a(636099),
    d = a(120700),
    c = a(589078),
    u = a(742810),
    x = a(979286),
    h = a(287809),
    m = a(954571),
    b = a(166532),
    p = a(301518),
    g = a(652215);
let f = new Set([b.pn.REVIEW, b.pn.CONFIRM, b.pn.GIFT_CUSTOMIZATION]);

function j(e) {
    let t, {
            skuId: c,
            analyticsLocations: b,
            analyticsObject: j,
            isGift: y = !1,
            giftMessage: k,
            giftingOrigin: A,
            giftRecipient: _,
            onClose: S,
            onComplete: C
        } = e,
        I = !1,
        T = (0, r.A)(),
        w = y ? "gift-payment-modal" : "payment-modal",
        V = h.default.getCurrentUser();
    V?.verified ? (s.h.wait(() => {
        s.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), v({
        loadId: T,
        skuId: c,
        analyticsLocations: b,
        onStepChange: e => {
            t = e
        },
        modalKey: w,
        isGift: y,
        giftMessage: k,
        giftingOrigin: A,
        giftRecipient: _,
        onClose: S,
        onCloseCallback: () => {
            if ((0, p.S)({
                    checkoutSucceeded: I
                }), !I) {
                let e = (0, u.q1)({
                    location: "CollectiblesPaymentModal",
                    unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT
                });
                m.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: T,
                    payment_type: g.frM[g.VVm.ONE_TIME],
                    location: j,
                    is_gift: y,
                    sku_id: c,
                    location_stack: b,
                    checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                    checkout_flow: d.C.COLLECTIBLES_CHECKOUT
                })
            }(0, i.ET)(), (0, o.z)(), S?.(I), I && (0, x.gB)()
        },
        onCloseRequest: () => {
            null != t && f.has(t) && (0, n.OoC)(w)
        },
        onComplete: () => {
            I = !0, C?.()
        }
    })) : (0, n.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([a.e("12206"), a.e("90406")]).then(a.bind(a, 661925));
        return t => {
            let {
                onClose: a,
                ...r
            } = t;
            return (0, l.jsx)(e, {
                ...r,
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
        onStepChange: r,
        modalKey: n,
        isGift: s = !1,
        giftMessage: i,
        giftingOrigin: o,
        giftRecipient: d,
        onClose: u,
        onCloseCallback: x,
        onCloseRequest: h,
        onComplete: m
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        skuId: a,
        analyticsLocations: l,
        giftContextProps: {
            isGift: s,
            giftMessage: i,
            giftingOrigin: o,
            giftRecipient: d
        },
        onClose: u,
        onComplete: m,
        flowSpecificOptions: {
            onStepChange: r
        },
        openModalOptions: {
            modalKey: n,
            onCloseCallback: x,
            onCloseRequest: h
        }
    })
}