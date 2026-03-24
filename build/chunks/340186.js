/** chunk id: 340186 params = (module,exports,require) **/
n.d(t, {
    g: () => C
});
var i = n(934551),
    s = n(554146),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(358776),
    d = n(850060),
    c = n(729770),
    u = n(176817),
    m = n(297354),
    g = n(256464),
    _ = n(982770),
    x = n(461158),
    A = n(81453),
    h = n(289882),
    p = n(427887),
    f = n(222323),
    T = n(411476),
    E = n(985018);
let S = (0, l.t_)(r.X.CHAT_PANEL, {
        useTitle: () => E.intl.string(E.t["/VQax8"]),
        buildLayout: () => [_.M, u.f, m.z, p.J, A.n, f.p, T.U, x.W, h.o, g.c]
    }),
    b = [{
        badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: s.M.FAVORITES_GUILD_NEW_BADGE,
        StronglyDiscouragedCustomComponent: c.L
    }],
    C = (0, l.i4)(r.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["/VQax8"]),
        icon: i.ChatIcon,
        usePredicate: () => !(0, o.Ci)("ChatSidebarItem"),
        useMenu: d.A,
        getDismissibleBadges: () => b,
        buildLayout: () => [S]
    })