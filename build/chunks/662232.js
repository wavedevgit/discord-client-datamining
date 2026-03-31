/** chunk id: 662232 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(544420),
    c = n(15285),
    u = n(985018),
    m = n(855548),
    g = n(962294),
    _ = n(287638),
    A = n(153335);

function x(e) {
    let {
        onClose: t
    } = e, n = (0, r.bG)([c.Ay], () => c.Ay.getCandidateGames()), [l, x] = s.useState(null), h = n.map(e => ({
        id: e.pid.toString(),
        value: e,
        label: null != e.name ? e.name : ""
    }));
    return (0, i.jsxs)(o.lGe, {
        className: a()(m.H, g.Y_),
        "aria-label": u.intl.string(u.t.GTCx0p),
        children: [(0, i.jsx)(o.ZiE, {
            selectionMode: "single",
            placeholder: u.intl.string(u.t.XqMe3N),
            value: l,
            options: h,
            onSelectionChange: function(e) {
                x(e)
            }
        }), (0, i.jsx)(o.cGx, {
            className: a()(A.Ot, A.QB)
        }), (0, i.jsxs)("div", {
            className: a()(m.o, _.xM),
            children: [(0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: t
            }), (0, i.jsx)(o.Button, {
                variant: "primary",
                text: u.intl.string(u.t.GTCx0p),
                disabled: null == l,
                onClick: function() {
                    null != l && (d.A.addGame(l.pid, l.name), t())
                }
            })]
        })]
    })
}