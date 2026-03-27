/** chunk id: 194085 params = (module,exports,require) **/
n.d(t, {
    $$: () => u,
    Ay: () => h,
    qv: () => d
});
var l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    i = n(990078),
    o = n(101555),
    c = n(885972);
let d = s.forwardRef(function(e, t) {
    let {
        label: n,
        ariaLabel: s,
        tooltipText: a,
        icon: d,
        iconProps: u,
        onClick: h,
        onTooltipShow: m,
        onTooltipHide: x,
        disabled: g,
        dangerous: p,
        separator: v,
        buttonClassName: j,
        children: f,
        ...N
    } = e;
    return (0, l.jsx)(i.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: a ?? n,
        "aria-label": n,
        onTooltipShow: m,
        onTooltipHide: x,
        children: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(o.$n, {
                ref: t,
                className: r()(c.W1, j),
                onClick: e => {
                    h(e)
                },
                "aria-label": s ?? n,
                disabled: g,
                dangerous: p,
                ...N,
                children: [null != d ? (0, l.jsx)(d, {
                    className: c.Kk,
                    color: "currentColor",
                    ...u
                }) : null, null != f ? (0, l.jsx)("div", {
                    className: r()(c.Kk, c.IO),
                    children: f
                }) : null]
            }), v && (0, l.jsx)(o.wv, {})]
        })
    })
});

function u(e) {
    let {
        className: t
    } = e;
    return (0, l.jsx)("div", {
        className: r()(c.me, t)
    })
}

function h(e) {
    let {
        children: t,
        ...n
    } = e;
    return (0, l.jsx)(o.Ay, {
        className: r()(n.className, c.oO),
        children: t
    })
}