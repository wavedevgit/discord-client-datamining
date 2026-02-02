/** chunk id: 880714, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var l = n(627968),
    r = n(64700),
    o = n(503698),
    i = n.n(o),
    a = n(397927),
    s = n(230296);

function u(e) {
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
}

function c(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let d = r.forwardRef(function(e, t) {
    let [n, ...r] = [e, t], {
        className: o,
        focusProps: d
    } = n, _ = function(e, t) {
        if (null == e) return {};
        var n, l, r, o = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (o[l] = e[l]);
            return o
        }
        if (o = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    o = Object.getOwnPropertyNames(e);
                for (l = 0; l < o.length; l++) n = o[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (o[l] = e[l]);
        return o
    }(n, ["className", "focusProps"]), [p] = r;
    return (0, l.jsx)(a.vN3, c(u({}, d), {
        children: (0, l.jsx)("li", c(u({
            className: i()(o, s.k)
        }, _), {
            ref: p
        }))
    }))
})