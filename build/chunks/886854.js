/** chunk id: 886854 params = (module,exports,require) **/
n.d(t, {
    j0: () => S,
    yj: () => I
});
var i = n(627968),
    s = n(934551),
    l = n(554146),
    a = n(397927),
    r = n(920603),
    o = n(419954),
    d = n(933297),
    c = n(780964),
    u = n(358776),
    _ = n(227542),
    g = n(859669),
    A = n(662802),
    m = n(988208),
    h = n(819070),
    p = n(352694),
    x = n(136451),
    E = n(985018);

function T() {
    return (0, i.jsx)(a.JIr, {
        text: E.intl.string(E.t.y2b7CA)
    })
}
let S = [{
        badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: l.M.CLIENT_THEMES_SETTINGS_BADGE,
        StronglyDiscouragedCustomComponent: T
    }, {
        badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
        dismissibleContent: l.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
        StronglyDiscouragedCustomComponent: T
    }, {
        badgeType: d.Xi.NEW,
        dismissibleContent: l.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
    }],
    C = (0, o.t_)(c.X.APPEARANCE_PANEL, {
        useTitle: () => E.intl.string(E.t["iHH+ky"]),
        initialize: () => {
            (0, r.v)()
        },
        buildLayout: () => [p.S, A._, x.u, m.U, h.M, g.d]
    }),
    I = (0, o.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["iHH+ky"]),
        icon: s.PaintPaletteIcon,
        usePredicate: () => !(0, u.bp)("AppearanceSidebarItem"),
        useMenu: _.A,
        getDismissibleBadges: () => S,
        buildLayout: () => [C]
    })