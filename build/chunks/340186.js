/** Chunk was on 4670 **/
/** chunk id: 340186, original params: e,t,i (module,exports,require) **/
i.d(t, {
    g: () => b
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(16986),
    u = i(176817),
    o = i(74973),
    d = i(982770),
    T = i(196837),
    c = i(461158),
    A = i(81453),
    S = i(289882),
    _ = i(427887),
    E = i(222323),
    g = i(411476),
    I = i(531525),
    O = i(985018);
let C = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => O.intl.string(O.t["/VQax8"]),
        buildLayout: () => [d.M, u.f, o.z, _.J, A.n, E.p, g.U, c.W, S.o, T.B]
    }),
    N = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => O.intl.string(O.t["/VQax8"]),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => []
    }),
    b = (0, l.i4)(s.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => O.intl.string(O.t["/VQax8"]),
        getLegacySearchKey: () => (0, r.WJ)("ChatPanel") ? void 0 : I.H.CHAT,
        icon: n.ChatIcon,
        buildLayout: () => [(0, r.WJ)("ChatPanel") ? C : N]
    })