/** chunk id: 308234 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(397927),
    o = n(415350),
    d = n(726169),
    c = n(782691);

function u(e) {
    let {
        color: t,
        className: n,
        variant: r,
        text: u,
        lineClamp: m
    } = e, _ = (0, a.$Il)(), h = l.useMemo(() => null == u ? null : (0, o.A)(u, !0, {
        allowHeading: null == m,
        allowList: null == m,
        initialHeaderLevel: _
    }), [u, m, _]);
    return (0, i.jsx)(a.Text, {
        className: s()(n, c.PT, {
            [d.E]: null != m && m > 1,
            [d.D]: 1 === m
        }),
        color: t,
        variant: r,
        lineClamp: m,
        children: h
    })
}