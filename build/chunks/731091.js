/** chunk id: 731091 params = (module,exports,require) **/
n.d(t, {
    g: () => p
});
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(827734),
    r = n(990078),
    o = n(397927),
    d = n(932883),
    c = n(599486),
    u = n(394953),
    h = n(628325),
    A = n(849077),
    _ = n(985018),
    m = n(337376);

function p(e) {
    let {
        className: t
    } = e, n = (0, d.op)(), l = (0, u.i3)(), {
        selectedFilter: p,
        setSelectedFilter: g
    } = (0, c.A)(), f = (0, h.S)(e => e.setInboxReadState);
    if (!l) return null;
    let E = p === A.Io.ALL ? _.intl.string(_.t["2pAkDA"]) : _.intl.string(_.t.HcoRu0);
    return (0, i.jsx)(r.m, {
        position: "bottom",
        text: E,
        children: (0, i.jsx)(o.DUT, {
            className: s()(t, m.a, {
                [m.S]: p === A.Io.BOOKMARKS
            }),
            "aria-label": E,
            onClick: () => {
                let e = p === A.Io.ALL ? A.Io.BOOKMARKS : A.Io.ALL;
                g(e), e === A.Io.ALL && f(!1), (0, d.Ut)({
                    section: e,
                    enabled: !0,
                    viewId: n
                })
            },
            children: p === A.Io.BOOKMARKS ? (0, i.jsx)(o.cFy, {
                size: "xs",
                color: a.A.colors.ICON_DEFAULT.css
            }) : (0, i.jsx)(o.c$8, {
                size: "xs",
                color: a.A.colors.ICON_MUTED.css
            })
        })
    })
}