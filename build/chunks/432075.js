/** chunk id: 432075 params = (module,exports,require) **/
n.d(t, {
    W: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(662232),
    d = n(985018),
    c = n(287800),
    u = n(885106);
let m = () => {
    let e = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: r()(c.a, u.Gf),
        children: [(0, i.jsx)("span", {
            children: d.intl.string(d.t.xwhoqM)
        }), (0, i.jsx)(a.YNO, {
            targetElementRef: e,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(o.A, {
                    onClose: t
                })
            },
            align: "center",
            position: "bottom",
            children: t => (0, i.jsx)(a.QWc, {
                ...t,
                buttonRef: e,
                variant: "primary",
                textVariant: "text-sm/medium",
                text: d.intl.string(d.t.GjgdXe)
            })
        })]
    })
}