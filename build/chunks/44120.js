/** chunk id: 44120, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => g
});
var l = a(627968);
a(64700);
var r = a(835245),
    n = a(397927),
    s = a(73153),
    i = a(391048),
    o = a(636099),
    d = a(589078),
    c = a(979286),
    u = a(287809),
    x = a(954571),
    h = a(166532),
    m = a(301518),
    b = a(652215);
let p = new Set([h.pn.REVIEW, h.pn.CONFIRM, h.pn.GIFT_CUSTOMIZATION]);

function g(e) {
    let t, {
            skuId: d,
            analyticsLocations: h,
            analyticsObject: g,
            isGift: j = !1,
            giftMessage: v,
            giftingOrigin: y,
            giftRecipient: _,
            onClose: k,
            onComplete: A,
            variantsReturnStyle: C
        } = e,
        I = !1,
        S = (0, r.A)(),
        T = j ? "gift-payment-modal" : "payment-modal",
        w = u.default.getCurrentUser();
    w?.verified ? (s.h.wait(() => {
        s.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), f({
        loadId: S,
        skuId: d,
        analyticsLocations: h,
        onStepChange: e => {
            t = e
        },
        modalKey: T,
        isGift: j,
        giftMessage: v,
        giftingOrigin: y,
        giftRecipient: _,
        onClose: k,
        onCloseCallback: () => {
            (0, m.S)({
                checkoutSucceeded: I
            }), I || x.default.track(b.HAw.PAYMENT_FLOW_CANCELED, {
                load_id: S,
                payment_type: b.frM[b.VVm.ONE_TIME],
                location: g,
                is_gift: j,
                sku_id: d,
                location_stack: h
            }), (0, i.ET)(), (0, o.z)(), k?.(I), I && (0, c.gB)({
                variantsReturnStyle: C
            })
        },
        onCloseRequest: () => {
            null != t && p.has(t) && (0, n.OoC)(T)
        },
        onComplete: () => {
            I = !0, A?.()
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
                    a(), k?.(!1)
                }
            })
        }
    })
}
let f = e => {
    let {
        loadId: t,
        skuId: a,
        analyticsLocations: l,
        onStepChange: r,
        modalKey: n,
        isGift: s = !1,
        giftMessage: i,
        giftingOrigin: o,
        giftRecipient: c,
        onClose: u,
        onCloseCallback: x,
        onCloseRequest: h,
        onComplete: m
    } = e;
    return (0, d.Tx)().openCheckoutModal({
        loadId: t,
        skuId: a,
        analyticsLocations: l,
        giftContextProps: {
            isGift: s,
            giftMessage: i,
            giftingOrigin: o,
            giftRecipient: c
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