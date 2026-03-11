/** chunk id: 468881 params = (module,exports,require) **/
n.d(t, {
    w: () => N
});
var i = n(934551),
    s = n(419954),
    l = n(933297),
    a = n(780964),
    r = n(358776),
    o = n(916335),
    d = n(380450),
    c = n(41598),
    u = n(640351),
    _ = n(623049),
    g = n(43119),
    A = n(661485),
    m = n(411669),
    h = n(581837),
    p = n(666196),
    x = n(654757),
    E = n(556710),
    T = n(305290),
    S = n(8187),
    C = n(985018);
let I = (0, s.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => C.intl.string(C.t.G0neg7),
        buildLayout: () => [c.s, E._, h.b, x.T, A.V, p.G, u.v, _.T]
    }),
    f = (0, s.t_)(a.X.ACCESSIBILITY_PANEL, {
        useTitle: () => C.intl.string(C.t.G0neg7),
        buildLayout: () => [T.U, S.P, m.l, x.T, g.X],
        decoration: {
            type: l.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: o.A,
            sticky: !0
        }
    }),
    N = (0, s.i4)(a.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => C.intl.string(C.t.G0neg7),
        icon: i.AccessibilityIcon,
        useMenu: d.A,
        buildLayout: () => (0, r.Ci)("AccessibilityPanel") ? [f] : [I]
    })