/** chunk id: 721923, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(502572),
    c = n(435371),
    u = n(421380),
    d = n(397927),
    f = n(923408),
    p = n(688810),
    _ = n(531260),
    h = n(267102),
    m = n(178368),
    g = n(166403),
    E = n(473145),
    y = n(987144),
    b = n(652215),
    O = n(788868),
    v = n(985018),
    A = n(737211);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function N(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = w(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function w(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let R = e => {
    let {
        analyticsLocation: t,
        analyticsSourceLocation: n,
        guild: a,
        buttonText: I,
        targetBoostedGuildTier: T,
        onClose: w = () => {},
        closeLayer: R = () => {},
        pauseAnimation: P = !1,
        applicationId: D,
        handleSubscribeModalClose: L,
        withHighlight: x = !1,
        icon: M,
        intent: j,
        useExpressiveButton: k = !1
    } = e, U = N(e, ["analyticsLocation", "analyticsSourceLocation", "guild", "buttonText", "targetBoostedGuildTier", "onClose", "closeLayer", "pauseAnimation", "applicationId", "handleSubscribeModalClose", "withHighlight", "icon", "intent", "useExpressiveButton"]), {
        analyticsLocations: G
    } = (0, p.Ay)(), V = (0, h.Us)() === b.BRT.POPOUT, [F, B] = i.useState(!1), {
        fractionalState: H
    } = (0, _.A)(), Y = (0, s.bG)([m.A], () => m.A.hasFetched);
    i.useEffect(() => {
        Y || (0, f.CD)()
    }, [Y]);
    let W = (0, E.D$)(m.A.boostSlots),
        K = null != T ? Math.max((0, E.Os)(a, T), 1) : 1,
        z = (0, E.Nc)({
            fractionalState: H
        }),
        q = async () => {
            B(!0), await (0, y.g)({
                analyticsLocations: G,
                analyticsLocation: t,
                analyticsSourceLocation: n,
                guild: a,
                numberOfBoostsToAdd: K,
                onClose: w,
                closeLayer: R,
                inPopout: V,
                applicationId: D,
                handleSubscribeModalClose: L,
                intent: j
            }), B(!1)
        }, Z = g.A.getPremiumTypeSubscription(), Q = (0, r.jsxs)("div", {
            className: A.x6,
            children: [M, null != I ? I : v.intl.string(v.t.gKmQ1G)]
        }), X = !1;
    return ((X = null !== Z && !(W.length > 0) && (null == Z ? void 0 : Z.isPausedOrPausePending) && H === O.xc.NONE) && (Q = (0, r.jsxs)("div", {
        className: A.x6,
        children: [(0, r.jsx)(d.XAi, {
            size: "xs",
            className: A.iA
        }), " ", Q]
    }), U.disabled = !0), null != z) ? k ? (0, r.jsx)(c.m_, {
        text: z,
        children: (0, r.jsx)(d.Button, {
            variant: "expressive",
            icon: d.XAi,
            iconPosition: "start",
            disabled: !0,
            text: null != I ? I : v.intl.string(v.t.gKmQ1G)
        })
    }) : (0, r.jsx)(l.A, {
        text: z,
        "aria-label": !1,
        children: e => (0, r.jsx)(d.wLn, C(S(C(S({
            "data-migration-pending": !0
        }, e), {
            disabled: !0,
            size: u.$n.Sizes.SMALL,
            pauseAnimation: P
        }), U), {
            children: Q
        }))
    }) : k ? (0, r.jsx)(d.Button, {
        variant: "expressive",
        disabled: X,
        loading: F,
        text: null != I ? I : v.intl.string(v.t.gKmQ1G),
        onClick: q
    }) : (0, r.jsx)(d.wLn, C(S({
        "data-migration-pending": !0,
        size: u.$n.Sizes.SMALL
    }, U), {
        className: o()(U.className, {
            [A.yj]: x
        }),
        submitting: F,
        onClick: q,
        pauseAnimation: P,
        children: Q
    }))
}