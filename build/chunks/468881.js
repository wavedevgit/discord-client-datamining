/** chunk id: 468881, original params: t,e,i (module,exports,require) **/
i.d(e, {
    wC: () => y
});
var n = i(934551),
    l = i(419954),
    s = i(933297),
    a = i(780964),
    r = i(358776),
    u = i(805577),
    o = i(916335),
    d = i(380450),
    A = i(41598),
    T = i(640351),
    S = i(623049),
    E = i(43119),
    g = i(661485),
    c = i(411669),
    _ = i(581837),
    I = i(666196),
    C = i(654757),
    N = i(556710),
    O = i(305290),
    b = i(8187),
    p = i(531525),
    D = i(985018);
let L = (0, l.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => D.intl.string(D.t.G0neg7),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => []
    }),
    m = (0, l.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => D.intl.string(D.t.G0neg7),
        buildLayout: () => [A.s, N._, _.b, C.T, g.V, I.G, T.v, S.T]
    }),
    R = (0, l.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => D.intl.string(D.t.G0neg7),
        buildLayout: () => [O.U, b.P, c.l, C.T, E.X],
        decoration: {
            type: s.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: o.A,
            sticky: !0
        }
    }),
    y = (0, l.i4)(a.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => D.intl.string(D.t.G0neg7),
        getLegacySearchKey: () => (0, r.WJ)("AccessibilityPanel") ? void 0 : p.H.ACCESSIBILITY,
        icon: n.AccessibilityIcon,
        useMenu: d.A,
        buildLayout: () => (0, r.Ci)("AccessibilityPanel") ? [R] : (0, r.WJ)("AccessibilityPanel") ? [m] : [L]
    })