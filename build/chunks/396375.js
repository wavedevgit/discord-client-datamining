/** chunk id: 396375, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var a = n(582754),
    i = n(421380),
    l = n(736653),
    s = n(234419),
    o = n(465794),
    c = n(145310),
    d = n(275403);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let m = e => {
    let {
        textOptions: t,
        subscriptionTier: n,
        hasActivePromotion: m = !1,
        isPersistentCTA: _ = !1,
        useShorterCTA: E = !1,
        showGradient: p,
        confirmationFooter: x,
        color: N
    } = e, T = function(e, t) {
        if (null == e) return {};
        var n, r, a, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                return a
            }(e, t), Object.getOwnPropertySymbols)
            for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["textOptions", "subscriptionTier", "hasActivePromotion", "isPersistentCTA", "useShorterCTA", "showGradient", "confirmationFooter", "color"]), g = (0, l.Ay)(), {
        buttonText: b,
        marketingSubscriptionTierSkuId: v
    } = (0, c.s)({
        hasActivePromotion: m,
        subscriptionTier: n,
        useShorterCTA: E,
        isPersistentCTA: _
    }), j = (0, s.V)(), O = null == j ? void 0 : j.subscription_trial, f = null != O && v === O.sku_id, h = null != N ? N : (0, a.Mw)(g) ? i.XD.BRAND_INVERTED : i.XD.BRAND;
    return (0, r.jsx)(o.A, u({
        color: h,
        textOptions: u({
            textOverride: b,
            textClassName: f ? d.A : void 0
        }, t),
        onlyShineOnHover: !0,
        subscriptionTier: v,
        showGradient: p,
        confirmationFooter: x
    }, T))
}