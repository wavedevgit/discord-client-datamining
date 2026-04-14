/** chunk id: 308234 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    o = n(415350),
    d = n(726169),
    c = n(782691);

function u(e) {
    let {
        color: t,
        className: n,
        variant: s,
        text: u,
        lineClamp: _
    } = e, m = (0, a.$Il)(), h = l.useMemo(() => null == u ? null : (0, o.A)(u, !0, {
        allowHeading: null == _,
        allowList: null == _,
        initialHeaderLevel: m
    }), [u, _, m]);
    return (0, i.jsx)(a.Text, {
        className: r()(n, c.PT, {
            [d.E]: null != _ && _ > 1,
            [d.D]: 1 === _
        }),
        color: t,
        variant: s,
        lineClamp: _,
        children: h
    })
}