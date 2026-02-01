/** chunk id: 340186, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => C
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(16986),
    a = i(176817),
    o = i(74973),
    d = i(982770),
    T = i(461158),
    A = i(81453),
    S = i(289882),
    c = i(427887),
    E = i(222323),
    g = i(411476),
    _ = i(531525),
    I = i(985018);
let O = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => I.intl.string(I.t["/VQax8"]),
        buildLayout: () => [d.M, a.f, o.z, c.J, A.n, E.p, g.U, T.W, S.o]
    }),
    N = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => I.intl.string(I.t["/VQax8"]),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    C = (0, l.i4)(s.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t["/VQax8"]),
        getLegacySearchKey: () => (0, r.WJ)("ChatPanel") ? void 0 : _.H.CHAT,
        icon: n.ChatIcon,
        buildLayout: () => [(0, r.WJ)("ChatPanel") ? O : N]
    })