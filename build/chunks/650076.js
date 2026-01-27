/** Chunk was on 20941 **/
/** chunk id: 650076, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(228524);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(397927),
    o = n(207963),
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
        state: m,
        executeStateUpdate: f
    } = (0, o.At)(e, null != d ? {
        type: t,
        value: d
    } : void 0), p = l.useMemo(() => (null == m ? void 0 : m.type) === t ? m.value : null, [m, t]), h = null != p, b = l.useMemo(() => n.map(e => ({
        name: e.label,
        value: e.value,
        desc: e.description
    })), [n]), g = e => {
        f({
            type: t,
            value: e
        })
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.z6M, {
            options: b,
            value: null != p ? p : "",
            onChange: g,
            required: a
        }), !a && (0, r.jsx)("div", {
            className: i()(u.H, {
                [u.d]: !h
            }),
            "aria-hidden": !h,
            children: (0, r.jsx)(s.Button, {
                text: c.intl.string(c.t["5uAtZN"]),
                variant: "secondary",
                size: "sm",
                onClick: () => g(null)
            })
        })]
    })
}