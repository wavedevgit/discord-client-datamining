/** Chunk was on 90406 **/
/** chunk id: 452357, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => g,
    S: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    o = n(158954),
    s = n(311907),
    u = n(139033),
    c = n(397927),
    d = n(830215),
    f = n(287809),
    b = n(985018);

function m(t) {
    return d.A.verifyResend().then(() => {
        (0, u.A)({
            title: b.intl.string(b.t.LykQYk),
            subtitle: b.intl.format(b.t.azKEPy, {
                email: t.email
            })
        })
    }).catch(t => {
        let {
            body: e
        } = t, n = b.intl.string(b.t.XcrQN5);
        null != e && e.email && (n = e.email), (0, c.qfG)(t => (0, r.jsx)(o.Modal, function(t) {
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
        }({
            actions: [{
                variant: "primary",
                text: b.intl.string(b.t.BddRzS),
                onClick: t.onClose
            }],
            title: b.intl.string(b.t.VbTh0E),
            subtitle: n
        }, t)))
    })
}

function g(t) {
    let {
        size: e,
        variant: n
    } = t, l = (0, s.bG)([f.default], () => f.default.getCurrentUser());
    a()(null != l, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [o, u] = i.useState(!1), d = i.useCallback(() => {
        u(!0), m(l).then(() => u(!1))
    }, [l]);
    return (0, r.jsx)(c.Button, {
        size: e,
        variant: n,
        onClick: d,
        text: b.intl.string(b.t.lm1UKt),
        disabled: o
    })
}