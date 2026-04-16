/** chunk id: 495022 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    a = n(397927),
    s = n(951707),
    l = n(744064),
    o = n(674624),
    c = n(985018),
    d = n(758495);

function u(e) {
    let {
        glowingPerkId: t = null
    } = e, n = (0, o.Ay)(), u = null != t ? n.find(e => e?.id === t) : null, [_, m] = (0, r.useState)(u?.categories[0] ?? o.jW.BEST_OF_NITRO), p = (0, r.useMemo)(() => n.filter(e => null != e && e.categories.includes(_)), [n, _]);
    return (0, i.jsxs)("div", {
        className: d.uW,
        children: [(0, i.jsx)(a.Heading, {
            variant: "display-sm",
            className: d.R_,
            children: c.intl.string(c.t["Uh3+CA"])
        }), (0, i.jsx)(a.VQ0, {
            type: "top-pill",
            look: "custom",
            selectedItem: _,
            onItemSelect: m,
            className: d.Lq,
            "aria-label": c.intl.string(c.t["Uh3+CA"]),
            children: o.w1.map(e => (0, i.jsx)(a.VQ0.Item, {
                id: e.id,
                className: d.IC,
                children: e.label()
            }, e.id))
        }), (0, i.jsx)(s.A, {
            gap: 20,
            className: d.jG,
            children: p.map(e => {
                if (null != e) return (0, i.jsx)(l.S, {
                    ...e,
                    glowing: t === e.id,
                    containerClassName: d.Ui
                }, e.id)
            })
        }, _)]
    })
}