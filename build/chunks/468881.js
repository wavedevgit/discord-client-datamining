/** chunk id: 468881 params = (module,exports,require) **/
n.d(t, {
    w: () => N
});
var i = n(934551),
    s = n(419954),
    l = n(933297),
    a = n(780964),
    r = n(358776),
    o = n(733188),
    d = n(380450),
    c = n(41598),
    u = n(640351),
    m = n(623049),
    _ = n(43119),
    g = n(661485),
    A = n(411669),
    x = n(581837),
    p = n(666196),
    h = n(654757),
    f = n(556710),
    T = n(305290),
    E = n(8187),
    S = n(985018);
let b = (0, s.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => S.intl.string(S.t.G0neg7),
        buildLayout: () => [c.s, f._, x.b, h.T, g.V, p.G, u.v, m.T]
    }),
    C = (0, s.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => S.intl.string(S.t.G0neg7),
        buildLayout: () => [T.U, E.P, A.l, h.T, _.X],
        decoration: {
            type: l.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: o.A,
            sticky: !0
        }
    }),
    N = (0, s.i4)(a.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.G0neg7),
        icon: i.AccessibilityIcon,
        useMenu: d.A,
        buildLayout: () => (0, r.Ci)("AccessibilityPanel") ? [C] : [b]
    })