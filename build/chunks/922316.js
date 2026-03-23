/** chunk id: 922316 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(397927),
    d = n(234560),
    c = n(613912),
    u = n(661251),
    m = n(288198);
let h = [{
        id: "virtual-currency",
        name: "Virtual Current (Orb) Components"
    }, {
        id: "nitro",
        name: "Nitro Components"
    }],
    p = {
        "virtual-currency": c.B,
        nitro: d.$
    };

function x() {
    let [e, t] = i.useState("virtual-currency"), n = i.useMemo(() => p[e], [e]);
    return (0, a.jsxs)("div", {
        className: s()(u.nd, m.kL),
        children: [(0, a.jsx)(o.VQ0, {
            className: m.$H,
            selectedItem: e,
            onItemSelect: t,
            look: "brand",
            type: "top",
            orientation: "horizontal",
            children: h.map(e => (0, a.jsx)(o.VQ0.Item, {
                id: e.id,
                children: e.name
            }, e.id))
        }), (0, a.jsx)(r.ArX, {
            children: (0, a.jsx)("div", {
                className: m.Qs,
                children: (0, a.jsx)(n, {})
            })
        })]
    })
}