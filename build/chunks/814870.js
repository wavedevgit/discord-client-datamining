/** chunk id: 814870, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => _
});
var n = i(627968);
i(64700);
var l = i(934551),
    s = i(611371),
    r = i(757036),
    u = i(967370),
    a = i(557571),
    o = i(419954),
    d = i(933297),
    T = i(780964),
    A = i(368631),
    S = i(410166),
    c = i(985018),
    E = i(895431);
let g = (0, o.t_)(T.X.PRIVATE_BROWSING_PANEL, {
        useTitle: () => c.intl.string(E.default.UAA4V5),
        useBadge: () => (0, n.jsx)(s.A, {}),
        buildLayout: () => [S.r]
    }),
    _ = (0, o.i4)(T.X.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(E.default.UAA4V5),
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
            type: d.S.BADGE_NEW,
            getDismissibleContentTypes: A.Tq
        }
    })