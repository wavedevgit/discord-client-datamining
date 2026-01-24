/** Chunk was on 28979 **/
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
    T = i(614651),
    A = i(859669),
    d = i(662802),
    S = i(988208),
    E = i(819070),
    _ = i(352694),
    g = i(136451),
    c = i(531525),
    I = i(985018);
let O = (0, s.t_)(u.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)()
        },
        buildLayout: () => [_.S, d._, g.b, S.U, E.M, A.d]
    }),
    N = (0, s.t_)(u.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: T.Ay,
        buildLayout: () => []
    }),
    C = (0, s.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        getLegacySearchKey: () => (0, a.WJ)("AppearanceSidebarItem") ? void 0 : c.H.APPEARANCE,
        icon: n.PaintPaletteIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: o.p_,
            stronglyDiscouragedBadgeComponent: o.AW
        },
        buildLayout: () => (0, a.WJ)("AppearanceSidebarItem") ? [O] : [N]
    })