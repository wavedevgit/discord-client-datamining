/** Chunk was on 77870 **/
/** chunk id: 619344, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(709562),
    s = n(985018);

function a(e) {
    let {
        popoutWindowAlwaysOnTop: t,
        onToggleStayOnTop: n
    } = e, a = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["popoutWindowAlwaysOnTop", "onToggleStayOnTop"]), o = t ? s.intl.string(s.t.YdyDM9) : s.intl.string(s.t.ZVGHwP), c = t ? l.hl9 : l.qgw;
    return (0, r.jsx)(i.A, function(e) {
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
    }({
        onClick: () => n(!t),
        label: o,
        iconComponent: c
    }, a))
}