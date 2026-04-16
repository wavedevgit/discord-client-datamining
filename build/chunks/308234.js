/** chunk id: 308234 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(415350),
    d = n(162025),
    c = n(992595);

function u(e) {
    let {
        color: t,
        className: n,
        variant: l,
        text: u,
        lineClamp: _
    } = e, m = (0, r.$Il)(), h = a.useMemo(() => null == u ? null : (0, o.A)(u, !0, {
        allowHeading: null == _,
        allowList: null == _,
        initialHeaderLevel: m
    }), [u, _, m]);
    return (0, i.jsx)(r.Text, {
        className: s()(n, c.PT, {
            [d.E]: null != _ && _ > 1,
            [d.D]: 1 === _
        }),
        color: t,
        variant: l,
        lineClamp: _,
        children: h
    })
}