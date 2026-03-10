/** chunk id: 194085 params = (module,exports,require) **/
n.d(t, {
    $$: () => u,
    Ay: () => A,
    qv: () => o
});
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(990078),
    c = n(101555),
    d = n(930901);
let o = a.forwardRef(function(e, t) {
    let {
        label: n,
        ariaLabel: a,
        tooltipText: s,
        icon: o,
        iconProps: u,
        onClick: A,
        onTooltipShow: h,
        onTooltipHide: _,
        disabled: m,
        dangerous: I,
        separator: N,
        buttonClassName: E,
        children: L,
        ...g
    } = e;
    return (0, l.jsx)(r.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: s ?? n,
        "aria-label": n,
        onTooltipShow: h,
        onTooltipHide: _,
        children: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(c.$n, {
                ref: t,
                className: i()(d.W1, E),
                onClick: e => {
                    A(e)
                },
                "aria-label": a ?? n,
                disabled: m,
                dangerous: I,
                ...g,
                children: [null != o ? (0, l.jsx)(o, {
                    className: d.Kk,
                    color: "currentColor",
                    ...u
                }) : null, null != L ? (0, l.jsx)("div", {
                    className: i()(d.Kk, d.IO),
                    children: L
                }) : null]
            }), N && (0, l.jsx)(c.wv, {})]
        })
    })
});

function u(e) {
    let {
        className: t
    } = e;
    return (0, l.jsx)("div", {
        className: i()(d.me, t)
    })
}

function A(e) {
    let {
        children: t,
        ...n
    } = e;
    return (0, l.jsx)(c.Ay, {
        className: i()(n.className, d.oO),
        children: t
    })
}