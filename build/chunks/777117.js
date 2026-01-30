/** chunk id: 777117, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    r = n(252452),
    a = n(628965),
    o = n(513664),
    c = n(768908),
    d = n(790076),
    u = n(523418),
    h = n(857266),
    g = n(652215),
    x = n(985018),
    p = n(461225);

function m() {
    let e = (0, u.b)(),
        t = (0, l.bG)([a.A], () => a.A.getSubsection()),
        n = null != t && e.some(e => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.Heading, {
            className: p.R_,
            variant: "heading-xl/semibold",
            children: x.intl.string(x.t.URyqtP)
        }), (0, i.jsx)(s.VQ0, {
            className: p.$H,
            selectedItem: n,
            onItemSelect: e => {
                r.A.setSection(g.nc_.GAMES, e)
            },
            orientation: "horizontal",
            type: "top",
            look: "brand",
            children: e.map(e => (0, i.jsxs)(s.VQ0.Item, {
                className: p.Mf,
                id: e.id,
                "aria-label": e.title,
                children: [(0, i.jsx)(e.icon, {
                    className: p.Ll,
                    color: "currentColor"
                }), (0, i.jsx)("div", {
                    className: p.cq,
                    children: e.title
                })]
            }, e.id))
        }), (() => {
            switch (n) {
                case h.J.OVERLAY:
                    return (0, i.jsx)(d.Ay, {});
                case h.J.ACTIVITY_PRIVACY:
                    return (0, i.jsx)(o.Ay, {});
                case h.J.MY_GAMES:
                default:
                    return (0, i.jsx)(c.Ay, {
                        className: p.rf,
                        showHeader: !1
                    })
            }
        })()]
    })
}