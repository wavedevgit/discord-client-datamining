/** Chunk was on 4670 **/
/** chunk id: 211639, original params: e,t,i (module,exports,require) **/
i.d(t, {
    TC: () => C
});
var n = i(934551),
    l = i(824552),
    s = i(419954),
    r = i(780964),
    a = i(358776),
    u = i(130066),
    o = i(601954),
    d = i(978431),
    T = i(731542),
    c = i(674082),
    A = i(570874),
    S = i(531525),
    _ = i(985018);
let E = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        StronglyDiscouragedCustomComponent: u.A,
        usePredicate: () => !(0, a.dk)("ContentAndSocialPanel"),
        buildLayout: () => []
    }),
    g = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => _.intl.string(_.t["/7xJCF"]),
        buildLayout: () => [d.e, A.q, T.N, c.Y]
    }),
    I = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            l.A.fetch()
        },
        getTitle: () => _.intl.string(_.t.YpCiMt),
        buildLayout: () => [o.j]
    }),
    O = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        usePredicate: () => (0, a.dk)("ContentAndSocialPanel"),
        buildLayout: () => [g, I]
    }),
    C = (0, s.i4)(r.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        getLegacySearchKey: () => (0, a.WJ)("ContentAndSocialPanel") ? void 0 : S.H.CONTENT_SOCIAL,
        icon: n.ShieldUserIcon,
        buildLayout: () => (0, a.WJ)("ContentAndSocialPanel") ? [O] : [E]
    })