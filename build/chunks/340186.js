/** chunk id: 340186, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => D
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    a = i(358776),
    r = i(16986),
    u = i(850060),
    o = i(176817),
    d = i(74973),
    A = i(256464),
    T = i(982770),
    S = i(461158),
    E = i(81453),
    g = i(289882),
    c = i(427887),
    _ = i(222323),
    I = i(411476),
    C = i(531525),
    N = i(985018);
let O = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => N.intl.string(N.t["/VQax8"]),
        buildLayout: () => [T.M, o.f, d.z, c.J, E.n, _.p, A.c, I.U, S.W, g.o]
    }),
    b = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => N.intl.string(N.t["/VQax8"]),
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => []
    }),
    D = (0, l.i4)(s.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => N.intl.string(N.t["/VQax8"]),
        getLegacySearchKey: () => (0, a.WJ)("ChatPanel") ? void 0 : C.H.CHAT,
        icon: n.ChatIcon,
        usePredicate: () => !(0, a.Ci)("ChatSidebarItem"),
        useMenu: u.A,
        buildLayout: () => [(0, a.WJ)("ChatPanel") ? O : b]
    })