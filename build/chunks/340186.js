/** chunk id: 340186 params = (module,exports,require) **/
n.d(t, {
    g: () => b
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
    _ = n(256464),
    g = n(982770),
    A = n(461158),
    x = n(81453),
    p = n(289882),
    h = n(427887),
    T = n(222323),
    E = n(411476),
    f = n(985018);
let S = (0, l.t_)(r.X.CHAT_PANEL, {
        useTitle: () => f.intl.string(f.t["/VQax8"]),
        buildLayout: () => [g.M, u.f, m.z, h.J, x.n, T.p, E.U, A.W, p.o, _.c]
    }),
    C = [{
        badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: s.M.FAVORITES_GUILD_NEW_BADGE,
        StronglyDiscouragedCustomComponent: c.L
    }],
    b = (0, l.i4)(r.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => f.intl.string(f.t["/VQax8"]),
        icon: i.ChatIcon,
        usePredicate: () => !(0, o.Ci)("ChatSidebarItem"),
        useMenu: d.A,
        getDismissibleBadges: () => C,
        buildLayout: () => [S]
    })