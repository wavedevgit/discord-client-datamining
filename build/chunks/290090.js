/** chunk id: 290090, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    s = n(688810),
    o = n(979286),
    a = n(958805),
    d = n(61881),
    c = n(993401),
    u = n(985018);

function p(e) {
    let {
        onClose: t
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, l, i, r = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            return r
        }
        if (r = function(e, t) {
                if (null == e) return {};
                var n, l, i = {},
                    r = Object.getOwnPropertyNames(e);
                for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
        return r
    }(e, ["onClose"]), {
        analyticsLocations: p,
        newestAnalyticsLocation: f
    } = (0, s.Ay)(), m = (0, i.bG)([d.A], () => d.A.hasUnsavedChanges());
    return (0, l.jsx)(c.q3, function(e) {
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
        action: "VISIT_SHOP",
        icon: r.U1X,
        tooltipText: u.intl.string(u.t.b2d0N0),
        onClick: () => {
            m ? a.A.notifyUnsavedWidgets() : ((0, o.Cz)({
                analyticsLocations: p,
                analyticsSource: f
            }), null == t || t())
        }
    }, n))
}