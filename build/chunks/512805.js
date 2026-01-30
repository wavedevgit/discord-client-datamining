/** chunk id: 512805, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(414079),
    a = n(980009);

function c(e) {
    let {
        hasSetEmoji: t,
        onClick: n,
        children: i,
        className: c,
        buttonClassName: u
    } = e, [d, m] = r.useState(!1), j = r.useCallback(() => {
        n(), m(!1)
    }, [n, m]);
    return (0, l.jsxs)("div", {
        className: o()(a.k, c),
        onMouseEnter: () => {
            t ? m(!0) : m(!1)
        },
        onMouseLeave: () => {
            m(!1)
        },
        children: [i, t && d ? (0, l.jsx)(s.A, {
            onClick: j,
            className: o()(a.D, u)
        }) : null]
    })
}