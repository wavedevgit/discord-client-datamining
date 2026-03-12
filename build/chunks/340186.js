/** chunk id: 340186 params = (module,exports,require) **/
n.d(t, {
    g: () => N
});
var i = n(934551),
    s = n(554146),
    l = n(419954),
    r = n(933297),
    a = n(780964),
    o = n(358776),
    d = n(850060),
    c = n(729770),
    u = n(176817),
    _ = n(74973),
    m = n(256464),
    g = n(982770),
    A = n(461158),
    h = n(81453),
    x = n(289882),
    p = n(427887),
    T = n(222323),
    E = n(411476),
    C = n(985018);
let S = (0, l.t_)(a.X.CHAT_PANEL, {
        useTitle: () => C.intl.string(C.t["/VQax8"]),
        buildLayout: () => [g.M, u.f, _.z, p.J, h.n, T.p, E.U, A.W, x.o, m.c]
    }),
    f = [{
        badgeType: r.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: s.M.FAVORITES_GUILD_NEW_BADGE,
        StronglyDiscouragedCustomComponent: c.L
    }],
    N = (0, l.i4)(a.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => C.intl.string(C.t["/VQax8"]),
        icon: i.ChatIcon,
        usePredicate: () => !(0, o.Ci)("ChatSidebarItem"),
        useMenu: d.A,
        getDismissibleBadges: () => f,
        buildLayout: () => [S]
    })