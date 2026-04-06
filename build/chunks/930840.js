/** chunk id: 930840 params = (module,exports,require) **/
s.d(t, {
    c: () => x
});
var r = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    c = s(990078),
    i = s(397927),
    o = s(957565),
    d = s(985018),
    u = s(523049);

function x(e) {
    let {
        chunks: t,
        className: s,
        onCopy: n,
        ...x
    } = e, h = l.useMemo(() => t?.join(" "), [t]), [m, _] = l.useState(!1), p = l.useCallback(() => {
        (0, o.C)(h, () => {
            _(!0), n?.()
        })
    }, [n, h]), j = m ? i.yr3 : i.TdU;
    return (0, r.jsx)(i.DUT, {
        className: a()(u.k, s),
        onClick: p,
        children: (0, r.jsx)(c.m, {
            text: m ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.OpuAlK),
            children: (0, r.jsx)(j, {
                ...x,
                size: "xxs",
                color: m ? i.LU0.colors.TEXT_FEEDBACK_POSITIVE : i.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })
        })
    })
}