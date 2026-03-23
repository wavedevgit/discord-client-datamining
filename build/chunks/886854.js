/** chunk id: 886854 params = (module,exports,require) **/
n.d(t, {
    j0: () => T,
    yj: () => f
});
var i = n(934551),
    s = n(554146),
    l = n(920603),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(358776),
    c = n(227542),
    u = n(729770),
    m = n(859669),
    _ = n(662802),
    g = n(988208),
    A = n(819070),
    x = n(352694),
    p = n(136451),
    h = n(985018);
let T = [{
        badgeType: r.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: s.M.CLIENT_THEMES_SETTINGS_BADGE,
        StronglyDiscouragedCustomComponent: u.L
    }, {
        badgeType: r.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: s.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
        StronglyDiscouragedCustomComponent: u.L
    }, {
        badgeType: r.Xi.NEW,
        dismissibleContent: s.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
    }],
    E = (0, a.t_)(o.X.APPEARANCE_PANEL, {
        useTitle: () => h.intl.string(h.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)()
        },
        buildLayout: () => [x.S, _._, p.u, g.U, A.M, m.d]
    }),
    f = (0, a.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => h.intl.string(h.t["iHH+ky"]),
        icon: i.PaintPaletteIcon,
        usePredicate: () => !(0, d.bp)("AppearanceSidebarItem"),
        useMenu: c.A,
        getDismissibleBadges: () => T,
        buildLayout: () => [E]
    })