/** chunk id: 703007, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => o
});
var r = t(627968);
t(64700);
var n = t(503698),
    l = t.n(n),
    a = t(421380),
    i = t(397927),
    s = t(817363);

function o(e) {
    var A, t;
    let {
        children: n,
        className: o,
        innerClassName: d,
        onChange: u,
        "aria-label": c,
        "aria-describedby": g,
        filters: f,
        multiple: p = !1,
        disabled: m = !1,
        submitting: v = !1
    } = e, h = function(e, A) {
        if (null == e) return {};
        var t, r, n, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }
        if (l = function(e, A) {
                if (null == e) return {};
                var t, r, n = {},
                    l = Object.getOwnPropertyNames(e);
                for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
                return n
            }(e, A), Object.getOwnPropertySymbols)
            for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
    }(e, ["children", "className", "innerClassName", "onChange", "aria-label", "aria-describedby", "filters", "multiple", "disabled", "submitting"]);
    return (0, r.jsx)(i.vN3, {
        within: !0,
        children: (0, r.jsxs)("div", {
            className: l()(o, (0, a.WS)((A = function(e) {
                for (var A = 1; A < arguments.length; A++) {
                    var t = null != arguments[A] ? arguments[A] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.forEach(function(A) {
                        var r;
                        r = t[A], A in e ? Object.defineProperty(e, A, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[A] = r
                    })
                }
                return e
            }({}, h), t = t = {
                submitting: v,
                disabled: m
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : (function(e, A) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r)
                }
                return t
            })(Object(t)).forEach(function(e) {
                Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
            }), A))),
            "aria-disabled": m,
            children: [(0, r.jsx)("span", {
                "aria-hidden": !0,
                className: d,
                children: n
            }), (0, r.jsx)(s.A, {
                tabIndex: 0,
                onChange: u,
                filters: f,
                multiple: p,
                "aria-label": c,
                "aria-describedby": g,
                disabled: m
            })]
        })
    })
}