/** chunk id: 308234 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(397927),
    o = n(415350),
    d = n(726169),
    c = n(782691);

function u(e) {
    let {
        color: t,
        className: n,
        variant: l,
        text: u,
        lineClamp: _
    } = e, m = (0, s.$Il)(), h = a.useMemo(() => null == u ? null : (0, o.A)(u, !0, {
        allowHeading: null == _,
        allowList: null == _,
        initialHeaderLevel: m
    }), [u, _, m]);
    return (0, i.jsx)(s.Text, {
        className: r()(n, c.PT, {
            [d.E]: null != _ && _ > 1,
            [d.D]: 1 === _
        }),
        color: t,
        variant: l,
        lineClamp: _,
        children: h
    })
}