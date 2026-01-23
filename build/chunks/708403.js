/** Chunk was on 36054 **/
/** chunk id: 708403, original params: e,t,n (module,exports,require) **/
n.d(t, {
    HY: () => m,
    OA: () => d,
    mA: () => u
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(397927),
    o = n(957565),
    c = n(661251);

function d(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, a.jsx)("dl", {
        className: i()(c.qo, t),
        children: n
    })
}
let u = e => {
    let {
        name: t,
        children: n,
        copyValue: r
    } = e, [i, d] = l.useState(!1);
    return l.useEffect(() => {
        if (i) {
            let e = setTimeout(() => d(!1), 1e3);
            return () => clearTimeout(e)
        }
    }, [i]), (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("dt", {
            className: c.Bz,
            children: t
        }), (0, a.jsxs)("dd", {
            className: c.Nw,
            children: [n, null != r ? (0, a.jsx)(s.DUT, {
                tag: "span",
                className: c.nH,
                onClick: () => (0, o.C)(r, () => d(!0)),
                children: i ? (0, a.jsx)(s.Uzd, {
                    color: "currentColor",
                    size: "sm"
                }) : (0, a.jsx)(s.TdU, {
                    color: "currentColor",
                    size: "sm"
                })
            }) : null]
        })]
    })
};

function m(e) {
    let {
        value: t
    } = e;
    return (0, a.jsx)(s.P7L, {
        checked: t
    })
}