/** Chunk was on 90406 **/
/** chunk id: 661925, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => m
}), n(896048), n(492834);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    u = n(397927),
    c = n(452357),
    d = n(287809),
    b = n(985018),
    f = n(143021);
let m = function(t) {
    let {
        onClose: e,
        transitionState: l
    } = t, m = (0, o.bG)([d.default], () => d.default.getCurrentUser()), [p, g] = i.useState(!1), y = i.useCallback(() => (null == e || e(), Promise.resolve()), [e]), v = i.useCallback(() => {
        null == e || e(), (0, u.mMO)(async () => {
            let {
                default: t
            } = await n.e("83269").then(n.bind(n, 350116));
            return e => (0, r.jsx)(t, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), r.forEach(function(e) {
                        var r;
                        r = n[e], e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r
                    })
                }
                return t
            }({}, e))
        })
    }, [e]), k = i.useCallback(() => {
        null == e || e(), a()(null != m, "ResendEmailVerificationButton: currentUser cannot be undefined"), g(!0), (0, c.S)(m).finally(() => g(!1))
    }, [m, e]), h = i.useMemo(() => (null == m ? void 0 : m.email) == null ? [{
        text: b.intl.string(b.t.ydw5nX),
        onClick: v,
        variant: "primary"
    }] : [{
        text: b.intl.string(b.t.Vm8akB),
        onClick: v,
        variant: "secondary"
    }, {
        text: b.intl.string(b.t.lm1UKt),
        onClick: k,
        variant: "primary",
        loading: p
    }], [m, v, k, p]);
    return (0, r.jsxs)(s.Modal, {
        title: b.intl.string(b.t.UZLrY1),
        transitionState: l,
        onClose: y,
        actions: h,
        children: [(0, r.jsx)("div", {
            className: f.p
        }), (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            className: f.i,
            children: b.intl.string(b.t["0LgOKH"])
        })]
    })
}