/** Chunk was on 5241 **/
/** chunk id: 46292, original params: e,t,r (module,exports,require) **/
r.d(t, {
    PremiumResubscribeModal: () => x
}), r(896048);
var n = r(627968),
    a = r(64700),
    i = r(284009),
    o = r.n(i),
    c = r(688810),
    l = r(937008),
    s = r(156312),
    d = r(166532),
    b = r(639289),
    _ = r(674619),
    p = r(927578),
    u = r(480254),
    m = r(232392),
    y = r(190269),
    g = r(788868);

function S(e) {
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

function f(e, t) {
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
let x = e => {
    var t;
    let {
        analyticsLocations: r,
        premiumSubscription: i
    } = e, x = null == (t = (0, p.EL)(i)) ? void 0 : t.planId, C = null != x ? (0, p.m6)(x) : null;
    o()(null != C, "Should not be resubscribing Nitro without premiumType");
    let h = C === g.PremiumTypes.TIER_0,
        [O, v] = a.useState(m.g.CONFIRM),
        j = a.useCallback(() => {
            switch (O) {
                case m.g.CONFIRM:
                    return (0, n.jsx)(u.m, f(S({}, e), {
                        setStep: v
                    }));
                case m.g.SUCCESS:
                    return (0, n.jsx)(y.B, f(S({}, e), {
                        premiumType: C
                    }));
                default:
                    return (0, n.jsx)(u.m, f(S({}, e), {
                        setStep: v
                    }))
            }
        }, [O, e, C]);
    return (0, n.jsx)(c.f5, {
        value: r,
        children: (0, n.jsx)(s.PaymentContextProvider, {
            activeSubscription: i,
            stepConfigs: (0, _.E)(),
            skuIDs: [],
            breadcrumbs: [d.pn.CONFIRM],
            children: (0, n.jsx)(l.Mq, {
                children: (0, n.jsx)(b.A, {
                    isConfirmationStep: O === m.g.SUCCESS,
                    isEligibleForWowMoment: !h,
                    shouldPrefetchWowMoment: !h,
                    children: j()
                })
            })
        })
    })
}