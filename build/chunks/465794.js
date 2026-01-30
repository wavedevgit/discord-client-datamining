/** chunk id: 465794, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(435371),
    c = n(421380),
    u = n(397927),
    d = n(531685),
    f = n(783420),
    p = n(245383),
    _ = n(788868),
    h = n(328504);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function b(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = O(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function O(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let v = function(e) {
    let {
        subscriptionTier: t,
        onClick: n,
        size: a,
        className: m,
        textOptions: E,
        iconClassName: O,
        postSuccessGuild: v,
        onSubscribeModalClose: A,
        premiumModalAnalyticsLocation: I,
        showIcon: S = !0,
        disableShine: T,
        applicationId: C,
        shinyButtonClassName: N,
        showGradient: w = !1,
        confirmationFooter: R,
        color: P,
        iconColor: D = "currentColor"
    } = e, L = b(e, ["subscriptionTier", "onClick", "size", "className", "textOptions", "iconClassName", "postSuccessGuild", "onSubscribeModalClose", "premiumModalAnalyticsLocation", "showIcon", "disableShine", "applicationId", "shinyButtonClassName", "showGradient", "confirmationFooter", "color", "iconColor"]), x = (0, s.bG)([d.A], () => d.A.isFocused()), M = (0, p.A)({
        subscriptionTier: t,
        buttonTextOverride: null == E ? void 0 : E.textOverride,
        defaultTextOverride: null == E ? void 0 : E.subscribeText
    }), j = {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: v,
        onSubscribeModalClose: A,
        premiumModalAnalyticsLocation: I,
        applicationId: C,
        confirmationFooter: R
    }, k = null != P ? P : t === _.pe.TIER_1 ? c.$n.Colors.PRIMARY : c.$n.Colors.GREEN, U = (0, r.jsxs)(u.wLn, y(g({
        "data-migration-pending": !0,
        disabled: M.disabled,
        innerClassName: h.UO,
        color: k,
        size: a,
        className: N,
        wrapperClassName: o()({
            [h.PJ]: w && t === _.pe.TIER_2,
            [h.Up]: w && t === _.pe.TIER_1
        }, m),
        buttonShineClassName: "buttonShineClassName" in L ? L.buttonShineClassName : k === c.XD.BRAND_INVERTED ? h.nz : void 0,
        pauseAnimation: !x || T
    }, L), {
        children: [S && (0, r.jsx)(u.tvc, {
            size: "md",
            color: D,
            className: o()(h.PC, O)
        }), (0, r.jsx)("span", {
            className: o()(h._d, null == E ? void 0 : E.textClassName),
            children: M.buttonText
        })]
    }));
    return (0, r.jsx)(f.A, y(g({}, j), {
        children: e => {
            let {
                onClick: t
            } = e, n = i.cloneElement(U, {
                onClick: t
            });
            return null != M.buttonTooltipText ? (0, r.jsx)(l.m_, {
                text: M.buttonTooltipText,
                children: n
            }) : n
        }
    }))
}