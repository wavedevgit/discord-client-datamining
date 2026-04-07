/** chunk id: 598733 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(686956),
    u = n(976860),
    h = n(71393),
    A = n(967198),
    _ = n(449054),
    m = n(652215),
    p = n(985018),
    g = n(236458),
    f = n(215433);
let x = () => {
    let e = (0, r.bG)([A.A], () => A.A.getGuildId(), []),
        t = (0, r.bG)([h.A], () => h.A.getGuild(e), [e]),
        [n, s] = l.useState(!1);
    if (null == t) return null;
    let x = async () => {
        s(!0);
        try {
            _.cf(t.id), await c.A.joinGuild(t.id, {
                source: m.Q4z.NOTICE_BAR
            })
        } catch {
            s(!1)
        }
    };
    return (0, i.jsxs)("div", {
        className: a()(g.lm, f.lm),
        children: [(0, i.jsxs)(o.$n, {
            look: o.$n.Looks.OUTLINED,
            color: o.$n.Colors.WHITE,
            size: o.$n.Sizes.NONE,
            className: a()(g.x6, g.aX),
            innerClassName: g.gb,
            onClick: () => {
                (0, u.JK)().goBack()
            },
            children: [(0, i.jsx)(d.rJJ, {
                size: "xs",
                color: "currentColor",
                className: g.UE
            }), p.intl.string(p.t["13/7kX"])]
        }), (0, i.jsx)(d.Text, {
            className: g.wx,
            variant: "text-sm/normal",
            children: p.intl.string(p.t["N/y2WE"])
        }), (0, i.jsx)(o.$n, {
            className: g.x6,
            look: o.$n.Looks.OUTLINED,
            color: o.$n.Colors.WHITE,
            size: o.$n.Sizes.NONE,
            submitting: n,
            onClick: x,
            children: p.intl.format(p.t.uHN7ny, {
                guild: t.name
            })
        })]
    })
}