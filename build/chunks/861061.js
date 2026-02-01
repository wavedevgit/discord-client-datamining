/** chunk id: 861061, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Jj: () => E
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(768908),
    a = i(682262),
    o = i(644619),
    d = i(474069),
    T = i(531525),
    A = i(985018);
let S = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => A.intl.string(A.t.AVDyEj),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => [],
        usePredicate: () => !(0, r.dk)("RegisteredGamesPanel")
    }),
    c = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => A.intl.string(A.t.AVDyEj),
        usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
        buildLayout: () => [d.i, o.G]
    }),
    E = (0, l.i4)(s.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t.AVDyEj),
        getLegacySearchKey: () => (0, r.WJ)("RegisteredGamesPanel") ? void 0 : T.H.REGISTERED_GAMES,
        icon: n.GameControllerIcon,
        usePredicate: a.Pi,
        buildLayout: () => (0, r.WJ)("RegisteredGamesPanel") ? [c] : [S]
    })