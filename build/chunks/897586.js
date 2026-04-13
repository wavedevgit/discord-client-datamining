/** chunk id: 897586 params = (module,exports,require) **/
n.d(t, {
    du: () => T,
    j0: () => f,
    yj: () => E
});
var i = n(934551),
    s = n(554146),
    l = n(920603),
    r = n(419954),
    a = n(933297),
    o = n(780964),
    d = n(358776),
    c = n(227542),
    u = n(19462),
    m = n(672729),
    g = n(261590),
    _ = n(37148),
    x = n(937762),
    h = n(653026),
    A = n(63575),
    p = n(985018);

function T() {
    (0, l.v)()
}
let f = [{
        badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: s.M.CLIENT_THEMES_SETTINGS_BADGE,
        StronglyDiscouragedCustomComponent: u.L
    }, {
        badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: s.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
        StronglyDiscouragedCustomComponent: u.L
    }, {
        badgeType: a.Xi.NEW,
        dismissibleContent: s.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
    }],
    S = (0, r.t_)(o.X.APPEARANCE_PANEL, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        initialize: T,
        buildLayout: () => [h.S, g._, A.u, _.U, x.M, m.d]
    }),
    E = (0, r.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        icon: i.PaintPaletteIcon,
        usePredicate: () => !(0, d.bp)("AppearanceSidebarItem"),
        useMenu: c.A,
        getDismissibleBadges: () => f,
        buildLayout: () => [S]
    })