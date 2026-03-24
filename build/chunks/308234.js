/** chunk id: 308234 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(415350),
    d = n(366468),
    c = n(206314);

function u(e) {
    let {
        color: t,
        className: n,
        variant: r,
        text: u,
        lineClamp: _
    } = e, m = (0, s.$Il)(), h = a.useMemo(() => null == u ? null : (0, o.A)(u, !0, {
        allowHeading: null == _,
        allowList: null == _,
        initialHeaderLevel: m
    }), [u, _, m]);
    return (0, i.jsx)(s.Text, {
        className: l()(n, c.PT, {
            [d.E]: null != _ && _ > 1,
            [d.D]: 1 === _
        }),
        color: t,
        variant: r,
        lineClamp: _,
        children: h
    })
}