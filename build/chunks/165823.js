/** chunk id: 165823, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => G,
    Kg: () => k,
    NW: () => D,
    Ub: () => x,
    kj: () => U,
    ot: () => j,
    v1: () => M,
    yC: () => L
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(106778),
    l = n(311907),
    c = n(73153),
    u = n(793574),
    d = n(688810),
    f = n(590180),
    p = n(213530),
    _ = n(937008),
    h = n(156312),
    m = n(166532),
    g = n(491057),
    E = n(546042),
    y = n(721252),
    b = n(231018),
    O = n(971456),
    v = n(975189),
    A = n(503516),
    I = n(685944),
    S = n(652215),
    T = n(158216),
    C = n(758836),
    N = n(818348),
    w = n(186319);

function R(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            R(e, t, n[t])
        })
    }
    return e
}
let D = e => {
        let {
            analyticsLocations: t
        } = e, {
            analyticsLocations: n
        } = (0, d.Ay)([...t, u.A.COLLECTIBLES_PAYMENT_MODAL]);
        return {
            analyticsLocations: n
        }
    },
    L = {
        bodyClassName: w.As,
        sliderBodyClassName: w.Bz
    },
    x = e => {
        let {
            skuId: t
        } = e, n = i.useRef(new s.OH), [r, a] = i.useState(null), [o, l] = i.useState(!1), c = i.useMemo(() => (0, T.AB)({
            purchaseType: C.gs.FIAT,
            skuId: t
        }), [t]);
        return {
            environment: n,
            confettiCanvas: r,
            setConfettiCanvas: a,
            customConfettiVisible: o,
            setCustomConfettiVisible: l,
            customConfettiDisplayOptions: c,
            hideConfirmStepConfetti: null != c
        }
    },
    M = e => {
        let {
            skuId: t
        } = e, n = (0, l.yK)([f.A], () => f.A.recommendedGiftSkuIds, []);
        return null != t ? [t] : n
    },
    j = e => {
        var t;
        let {
            skuIDs: n,
            onClose: r,
            onComplete: a,
            setCustomConfettiVisible: o
        } = e, s = null != (t = n[0]) ? t : null, l = i.useCallback(() => {
            o(!0), null == a || a()
        }, [a, o]);
        return {
            paymentModalSkuId: s,
            paymentModalOnClose: i.useCallback(e => {
                o(!1), r(e), c.h.dispatch({
                    type: "SKU_PURCHASE_MODAL_CLOSE",
                    error: null
                })
            }, [r, o]),
            paymentModalOnComplete: l
        }
    },
    k = e => {
        let {
            environment: t,
            setConfettiCanvas: n,
            customConfettiDisplayOptions: i,
            customConfettiVisible: a
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Fk, {
                ref: n,
                className: w.Lb,
                environment: t.current
            }), (0, r.jsx)(p.K, {
                options: i,
                className: o()(w.Oh, {
                    [w.R]: !a
                })
            })]
        })
    },
    U = e => {
        let {
            step: t,
            onClose: n,
            isGift: i,
            giftingOrigin: a
        } = e;
        return i ? (0, r.jsx)(b.A, {
            step: t,
            onClose: () => n(!1),
            giftingOrigin: a
        }) : (0, r.jsx)(I.A, {
            step: t,
            onClose: () => n(!1)
        })
    };

function G(e) {
    let {
        onClose: t,
        onComplete: n,
        onStepChange: a,
        transitionState: o,
        loadId: s,
        skuId: l,
        isGift: c = !1,
        giftRecipient: u,
        giftMessage: f,
        giftingOrigin: p,
        analyticsLocations: b,
        returnRef: I
    } = e, {
        analyticsLocations: T
    } = D({
        analyticsLocations: b
    }), {
        confettiCanvas: C,
        environment: w,
        setConfettiCanvas: R,
        customConfettiVisible: G,
        setCustomConfettiVisible: V,
        customConfettiDisplayOptions: F,
        hideConfirmStepConfetti: B
    } = x({
        skuId: l
    }), H = M({
        skuId: l
    }), {
        paymentModalSkuId: Y,
        paymentModalOnClose: W,
        paymentModalOnComplete: K
    } = j({
        onClose: t,
        onComplete: n,
        skuIDs: H,
        setCustomConfettiVisible: V
    }), z = (e, t, n) => (0, r.jsx)(U, {
        isGift: c,
        step: n,
        onClose: t,
        giftingOrigin: p
    }), q = i.useMemo(() => [y.kJ, ...c ? [A.gA] : [], O.p, ...y.hh, y.r2, {
        key: m.pn.CONFIRM,
        renderStep: e => (0, r.jsx)(v.v, P({
            confettiCanvas: C,
            analyticsLocations: T,
            hideConfetti: B
        }, e)),
        options: L
    }], [T, C, B, c]);
    return (0, r.jsxs)(d.f5, {
        value: T,
        children: [(0, r.jsx)(k, {
            environment: w,
            setConfettiCanvas: R,
            customConfettiDisplayOptions: F,
            customConfettiVisible: G
        }), (0, r.jsx)(h.PaymentContextProvider, {
            loadId: s,
            stepConfigs: q,
            applicationId: S.FYj,
            skuIDs: H,
            isGift: c,
            activeSubscription: null,
            purchaseType: N.VV.ONE_TIME,
            excludeSubscriptionPlansBySKU: !0,
            children: (0, r.jsx)(g.Qt, {
                children: (0, r.jsx)(_.dX, {
                    isGift: c,
                    giftRecipient: u,
                    giftMessage: f,
                    giftingOrigin: p,
                    children: (0, r.jsx)(E.PaymentModal, {
                        skuId: Y,
                        onClose: W,
                        onComplete: K,
                        applicationId: S.FYj,
                        initialPlanId: null,
                        analyticsLocations: T,
                        renderHeader: z,
                        onStepChange: a,
                        hideShadow: !0,
                        transitionState: o,
                        returnRef: I
                    })
                })
            })
        })]
    })
}