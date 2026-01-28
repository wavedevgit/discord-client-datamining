/** Chunk was on 28979 **/
/** chunk id: 211639, original params: t,e,i (module,exports,require) **/
i.d(e, {
    TC: () => N
});
var n = i(934551),
    l = i(824552),
    s = i(419954),
    r = i(780964),
    u = i(358776),
    a = i(130066),
    o = i(601954),
    T = i(978431),
    d = i(731542),
    A = i(674082),
    S = i(570874),
    E = i(531525),
    g = i(985018);
let _ = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        StronglyDiscouragedCustomComponent: a.A,
        usePredicate: () => !(0, u.dk)("ContentAndSocialPanel"),
        buildLayout: () => []
    }),
    c = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [T.e, S.q, d.N, A.Y]
    }),
    I = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            l.A.fetch()
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [o.j]
    }),
    O = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        usePredicate: () => (0, u.dk)("ContentAndSocialPanel"),
        buildLayout: () => [c, I]
    }),
    N = (0, s.i4)(r.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        getLegacySearchKey: () => (0, u.WJ)("ContentAndSocialPanel") ? void 0 : E.H.CONTENT_SOCIAL,
        icon: n.ShieldUserIcon,
        buildLayout: () => (0, u.WJ)("ContentAndSocialPanel") ? [O] : [_]
    })