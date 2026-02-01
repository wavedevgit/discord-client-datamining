/** chunk id: 777117, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(252452),
    a = n(628965),
    o = n(513664),
    c = n(768908),
    u = n(790076),
    d = n(523418),
    p = n(857266),
    h = n(652215),
    g = n(985018),
    f = n(461225);

function m() {
    let e = (0, d.b)(),
        t = (0, l.bG)([a.A], () => a.A.getSubsection()),
        n = null != t && e.some(e => e.id === t) ? t : e[0].id;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.Heading, {
            className: f.R_,
            variant: "heading-xl/semibold",
            children: g.intl.string(g.t.URyqtP)
        }), (0, r.jsx)(i.VQ0, {
            className: f.$H,
            selectedItem: n,
            onItemSelect: e => {
                s.A.setSection(h.nc_.GAMES, e)
            },
            orientation: "horizontal",
            type: "top",
            look: "brand",
            children: e.map(e => (0, r.jsxs)(i.VQ0.Item, {
                className: f.Mf,
                id: e.id,
                "aria-label": e.title,
                children: [(0, r.jsx)(e.icon, {
                    className: f.Ll,
                    color: "currentColor"
                }), (0, r.jsx)("div", {
                    className: f.cq,
                    children: e.title
                })]
            }, e.id))
        }), (() => {
            switch (n) {
                case p.J.OVERLAY:
                    return (0, r.jsx)(u.Ay, {});
                case p.J.ACTIVITY_PRIVACY:
                    return (0, r.jsx)(o.Ay, {});
                case p.J.MY_GAMES:
                default:
                    return (0, r.jsx)(c.Ay, {
                        className: f.rf,
                        showHeader: !1
                    })
            }
        })()]
    })
}