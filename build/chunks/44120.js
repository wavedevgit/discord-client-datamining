/** chunk id: 44120, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(896048);
var r = n(627968);
n(64700);
var i = n(835245),
    a = n(397927),
    o = n(73153),
    s = n(391048),
    l = n(636099),
    c = n(769315),
    u = n(589078),
    d = n(979286),
    f = n(287809),
    p = n(954571),
    _ = n(166532),
    h = n(301518),
    m = n(165823),
    g = n(652215);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function v(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = A(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function A(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let I = "payment-modal",
    S = "gift-payment-modal",
    T = new Set([_.pn.REVIEW, _.pn.CONFIRM, _.pn.GIFT_CUSTOMIZATION]);

function C(e) {
    let t, {
            skuId: u,
            analyticsLocations: _,
            analyticsObject: m,
            isGift: E = !1,
            giftMessage: b,
            giftingOrigin: A,
            giftRecipient: C,
            onClose: R,
            onComplete: P,
            variantsReturnStyle: D
        } = e,
        L = !1,
        x = (0, i.A)(),
        M = e => {
            t = e
        },
        j = E ? S : I,
        k = f.default.getCurrentUser();
    if (!(null == k ? void 0 : k.verified)) return void(0, a.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
        return t => {
            let {
                onClose: n
            } = t, i = v(t, ["onClose"]);
            return (0, r.jsx)(e, O(y({}, i), {
                onClose: () => {
                    n(), null == R || R(!1)
                }
            }))
        }
    });
    o.h.wait(() => {
        o.h.dispatch({
            type: "PAYMENT_MODAL_OPEN"
        })
    });
    let {
        enabled: U
    } = (0, c.ik)({
        location: "openCollectiblesPaymentModal"
    }), G = () => {
        (0, h.S)({
            checkoutSucceeded: L
        }), L || p.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: x,
            payment_type: g.frM[g.VVm.ONE_TIME],
            location: m,
            is_gift: E,
            sku_id: u,
            location_stack: _
        }), (0, s.ET)(), (0, l.z)(), null == R || R(L), L && (0, d.gB)({
            variantsReturnStyle: D
        })
    }, F = () => {
        null != t && T.has(t) && (0, a.OoC)(j)
    }, V = {
        loadId: x,
        skuId: u,
        analyticsLocations: _,
        onStepChange: M,
        modalKey: j,
        isGift: E,
        giftMessage: b,
        giftingOrigin: A,
        giftRecipient: C,
        onClose: R,
        onCloseCallback: G,
        onCloseRequest: F,
        onComplete: () => {
            L = !0, null == P || P()
        }
    };
    U ? N(V) : w(V)
}
let N = e => {
        let {
            loadId: t,
            skuId: n,
            analyticsLocations: r,
            onStepChange: i,
            modalKey: a,
            isGift: o = !1,
            giftMessage: s,
            giftingOrigin: l,
            giftRecipient: c,
            onClose: d,
            onCloseCallback: f,
            onCloseRequest: p,
            onComplete: _
        } = e;
        return (0, u.Tx)().openCheckoutModal({
            loadId: t,
            skuId: n,
            analyticsLocations: r,
            giftContextProps: {
                isGift: o,
                giftMessage: s,
                giftingOrigin: l,
                giftRecipient: c
            },
            onClose: d,
            onComplete: _,
            flowSpecificOptions: {
                onStepChange: i
            },
            openModalOptions: {
                modalKey: a,
                onCloseCallback: f,
                onCloseRequest: p
            }
        })
    },
    w = e => {
        let {
            loadId: t,
            skuId: n,
            analyticsLocations: i,
            onStepChange: o,
            modalKey: s,
            isGift: l = !1,
            giftMessage: c,
            giftingOrigin: u,
            giftRecipient: d,
            onClose: f,
            onCloseCallback: p,
            onCloseRequest: _,
            onComplete: h
        } = e;
        return (0, a.mMO)(async () => e => {
            let {
                onClose: a,
                returnRef: s
            } = e, p = v(e, ["onClose", "returnRef"]);
            return (0, r.jsx)(m.Ay, O(y({}, p), {
                loadId: t,
                skuId: n,
                isGift: l,
                giftMessage: c,
                giftingOrigin: u,
                analyticsLocations: i,
                giftRecipient: d,
                onClose: e => {
                    a(), null == f || f(e)
                },
                onComplete: h,
                returnRef: s,
                onStepChange: o
            }))
        }, {
            modalKey: s,
            onCloseCallback: p,
            onCloseRequest: _
        })
    }