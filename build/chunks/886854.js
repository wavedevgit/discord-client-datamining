/** chunk id: 886854 params = (module,exports,require) **/
n.d(t, {
    j0: () => T,
    yj: () => C
});
var i = n(934551),
    s = n(554146),
    l = n(920603),
    r = n(419954),
    a = n(933297),
    o = n(780964),
    d = n(358776),
    c = n(227542),
    u = n(729770),
    _ = n(859669),
    m = n(662802),
    g = n(988208),
    A = n(819070),
    h = n(352694),
    x = n(136451),
    p = n(985018);
let T = [{
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
    E = (0, r.t_)(o.X.APPEARANCE_PANEL, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)()
        },
        buildLayout: () => [h.S, m._, x.u, g.U, A.M, _.d]
    }),
    C = (0, r.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => p.intl.string(p.t["iHH+ky"]),
        icon: i.PaintPaletteIcon,
        usePredicate: () => !(0, d.bp)("AppearanceSidebarItem"),
        useMenu: c.A,
        getDismissibleBadges: () => T,
        buildLayout: () => [E]
    })