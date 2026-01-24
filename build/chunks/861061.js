/** Chunk was on 28979 **/
/** chunk id: 861061, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Jj: () => _
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(768908),
    a = i(682262),
    o = i(644619),
    T = i(474069),
    A = i(531525),
    d = i(985018);
let S = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => d.intl.string(d.t.AVDyEj),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => [],
        usePredicate: () => !(0, r.dk)("RegisteredGamesPanel")
    }),
    E = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => d.intl.string(d.t.AVDyEj),
        usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
        buildLayout: () => [T.i, o.G]
    }),
    _ = (0, l.i4)(s.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t.AVDyEj),
        getLegacySearchKey: () => (0, r.WJ)("RegisteredGamesPanel") ? void 0 : A.H.REGISTERED_GAMES,
        icon: n.GameControllerIcon,
        usePredicate: a.Pi,
        buildLayout: () => (0, r.WJ)("RegisteredGamesPanel") ? [E] : [S]
    })