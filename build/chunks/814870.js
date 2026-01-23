/** Chunk was on 28979 **/
/** chunk id: 814870, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => c
});
var n = i(627968);
i(64700);
var l = i(934551),
    s = i(611371),
    r = i(757036),
    u = i(967370),
    a = i(557571),
    o = i(419954),
    T = i(933297),
    A = i(780964),
    d = i(368631),
    S = i(410166),
    E = i(985018),
    _ = i(895431);
let g = (0, o.t_)(A.X.PRIVATE_BROWSING_PANEL, {
        useTitle: () => E.intl.string(_.default.UAA4V5),
        useBadge: () => (0, n.jsx)(s.A, {}),
        buildLayout: () => [S.r]
    }),
    c = (0, o.i4)(A.X.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(_.default.UAA4V5),
        icon: l.GlobeEarthIcon,
        usePredicate: () => {
            let t = (0, r.L)(),
                {
                    isSupportedPrivateBrowsingPerkPlatform: e,
                    isWeb: i,
                    perkAvailableToUser: n
                } = (0, a.lV)();
            return (0, u.lM)("private_browsing_perk_settings_page") && (e || i) && (!t || n)
        },
        buildLayout: () => [g],
        trailing: {
            type: T.S.BADGE_NEW,
            getDismissibleContentTypes: d.Tq
        }
    })