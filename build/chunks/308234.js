/** Chunk was on 64935 **/
/** chunk id: 308234, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(415350),
    c = n(366468),
    u = n(206314);

function d(e) {
    let {
        color: t,
        className: n,
        variant: l,
        text: d,
        lineClamp: p
    } = e, m = (0, s.$Il)(), f = i.useMemo(() => null == d ? null : (0, o.A)(d, !0, {
        allowHeading: null == p,
        allowList: null == p,
        initialHeaderLevel: m
    }), [d, p, m]);
    return (0, r.jsx)(s.Text, {
        className: a()(n, u.PT, {
            [c.E]: null != p && p > 1,
            [c.D]: 1 === p
        }),
        color: t,
        variant: l,
        lineClamp: p,
        children: f
    })
}