/** chunk id: 452626, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(990078),
    i = n(397927),
    a = n(353411);

function s(e) {
    let {
        activity: t,
        user: n,
        source: s,
        size: o = "sm",
        variant: c = "secondary",
        fullWidth: u,
        onAction: d
    } = e, p = function(e, t) {
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
    }(e, ["activity", "user", "source", "size", "variant", "fullWidth", "onAction"]), {
        label: f,
        tooltip: m,
        loading: g,
        disabled: y,
        onClick: b
    } = (0, a._B)(t, n, s);
    return (0, r.jsx)(l.m, {
        text: m,
        children: (0, r.jsx)(i.Button, function(e) {
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
            variant: c,
            size: o,
            icon: i.L5T,
            text: f,
            fullWidth: u,
            onClick: () => {
                null == d || d(), b()
            },
            disabled: y,
            loading: g
        }, p))
    })
}