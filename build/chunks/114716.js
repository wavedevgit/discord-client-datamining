/** chunk id: 114716, original params: e,t,r (module,exports,require) **/
r.d(t, {
    C: () => s
});
var n = r(627968);
r(64700);
var a = r(961350),
    l = r(612181),
    o = r(642277),
    i = r(652215);

function s(e, t) {
    var r, s;
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        passProps: !0
    };

    function d(r) {
        return !(0, l.wR)() && a.default.getLoginStatus() !== i.aUe.LOGGING_IN && a.default.allowLogoutRedirect() ? null != t ? (0, n.jsx)(t, {
            renderRedirect: (0, n.jsx)(o.A, {})
        }) : (0, n.jsx)(o.A, {}) : (0, n.jsx)(e, function(e) {
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
        }({}, c.passProps ? r : null))
    }
    return d.displayName = "Authenticated(".concat(null != (r = null != (s = e.displayName) ? s : e.name) ? r : "<Unknown>", ")"), d
}