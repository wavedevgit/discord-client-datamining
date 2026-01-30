/** chunk id: 650076, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(228524);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(397927),
    s = n(207963),
    c = n(985018),
    u = n(141482);

function d(e) {
    let {
        type: t,
        options: n,
        required: a
    } = e, d = l.useMemo(() => {
        var e;
        return null == (e = n.find(e => e.default)) ? void 0 : e.value
    }, [n]), {
        state: p,
        executeStateUpdate: m
    } = (0, s.At)(e, null != d ? {
        type: t,
        value: d
    } : void 0), f = l.useMemo(() => (null == p ? void 0 : p.type) === t ? p.value : null, [p, t]), O = null != f, b = l.useMemo(() => n.map(e => ({
        name: e.label,
        value: e.value,
        desc: e.description
    })), [n]), y = e => {
        m({
            type: t,
            value: e
        })
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.z6M, {
            options: b,
            value: null != f ? f : "",
            onChange: y,
            required: a
        }), !a && (0, r.jsx)("div", {
            className: i()(u.H, {
                [u.d]: !O
            }),
            "aria-hidden": !O,
            children: (0, r.jsx)(o.Button, {
                text: c.intl.string(c.t["5uAtZN"]),
                variant: "secondary",
                size: "sm",
                onClick: () => y(null)
            })
        })]
    })
}