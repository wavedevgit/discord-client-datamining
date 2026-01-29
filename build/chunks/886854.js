/** Chunk was on 4670 **/
/** chunk id: 886854, original params: e,t,i (module,exports,require) **/
i.d(t, {
    yj: () => N
});
var n = i(934551),
    l = i(920603),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(368631),
    d = i(614651),
    T = i(859669),
    c = i(662802),
    A = i(988208),
    S = i(819070),
    _ = i(352694),
    E = i(136451),
    g = i(531525),
    I = i(985018);
let O = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        initialize: () => {
            (0, l.v)()
        },
        buildLayout: () => [_.S, c._, E.b, A.U, S.M, T.d]
    }),
    C = (0, s.t_)(a.X.APPEARANCE_PANEL, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: d.Ay,
        buildLayout: () => []
    }),
    N = (0, s.i4)(a.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t["iHH+ky"]),
        getLegacySearchKey: () => (0, u.WJ)("AppearanceSidebarItem") ? void 0 : g.H.APPEARANCE,
        icon: n.PaintPaletteIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: o.p_,
            stronglyDiscouragedBadgeComponent: o.AW
        },
        buildLayout: () => (0, u.WJ)("AppearanceSidebarItem") ? [O] : [C]
    })