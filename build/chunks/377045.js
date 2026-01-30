/** chunk id: 377045, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(607399),
    s = n(311907),
    a = n(397927),
    o = n(58736),
    c = n(353202),
    u = n(544028),
    d = n(967198),
    h = n(652215),
    p = n(985018),
    g = n(70461);

function f(e) {
    let t, {
        channelId: f
    } = e;
    l.useEffect(() => {
        c.A.loadThread(f)
    });
    let m = (0, s.bG)([d.A], () => d.A.getGuildId()) === h.YYv,
        b = (0, s.bG)([u.A], () => u.A.theme);
    return t = m ? (0, r.jsx)(a.SGT, {
        note: p.intl.string(p.t["D5SN5/"]),
        children: p.intl.string(p.t.xVTAdb)
    }) : null != f ? (0, r.jsx)(a.y$y, {
        type: a.y$y.Type.SPINNING_CIRCLE
    }) : (0, r.jsx)(a.SGT, {
        note: p.intl.string(p.t["LTr+x9"]),
        children: p.intl.string(p.t.ai6Lbr)
    }), (0, r.jsxs)("div", {
        className: g.j,
        children: [i.Fr && (0, r.jsx)(o.Ay, {
            children: null
        }), (0, r.jsxs)(a.ppr, {
            theme: b,
            children: [(0, r.jsx)(a.G8R, {
                darkSrc: m ? n(556708) : n(355937),
                lightSrc: m ? n(828140) : n(332327),
                width: 272,
                height: 222
            }), t]
        })]
    })
}