/** chunk id: 777117 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(252452),
    r = n(628965),
    o = n(513664),
    d = n(768908),
    c = n(790076),
    u = n(523418),
    _ = n(857266),
    g = n(652215),
    m = n(985018),
    A = n(632547);

function h() {
    let e = (0, u.b)(),
        t = (0, s.bG)([r.A], () => r.A.getSubsection()),
        n = null != t && e.some(e => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Heading, {
            className: A.R_,
            variant: "heading-xl/semibold",
            children: m.intl.string(m.t.URyqtP)
        }), (0, i.jsx)(l.VQ0, {
            className: A.$H,
            selectedItem: n,
            onItemSelect: e => {
                a.A.setSection(g.nc_.GAMES, e)
            },
            orientation: "horizontal",
            type: "top",
            look: "brand",
            children: e.map(e => (0, i.jsxs)(l.VQ0.Item, {
                className: A.Mf,
                id: e.id,
                "aria-label": e.title,
                children: [(0, i.jsx)(e.icon, {
                    className: A.Ll,
                    color: "currentColor"
                }), (0, i.jsx)("div", {
                    className: A.cq,
                    children: e.title
                })]
            }, e.id))
        }), (() => {
            switch (n) {
                case _.J.OVERLAY:
                    return (0, i.jsx)(c.Ay, {});
                case _.J.ACTIVITY_PRIVACY:
                    return (0, i.jsx)(o.Ay, {});
                case _.J.MY_GAMES:
                default:
                    return (0, i.jsx)(d.Ay, {
                        className: A.rf,
                        showHeader: !1
                    })
            }
        })()]
    })
}