/** chunk id: 708403 params = (module,exports,require) **/
n.d(t, {
    HY: () => m,
    OA: () => c,
    mA: () => u
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(957565),
    d = n(930821);

function c(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, a.jsx)("dl", {
        className: s()(d.qo, t),
        children: n
    })
}
let u = e => {
    let {
        name: t,
        children: n,
        copyValue: l
    } = e, [s, c] = i.useState(!1);
    return i.useEffect(() => {
        if (s) {
            let e = setTimeout(() => c(!1), 1e3);
            return () => clearTimeout(e)
        }
    }, [s]), (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("dt", {
            className: d.Bz,
            children: t
        }), (0, a.jsxs)("dd", {
            className: d.Nw,
            children: [n, null != l ? (0, a.jsx)(r.DUT, {
                tag: "span",
                className: d.nH,
                onClick: () => (0, o.C)(l, () => c(!0)),
                children: s ? (0, a.jsx)(r.Uzd, {
                    color: "currentColor",
                    size: "sm"
                }) : (0, a.jsx)(r.TdU, {
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
    return (0, a.jsx)(r.P7L, {
        checked: t
    })
}