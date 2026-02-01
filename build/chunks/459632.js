/** chunk id: 459632, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(688810),
    o = n(384059),
    a = n(709562),
    c = n(985018);

function s(e) {
    let {
        onClick: t
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, l, r, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
    }(e, ["onClick"]), {
        parentAnalyticsLocation: s
    } = (0, i.Ay)();
    return (0, l.jsx)(a.A, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = l
            })
        }
        return e
    }({
        label: c.intl.string(c.t["UKOtz+"]),
        iconComponent: r.jNK,
        tooltipPosition: "bottom",
        onClick: e => {
            (0, o.X)(s, o.O.MORE), t(e)
        }
    }, n))
}