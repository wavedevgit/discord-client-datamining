/** chunk id: 662232 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(544420),
    c = n(15285),
    u = n(985018),
    m = n(133801),
    g = n(604949),
    _ = n(653307),
    x = n(818050);

function h(e) {
    let {
        onClose: t
    } = e, n = (0, a.bG)([c.Ay], () => c.Ay.getCandidateGames()), [l, h] = s.useState(null), A = n.map(e => ({
        id: e.pid.toString(),
        value: e,
        label: null != e.name ? e.name : ""
    }));
    return (0, i.jsxs)(o.lGe, {
        className: r()(m.H, g.Y_),
        "aria-label": u.intl.string(u.t.GTCx0p),
        children: [(0, i.jsx)(o.ZiE, {
            selectionMode: "single",
            placeholder: u.intl.string(u.t.XqMe3N),
            value: l,
            options: A,
            onSelectionChange: function(e) {
                h(e)
            }
        }), (0, i.jsx)(o.cGx, {
            className: r()(x.Ot, x.QB)
        }), (0, i.jsxs)("div", {
            className: r()(m.o, _.xM),
            children: [(0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: t
            }), (0, i.jsx)(o.Button, {
                variant: "primary",
                text: u.intl.string(u.t.GTCx0p),
                disabled: null == l,
                onClick: function() {
                    null != l && (d.Ay.addGame(l.pid, l.name), t())
                }
            })]
        })]
    })
}