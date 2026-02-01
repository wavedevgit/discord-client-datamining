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
    d = i(978431),
    T = i(731542),
    A = i(674082),
    S = i(570874),
    c = i(531525),
    E = i(985018);
let g = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => E.intl.string(E.t["+o1pDZ"]),
        StronglyDiscouragedCustomComponent: a.A,
        usePredicate: () => !(0, u.dk)("ContentAndSocialPanel"),
        buildLayout: () => []
    }),
    _ = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => E.intl.string(E.t["/7xJCF"]),
        buildLayout: () => [d.e, S.q, T.N, A.Y]
    }),
    I = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            l.A.fetch()
        },
        getTitle: () => E.intl.string(E.t.YpCiMt),
        buildLayout: () => [o.j]
    }),
    O = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => E.intl.string(E.t["+o1pDZ"]),
        usePredicate: () => (0, u.dk)("ContentAndSocialPanel"),
        buildLayout: () => [_, I]
    }),
    N = (0, s.i4)(r.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["+o1pDZ"]),
        getLegacySearchKey: () => (0, u.WJ)("ContentAndSocialPanel") ? void 0 : c.H.CONTENT_SOCIAL,
        icon: n.ShieldUserIcon,
        buildLayout: () => (0, u.WJ)("ContentAndSocialPanel") ? [O] : [g]
    })