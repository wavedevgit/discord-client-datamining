/** chunk id: 194085 params = (module,exports,require) **/
n.d(t, {
    $$: () => u,
    Ay: () => h,
    qv: () => d
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(101555),
    c = n(520155);
let d = l.forwardRef(function(e, t) {
    let {
        label: n,
        ariaLabel: l,
        tooltipText: s,
        icon: d,
        iconProps: u,
        onClick: h,
        onTooltipShow: m,
        onTooltipHide: A,
        disabled: g,
        dangerous: p,
        separator: f,
        buttonClassName: _,
        children: E,
        ...C
    } = e;
    return (0, i.jsx)(r.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: s ?? n,
        "aria-label": n,
        onTooltipShow: m,
        onTooltipHide: A,
        children: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.$n, {
                ref: t,
                className: a()(c.W1, _),
                onClick: e => {
                    h(e)
                },
                "aria-label": l ?? n,
                disabled: g,
                dangerous: p,
                ...C,
                children: [null != d ? (0, i.jsx)(d, {
                    className: c.Kk,
                    color: "currentColor",
                    ...u
                }) : null, null != E ? (0, i.jsx)("div", {
                    className: a()(c.Kk, c.IO),
                    children: E
                }) : null]
            }), f && (0, i.jsx)(o.wv, {})]
        })
    })
});

function u(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)("div", {
        className: a()(c.me, t)
    })
}

function h(e) {
    let {
        children: t,
        ...n
    } = e;
    return (0, i.jsx)(o.Ay, {
        className: a()(n.className, c.oO),
        children: t
    })
}