/** chunk id: 226151, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => g
}), t(896048);
var l = t(627968);
t(64700);
var a = t(793574),
    i = t(688810),
    r = t(937008),
    s = t(156312),
    o = t(491057),
    c = t(546042),
    u = t(721252),
    d = t(674223),
    p = t(818348);

function f(e) {
    let {
        onClose: n,
        onComplete: t,
        transitionState: a,
        applicationId: r,
        analyticsLocationObject: o,
        skuId: u
    } = e, {} = (0, s.P5)(), {
        analyticsLocations: d
    } = (0, i.Ay)();
    return (0, l.jsx)(c.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: r,
        skuId: u,
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: d,
        transitionState: a
    })
}

function g(e) {
    let {
        loadId: n,
        applicationId: t,
        skuId: c,
        analyticsLocations: g,
        isGift: b = !1
    } = e, {
        analyticsLocations: j
    } = (0, i.Ay)(g, a.A.PREMIUM_PAYMENT_MODAL);
    return (0, l.jsx)(i.f5, {
        value: j,
        children: (0, l.jsx)(s.PaymentContextProvider, {
            loadId: n,
            stepConfigs: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [u.kJ, ...e ? [d.K_] : [], u.zK, ...u.hh, u.r2, u.zX]
            }(b),
            applicationId: t,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: p.VV.ONE_TIME,
            isGift: b,
            children: (0, l.jsx)(o.Qt, {
                children: (0, l.jsx)(r.dX, {
                    isGift: b,
                    children: (0, l.jsx)(f, function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                l = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), l.forEach(function(n) {
                                var l;
                                l = t[n], n in e ? Object.defineProperty(e, n, {
                                    value: l,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[n] = l
                            })
                        }
                        return e
                    }({}, e))
                })
            })
        })
    })
}