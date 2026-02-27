/** chunk id: 44120, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    A: () => g
});
var r = l(627968);
l(64700);
var a = l(835245),
    n = l(397927),
    i = l(73153),
    s = l(391048),
    o = l(636099),
    d = l(589078),
    c = l(979286),
    u = l(287809),
    h = l(954571),
    m = l(166532),
    x = l(301518),
    p = l(652215);
let b = new Set([m.pn.REVIEW, m.pn.CONFIRM, m.pn.GIFT_CUSTOMIZATION]);

function g(e) {
    let t, {
            skuId: d,
            analyticsLocations: m,
            analyticsObject: g,
            isGift: v = !1,
            giftMessage: _,
            giftingOrigin: j,
            giftRecipient: y,
            onClose: A,
            onComplete: k,
            variantsReturnStyle: C
        } = e,
        S = !1,
        I = (0, a.A)(),
        T = v ? "gift-payment-modal" : "payment-modal",
        w = u.default.getCurrentUser();
    w?.verified ? (i.h.wait(() => {
        i.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    }), f({
        loadId: I,
        skuId: d,
        analyticsLocations: m,
        onStepChange: e => {
            t = e
        },
        modalKey: T,
        isGift: v,
        giftMessage: _,
        giftingOrigin: j,
        giftRecipient: y,
        onClose: A,
        onCloseCallback: () => {
            (0, x.S)({
                checkoutSucceeded: S
            }), S || h.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                load_id: I,
                payment_type: p.frM[p.VVm.ONE_TIME],
                location: g,
                is_gift: v,
                sku_id: d,
                location_stack: m
            }), (0, s.ET)(), (0, o.z)(), A?.(S), S && (0, c.gB)({
                variantsReturnStyle: C
            })
        },
        onCloseRequest: () => {
            null != t && b.has(t) && (0, n.OoC)(T)
        },
        onComplete: () => {
            S = !0, k?.()
        }
    })) : (0, n.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([l.e("12206"), l.e("90406")]).then(l.bind(l, 661925));
        return t => {
            let {
                onClose: l,
                ...a
            } = t;
            return (0, r.jsx)(e, {
                ...a,
                onClose: () => {
                    l(), A?.(!1)
                }
            })
        }
    })
}
let f = e => {
    let {
        loadId: t,
        skuId: l,
        analyticsLocations: r,
        onStepChange: a,
        modalKey: n,
        isGift: i = !1,
        giftMessage: s,
        giftingOrigin: o,
        giftRecipient: c,
        onClose: u,
        onCloseCallback: h,
        onCloseRequest: m,
        onComplete: x
    } = e;
    return (0, d.Tx)().openCheckoutModal({
        loadId: t,
        skuId: l,
        analyticsLocations: r,
        giftContextProps: {
            isGift: i,
            giftMessage: s,
            giftingOrigin: o,
            giftRecipient: c
        },
        onClose: u,
        onComplete: x,
        flowSpecificOptions: {
            onStepChange: a
        },
        openModalOptions: {
            modalKey: n,
            onCloseCallback: h,
            onCloseRequest: m
        }
    })
}