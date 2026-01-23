/** Chunk was on 97492 **/
/** chunk id: 703007, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(421380),
    a = n(397927),
    o = n(817363);

function c(e) {
    var t, n;
    let {
        children: l,
        className: c,
        innerClassName: u,
        onChange: d,
        "aria-label": p,
        "aria-describedby": h,
        filters: f,
        multiple: g = !1,
        disabled: m = !1,
        submitting: b = !1
    } = e, A = function(e, t) {
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
    }(e, ["children", "className", "innerClassName", "onChange", "aria-label", "aria-describedby", "filters", "multiple", "disabled", "submitting"]);
    return (0, r.jsx)(a.vN3, {
        within: !0,
        children: (0, r.jsxs)("div", {
            className: i()(c, (0, s.WS)((t = function(e) {
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
            }({}, A), n = n = {
                submitting: b,
                disabled: m
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))),
            "aria-disabled": m,
            children: [(0, r.jsx)("span", {
                "aria-hidden": !0,
                className: u,
                children: l
            }), (0, r.jsx)(o.A, {
                tabIndex: 0,
                onChange: d,
                filters: f,
                multiple: g,
                "aria-label": p,
                "aria-describedby": h,
                disabled: m
            })]
        })
    })
}