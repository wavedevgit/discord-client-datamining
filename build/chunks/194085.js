/** chunk id: 194085 params = (module,exports,require) **/
n.d(t, {
    $$: () => o,
    Ay: () => A,
    qv: () => d
});
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(990078),
    u = n(101555),
    c = n(782731);
let d = a.forwardRef(function(e, t) {
    let {
        label: n,
        ariaLabel: a,
        tooltipText: s,
        icon: d,
        iconProps: o,
        onClick: A,
        onTooltipShow: h,
        onTooltipHide: _,
        disabled: m,
        dangerous: I,
        separator: E,
        buttonClassName: N,
        children: g,
        ...L
    } = e;
    return (0, l.jsx)(r.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: s ?? n,
        "aria-label": n,
        onTooltipShow: h,
        onTooltipHide: _,
        children: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(u.$n, {
                ref: t,
                className: i()(c.W1, N),
                onClick: e => {
                    A(e)
                },
                "aria-label": a ?? n,
                disabled: m,
                dangerous: I,
                ...L,
                children: [null != d ? (0, l.jsx)(d, {
                    className: c.Kk,
                    color: "currentColor",
                    ...o
                }) : null, null != g ? (0, l.jsx)("div", {
                    className: i()(c.Kk, c.IO),
                    children: g
                }) : null]
            }), E && (0, l.jsx)(u.wv, {})]
        })
    })
});

function o(e) {
    let {
        className: t
    } = e;
    return (0, l.jsx)("div", {
        className: i()(c.me, t)
    })
}

function A(e) {
    let {
        children: t,
        ...n
    } = e;
    return (0, l.jsx)(u.Ay, {
        className: i()(n.className, c.oO),
        children: t
    })
}