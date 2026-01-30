/** chunk id: 922529, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
}), r(896048);
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(813516),
    o = r(119907);
let A = a.forwardRef(function(e, t) {
        var r, a;
        let [s, ...A] = [e, t], {
            className: c,
            isBeforeGroup: u = !1
        } = s, _ = function(e, t) {
            if (null == e) return {};
            var r, n, a, s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s
            }
            if (s = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    return a
                }(e, t), Object.getOwnPropertySymbols)
                for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s
        }(s, ["className", "isBeforeGroup"]), [I] = A, {
            children: f
        } = _;
        return (0, n.jsx)(i.A, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({}, _), a = a = {
            ref: I,
            role: "separator",
            "aria-label": "string" == typeof f ? f : void 0,
            className: l()(c, {
                [o.yF]: !0,
                [o.ov]: null != f,
                [o.rd]: u
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(a)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
        }), r))
    }),
    c = a.memo(A)