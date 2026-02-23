/** chunk id: 777117, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(311907),
    a = n(397927),
    r = n(252452),
    l = n(628965),
    o = n(513664),
    c = n(768908),
    d = n(790076),
    u = n(523418),
    _ = n(857266),
    m = n(652215),
    A = n(985018),
    g = n(461225);

function h() {
    let e = (0, u.b)(),
        t = (0, s.bG)([l.A], () => l.A.getSubsection()),
        n = null != t && e.some(e => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.Heading, {
            className: g.R_,
            variant: "heading-xl/semibold",
            children: A.intl.string(A.t.URyqtP)
        }), (0, i.jsx)(a.VQ0, {
            className: g.$H,
            selectedItem: n,
            onItemSelect: e => {
                r.A.setSection(m.nc_.GAMES, e)
            },
            orientation: "horizontal",
            type: "top",
            look: "brand",
            children: e.map(e => (0, i.jsxs)(a.VQ0.Item, {
                className: g.Mf,
                id: e.id,
                "aria-label": e.title,
                children: [(0, i.jsx)(e.icon, {
                    className: g.Ll,
                    color: "currentColor"
                }), (0, i.jsx)("div", {
                    className: g.cq,
                    children: e.title
                })]
            }, e.id))
        }), (() => {
            switch (n) {
                case _.J.OVERLAY:
                    return (0, i.jsx)(d.Ay, {});
                case _.J.ACTIVITY_PRIVACY:
                    return (0, i.jsx)(o.Ay, {});
                case _.J.MY_GAMES:
                default:
                    return (0, i.jsx)(c.Ay, {
                        className: g.rf,
                        showHeader: !1
                    })
            }
        })()]
    })
}