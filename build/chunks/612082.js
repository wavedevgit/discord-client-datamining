/** Chunk was on 20941 **/
/** chunk id: 612082, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(183766),
    o = n(158954),
    c = n(397927),
    u = n(854987),
    d = n(181380),
    m = n(420156);

function f(e) {
    let {
        onClick: t,
        children: n,
        className: a,
        contentClassName: f,
        active: p = !1,
        muteSound: h = !1,
        disabled: b = !1
    } = e, g = l.useContext(u.P), x = (0, c.rdh)(g.primaryColor).hex(), y = (0, c.rdh)(g.secondaryColor).hex(), v = (0, d.V)(s.A), j = l.useCallback(() => {
        b || (h || v(), null == t || t())
    }, [t, h, v, b]);
    return (0, r.jsx)(o.DUT, {
        className: i()(a, m.In, {
            [m.vu]: p,
            [m.r9]: b
        }),
        style: {
            backgroundColor: x
        },
        onClick: j,
        children: (0, r.jsx)("div", {
            className: i()(f, m.LG),
            style: {
                borderColor: y
            },
            children: n
        })
    })
}