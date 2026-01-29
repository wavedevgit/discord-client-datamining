/** Chunk was on 1113 **/
/** chunk id: 731091, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => m
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    s = n(827734),
    a = n(990078),
    o = n(397927),
    c = n(932883),
    u = n(599486),
    d = n(394953),
    h = n(628325),
    p = n(849077),
    g = n(985018),
    f = n(576539);

function m(e) {
    let {
        className: t
    } = e, n = (0, c.op)(), l = (0, d.i3)(), {
        selectedFilter: m,
        setSelectedFilter: b
    } = (0, u.A)(), A = (0, h.S)(e => e.setInboxReadState);
    if (!l) return null;
    let y = m === p.Io.ALL ? g.intl.string(g.t["2pAkDA"]) : g.intl.string(g.t.HcoRu0);
    return (0, r.jsx)(a.m, {
        position: "bottom",
        text: y,
        children: (0, r.jsx)(o.DUT, {
            className: i()(t, f.a, {
                [f.S]: m === p.Io.BOOKMARKS
            }),
            "aria-label": y,
            onClick: () => {
                let e = m === p.Io.ALL ? p.Io.BOOKMARKS : p.Io.ALL;
                b(e), e === p.Io.ALL && A(!1), (0, c.Ut)({
                    section: e,
                    enabled: !0,
                    viewId: n
                })
            },
            children: m === p.Io.BOOKMARKS ? (0, r.jsx)(o.cFy, {
                size: "xs",
                color: s.A.colors.ICON_DEFAULT.css
            }) : (0, r.jsx)(o.c$8, {
                size: "xs",
                color: s.A.colors.ICON_MUTED.css
            })
        })
    })
}