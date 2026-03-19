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
    _ = n(623049),
    m = n(43119),
    g = n(661485),
    A = n(411669),
    x = n(581837),
    h = n(666196),
    p = n(654757),
    T = n(556710),
    E = n(305290),
    S = n(8187),
    f = n(985018);
let C = (0, s.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => f.intl.string(f.t.G0neg7),
        buildLayout: () => [c.s, T._, x.b, p.T, g.V, h.G, u.v, _.T]
    }),
    b = (0, s.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => f.intl.string(f.t.G0neg7),
        buildLayout: () => [E.U, S.P, A.l, p.T, m.X],
        decoration: {
            type: l.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: o.A,
            sticky: !0
        }
    }),
    N = (0, s.i4)(a.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => f.intl.string(f.t.G0neg7),
        icon: i.AccessibilityIcon,
        useMenu: d.A,
        buildLayout: () => (0, r.Ci)("AccessibilityPanel") ? [b] : [C]
    })