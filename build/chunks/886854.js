/** chunk id: 886854, original params: t,e,i (module,exports,require) **/
i.d(e, {
    yj: () => C
});
var n = i(934551),
    l = i(920603),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(358776),
    o = i(368631),
    d = i(614651),
    T = i(859669),
    A = i(662802),
    S = i(988208),
    c = i(819070),
    E = i(352694),
    g = i(136451),
    _ = i(531525),
    I = i(985018);
let O = (0, s.t_)(u.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)()
        },
        buildLayout: () => [E.S, A._, g.b, S.U, c.M, T.d]
    }),
    N = (0, s.t_)(u.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: d.Ay,
        buildLayout: () => []
    }),
    C = (0, s.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        getLegacySearchKey: () => (0, a.WJ)("AppearanceSidebarItem") ? void 0 : _.H.APPEARANCE,
        icon: n.PaintPaletteIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: o.p_,
            stronglyDiscouragedBadgeComponent: o.AW
        },
        buildLayout: () => (0, a.WJ)("AppearanceSidebarItem") ? [O] : [N]
    })