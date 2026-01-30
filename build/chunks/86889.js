/** chunk id: 86889, original params: t,e,r (module,exports,require) **/
r.d(e, {
    D: () => c
});
var n = r(627968),
    l = r(64700),
    s = r(217905),
    i = r(688810),
    a = r(954571),
    o = r(652215);

function c(t) {
    let {
        appId: e,
        skuId: r
    } = t, c = function(t, e) {
        if (null == t) return {};
        var r, n, l, s = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, r = Reflect.ownKeys(t); l < r.length; l++) n = r[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n]);
            return s
        }
        if (s = function(t, e) {
                if (null == t) return {};
                var r, n, l = {},
                    s = Object.getOwnPropertyNames(t);
                for (n = 0; n < s.length; n++) r = s[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
                return l
            }(t, e), Object.getOwnPropertySymbols)
            for (l = 0, r = Object.getOwnPropertySymbols(t); l < r.length; l++) n = r[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n]);
        return s
    }(t, ["appId", "skuId"]), {
        analyticsLocations: d
    } = (0, i.Ay)();
    return l.useEffect(() => {
        a.default.track(o.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
            application_id: e,
            sku_id: r,
            location_stack: d
        })
    }, [d, e, r]), (0, n.jsx)(s.F, function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), n.forEach(function(e) {
                var n;
                n = r[e], e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            })
        }
        return t
    }({}, c))
}