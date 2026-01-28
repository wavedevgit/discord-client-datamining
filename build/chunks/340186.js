/** Chunk was on 28979 **/
/** chunk id: 340186, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => b
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(16986),
    a = i(176817),
    o = i(74973),
    T = i(982770),
    d = i(196837),
    A = i(461158),
    S = i(81453),
    E = i(289882),
    g = i(427887),
    _ = i(222323),
    c = i(411476),
    I = i(531525),
    O = i(985018);
let N = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => O.intl.string(O.t["/VQax8"]),
        buildLayout: () => [T.M, a.f, o.z, g.J, S.n, _.p, c.U, A.W, E.o, d.B]
    }),
    C = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => O.intl.string(O.t["/VQax8"]),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    b = (0, l.i4)(s.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => O.intl.string(O.t["/VQax8"]),
        getLegacySearchKey: () => (0, r.WJ)("ChatPanel") ? void 0 : I.H.CHAT,
        icon: n.ChatIcon,
        buildLayout: () => [(0, r.WJ)("ChatPanel") ? N : C]
    })