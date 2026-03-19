/** chunk id: 85648 params = (module,exports,require) **/
n.d(t, {
    S: () => v
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(554146),
    r = n(397927),
    o = n(419954),
    d = n(933297),
    c = n(780964),
    u = n(358776),
    _ = n(227542),
    m = n(264124),
    g = n(850060),
    A = n(886854),
    x = n(729770),
    h = n(274835),
    p = n(505112),
    T = n(163944),
    E = n(41197),
    S = n(28161),
    f = n(114074),
    C = n(413336),
    b = n(985018);
let N = (0, o.t_)(c.X.DISPLAY_PANEL, {
        useTitle: () => b.intl.string(b.t.DVatCa),
        buildLayout: () => [f.K, T.S, E.X, p.S, S.f, (0, C.$)(!0), h.J]
    }),
    I = [...A.j0, {
        badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: a.M.FAVORITES_GUILD_NEW_BADGE,
        StronglyDiscouragedCustomComponent: x.L
    }],
    v = (0, o.i4)(c.X.DISPLAY_SIDEBAR_ITEM, {
        useTitle: () => b.intl.string(b.t.DVatCa),
        icon: l.PaintPaletteIcon,
        usePredicate: () => (0, u.bp)("DisplaySidebarItem"),
        useMenu: function() {
            let e = (0, _.A)(),
                t = (0, g.A)(),
                n = (0, m.A)();
            return s.useMemo(() => {
                let s = [...e];
                return null != t && s.push((0, i.jsx)(r.rXV, {
                    label: b.intl.string(b.t.Ob7VMB),
                    children: t
                }, "text-and-images")), null != n && s.push((0, i.jsx)(r.rXV, {
                    children: n
                }, "streamer-mode")), s
            }, [e, t, n])
        },
        getDismissibleBadges: () => I,
        buildLayout: () => [N]
    })