/** chunk id: 731091, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    g: () => g
});
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(827734),
    r = n(990078),
    o = n(397927),
    c = n(932883),
    d = n(599486),
    u = n(394953),
    h = n(628325),
    A = n(849077),
    m = n(985018),
    p = n(576539);

function g(e) {
    let {
        className: t
    } = e, n = (0, c.op)(), s = (0, u.i3)(), {
        selectedFilter: g,
        setSelectedFilter: _
    } = (0, d.A)(), f = (0, h.S)(e => e.setInboxReadState);
    if (!s) return null;
    let x = g === A.Io.ALL ? m.intl.string(m.t["2pAkDA"]) : m.intl.string(m.t.HcoRu0);
    return (0, i.jsx)(r.m, {
        position: "bottom",
        text: x,
        children: (0, i.jsx)(o.DUT, {
            className: l()(t, p.a, {
                [p.S]: g === A.Io.BOOKMARKS
            }),
            "aria-label": x,
            onClick: () => {
                let e = g === A.Io.ALL ? A.Io.BOOKMARKS : A.Io.ALL;
                _(e), e === A.Io.ALL && f(!1), (0, c.Ut)({
                    section: e,
                    enabled: !0,
                    viewId: n
                })
            },
            children: g === A.Io.BOOKMARKS ? (0, i.jsx)(o.cFy, {
                size: "xs",
                color: a.A.colors.ICON_DEFAULT.css
            }) : (0, i.jsx)(o.c$8, {
                size: "xs",
                color: a.A.colors.ICON_MUTED.css
            })
        })
    })
}