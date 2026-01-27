/** Chunk was on 86819 **/
/** chunk id: 46292, original params: e,t,r (module,exports,require) **/
r.d(t, {
    PremiumResubscribeModal: () => C
}), r(896048);
var n = r(627968),
    a = r(64700),
    o = r(284009),
    i = r.n(o),
    l = r(688810),
    s = r(937008),
    c = r(156312),
    d = r(166532),
    p = r(639289),
    u = r(674619),
    b = r(927578),
    m = r(480254),
    _ = r(232392),
    y = r(190269),
    g = r(788868);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}
let C = e => {
    var t;
    let {
        analyticsLocations: r,
        premiumSubscription: o
    } = e, C = null == (t = (0, b.EL)(o)) ? void 0 : t.planId, x = null != C ? (0, b.m6)(C) : null;
    i()(null != x, "Should not be resubscribing Nitro without premiumType");
    let h = x === g.PremiumTypes.TIER_0,
        [O, j] = a.useState(_.g.CONFIRM),
        v = a.useCallback(() => {
            switch (O) {
                case _.g.CONFIRM:
                    return (0, n.jsx)(m.m, S(f({}, e), {
                        setStep: j
                    }));
                case _.g.SUCCESS:
                    return (0, n.jsx)(y.B, S(f({}, e), {
                        premiumType: x
                    }));
                default:
                    return (0, n.jsx)(m.m, S(f({}, e), {
                        setStep: j
                    }))
            }
        }, [O, e, x]);
    return (0, n.jsx)(l.f5, {
        value: r,
        children: (0, n.jsx)(c.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: (0, u.E)(),
            skuIDs: [],
            breadcrumbs: [d.pn.CONFIRM],
            children: (0, n.jsx)(s.Mq, {
                children: (0, n.jsx)(p.A, {
                    isConfirmationStep: O === _.g.SUCCESS,
                    isEligibleForWowMoment: !h,
                    shouldPrefetchWowMoment: !h,
                    children: v()
                })
            })
        })
    })
}