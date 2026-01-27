/** Chunk was on 82575 **/
/** chunk id: 777117, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(252452),
    a = n(628965),
    o = n(513664),
    c = n(768908),
    d = n(790076),
    u = n(523418),
    g = n(857266),
    h = n(652215),
    x = n(985018),
    p = n(461225);

function A() {
    let e = (0, u.b)(),
        t = (0, s.bG)([a.A], () => a.A.getSubsection()),
        n = null != t && e.some(e => e.id === t) ? t : e[0].id;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Heading, {
            className: p.R_,
            variant: "heading-xl/semibold",
            children: x.intl.string(x.t.URyqtP)
        }), (0, i.jsx)(l.VQ0, {
            className: p.$H,
            selectedItem: n,
            onItemSelect: e => {
                r.A.setSection(h.nc_.GAMES, e)
            },
            orientation: "horizontal",
            type: "top",
            look: "brand",
            children: e.map(e => (0, i.jsxs)(l.VQ0.Item, {
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
                case g.J.OVERLAY:
                    return (0, i.jsx)(d.Ay, {});
                case g.J.ACTIVITY_PRIVACY:
                    return (0, i.jsx)(o.Ay, {});
                case g.J.MY_GAMES:
                default:
                    return (0, i.jsx)(c.Ay, {
                        className: p.rf,
                        showHeader: !1
                    })
            }
        })()]
    })
}