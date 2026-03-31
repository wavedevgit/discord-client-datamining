/** chunk id: 876696 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    S: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(139033),
    c = n(397927),
    u = n(830215),
    m = n(287809),
    g = n(985018);

function _(e) {
    return u.A.verifyResend().then(() => {
        (0, d.A)({
            title: g.intl.string(g.t.LykQYk),
            subtitle: g.intl.format(g.t.azKEPy, {
                email: e.email
            })
        })
    }).catch(e => {
        let {
            body: t
        } = e, n = g.intl.string(g.t.XcrQN5);
        null != t && t.email && (n = t.email), (0, c.qfG)(e => (0, i.jsx)(r.Modal, {
            actions: [{
                variant: "primary",
                text: g.intl.string(g.t.BddRzS),
                onClick: e.onClose
            }],
            title: g.intl.string(g.t.VbTh0E),
            subtitle: n,
            ...e
        }))
    })
}

function A(e) {
    let {
        size: t,
        variant: n
    } = e, l = (0, o.bG)([m.default], () => m.default.getCurrentUser());
    a()(null != l, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [r, d] = s.useState(!1), u = s.useCallback(() => {
        d(!0), _(l).then(() => d(!1))
    }, [l]);
    return (0, i.jsx)(c.Button, {
        size: t,
        variant: n,
        onClick: u,
        text: g.intl.string(g.t.lm1UKt),
        disabled: r
    })
}