/** chunk id: 377045, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(607399),
    a = n(311907),
    r = n(397927),
    o = n(58736),
    c = n(353202),
    d = n(544028),
    u = n(967198),
    h = n(652215),
    A = n(985018),
    p = n(70461);

function m(e) {
    let t, {
        channelId: m
    } = e;
    s.useEffect(() => {
        c.A.loadThread(m)
    });
    let g = (0, a.bG)([u.A], () => u.A.getGuildId()) === h.YYv,
        _ = (0, a.bG)([d.A], () => d.A.theme);
    return t = g ? (0, i.jsx)(r.SGT, {
        note: A.intl.string(A.t["D5SN5/"]),
        children: A.intl.string(A.t.xVTAdb)
    }) : null != m ? (0, i.jsx)(r.y$y, {
        type: r.y$y.Type.SPINNING_CIRCLE
    }) : (0, i.jsx)(r.SGT, {
        note: A.intl.string(A.t["LTr+x9"]),
        children: A.intl.string(A.t.ai6Lbr)
    }), (0, i.jsxs)("div", {
        className: p.j,
        children: [l.Fr && (0, i.jsx)(o.Ay, {
            children: null
        }), (0, i.jsxs)(r.ppr, {
            theme: _,
            children: [(0, i.jsx)(r.G8R, {
                darkSrc: g ? n(556708) : n(355937),
                lightSrc: g ? n(828140) : n(332327),
                width: 272,
                height: 222
            }), t]
        })]
    })
}