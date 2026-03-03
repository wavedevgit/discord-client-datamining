/** chunk id: 211639, original params: t,e,i (module,exports,require) **/
i.d(e, {
    TC: () => N
});
var n = i(934551),
    l = i(824552),
    s = i(419954),
    r = i(780964),
    a = i(358776),
    u = i(130066),
    o = i(601954),
    d = i(978431),
    A = i(731542),
    T = i(674082),
    S = i(570874),
    E = i(531525),
    g = i(985018);
let c = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        StronglyDiscouragedCustomComponent: u.A,
        usePredicate: () => !(0, a.dk)("ContentAndSocialPanel"),
        buildLayout: () => []
    }),
    _ = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [d.e, S.q, A.N, T.Y]
    }),
    I = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            l.A.fetch()
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [o.j]
    }),
    C = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        usePredicate: () => (0, a.dk)("ContentAndSocialPanel"),
        buildLayout: () => [_, I]
    }),
    N = (0, s.i4)(r.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        getLegacySearchKey: () => (0, a.WJ)("ContentAndSocialPanel") ? void 0 : E.H.CONTENT_SOCIAL,
        icon: n.ShieldUserIcon,
        buildLayout: () => (0, a.WJ)("ContentAndSocialPanel") ? [C] : [c]
    })