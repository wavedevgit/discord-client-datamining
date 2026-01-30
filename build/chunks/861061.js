/** chunk id: 861061, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Jj: () => _
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(768908),
    u = i(682262),
    o = i(644619),
    d = i(474069),
    T = i(531525),
    c = i(985018);
let A = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => c.intl.string(c.t.AVDyEj),
        StronglyDiscouragedCustomComponent: a.Ay,
        buildLayout: () => [],
        usePredicate: () => !(0, r.dk)("RegisteredGamesPanel")
    }),
    S = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => c.intl.string(c.t.AVDyEj),
        usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
        buildLayout: () => [d.i, o.G]
    }),
    _ = (0, l.i4)(s.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.AVDyEj),
        getLegacySearchKey: () => (0, r.WJ)("RegisteredGamesPanel") ? void 0 : T.H.REGISTERED_GAMES,
        icon: n.GameControllerIcon,
        usePredicate: u.Pi,
        buildLayout: () => (0, r.WJ)("RegisteredGamesPanel") ? [S] : [A]
    })