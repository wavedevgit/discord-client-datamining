/** chunk id: 495022 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(951707),
    r = n(744064),
    o = n(674624),
    d = n(985018),
    c = n(415774);

function u(e) {
    let {
        glowingPerkId: t = null
    } = e, n = (0, o.Ay)(), u = null != t ? n.find(e => e?.id === t) : null, [m, g] = (0, s.useState)(u?.categories[0] ?? o.jW.BEST_OF_NITRO), _ = (0, s.useMemo)(() => n.filter(e => null != e && e.categories.includes(m)), [n, m]);
    return (0, i.jsxs)("div", {
        className: c.uW,
        children: [(0, i.jsx)(l.Heading, {
            variant: "display-sm",
            className: c.R_,
            children: d.intl.string(d.t["Uh3+CA"])
        }), (0, i.jsx)(l.VQ0, {
            type: "top-pill",
            look: "custom",
            selectedItem: m,
            onItemSelect: g,
            className: c.Lq,
            "aria-label": d.intl.string(d.t["Uh3+CA"]),
            children: o.w1.map(e => (0, i.jsx)(l.VQ0.Item, {
                id: e.id,
                className: c.IC,
                children: e.label()
            }, e.id))
        }), (0, i.jsx)(a.A, {
            gap: 20,
            className: c.jG,
            children: _.map(e => {
                if (null != e) return (0, i.jsx)(r.S, {
                    ...e,
                    glowing: t === e.id,
                    containerClassName: c.Ui
                }, e.id)
            })
        }, m)]
    })
}