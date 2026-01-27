/** Chunk was on web.js **/
/** chunk id: 317042, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => T,
    default: () => C
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(793574),
    o = n(688810),
    s = n(429913),
    l = n(937008),
    c = n(156312),
    u = n(166532),
    d = n(491057),
    f = n(546042),
    p = n(721252),
    _ = n(67480),
    h = n(328968),
    m = n(733391),
    g = n(11054),
    E = n(639149),
    y = n(941673),
    b = n(818348);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}
let A = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, i) => (0, r.jsx)(E.A, {
        step: i,
        onClose: () => n(!1),
        isGift: e
    })
};

function I(e) {
    let {
        onClose: t,
        onComplete: n,
        transitionState: i,
        applicationId: a,
        analyticsLocationObject: s,
        skuId: l,
        isGift: u
    } = e, {} = (0, c.P5)(), {
        analyticsLocations: d
    } = (0, o.Ay)();
    return (0, r.jsx)(f.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: l,
        renderHeader: A(u),
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: d,
        transitionState: i
    })
}

function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [p.kJ, ...e ? [y.gj] : [], p.zK, ...p.hh, p.r2, {
        key: u.pn.CONFIRM,
        renderStep: e => (0, r.jsx)(g.M, v({}, e))
    }]
}
let T = e => {
    let {
        applicationId: t,
        skuId: n,
        analyticsLocations: r
    } = e, {
        analyticsLocations: l
    } = (0, o.Ay)(r, a.A.SLAYER_STOREFRONT_PAYMENT_MODAL), c = (0, s.h)(t);
    return i.useEffect(() => {
        null == c || null == c.guildId || null == n || h.A.isFetchingForSKU(n) || null != _.A.get(n) || (0, m.qf)(c.guildId, n)
    }, [c, n]), {
        analyticsLocations: l
    }
};

function C(e) {
    let {
        loadId: t,
        applicationId: n,
        isGift: i = !1,
        giftRecipient: a,
        giftingOrigin: s,
        additionalUserIds: u
    } = e, {
        analyticsLocations: f
    } = T(e);
    return (0, r.jsx)(o.f5, {
        value: f,
        children: (0, r.jsx)(c.PaymentContextProvider, {
            loadId: t,
            stepConfigs: S(i),
            applicationId: n,
            skuIDs: [e.skuId],
            activeSubscription: null,
            purchaseType: b.VV.ONE_TIME,
            isGift: i,
            children: (0, r.jsx)(d.Qt, {
                children: (0, r.jsx)(l.dX, {
                    isGift: i,
                    giftRecipient: a,
                    giftingOrigin: s,
                    additionalUserIds: u,
                    children: (0, r.jsx)(I, v({}, e))
                })
            })
        })
    })
}