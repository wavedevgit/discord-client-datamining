/** chunk id: 930840 params = (module,exports,require) **/
n.d(t, {
    c: () => h
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(397927),
    c = n(957565),
    d = n(985018),
    u = n(770778);

function h(e) {
    let {
        chunks: t,
        className: n,
        onCopy: s,
        ...h
    } = e, m = l.useMemo(() => t?.join(" "), [t]), [A, g] = l.useState(!1), p = l.useCallback(() => {
        (0, c.C)(m, () => {
            g(!0), s?.()
        })
    }, [s, m]), f = A ? o.yr3 : o.TdU;
    return (0, i.jsx)(o.DUT, {
        className: a()(u.k, n),
        onClick: p,
        children: (0, i.jsx)(r.m, {
            text: A ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.OpuAlK),
            children: (0, i.jsx)(f, {
                ...h,
                size: "xxs",
                color: A ? o.LU0.colors.TEXT_FEEDBACK_POSITIVE : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })
        })
    })
}