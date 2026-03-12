/** chunk id: 468881 params = (module,exports,require) **/
n.d(t, {
    w: () => b
});
var i = n(934551),
    s = n(419954),
    l = n(933297),
    r = n(780964),
    a = n(358776),
    o = n(916335),
    d = n(380450),
    c = n(41598),
    u = n(640351),
    _ = n(623049),
    m = n(43119),
    g = n(661485),
    A = n(411669),
    h = n(581837),
    x = n(666196),
    p = n(654757),
    T = n(556710),
    E = n(305290),
    C = n(8187),
    S = n(985018);
let f = (0, s.t_)(r.X.ACCESSIBILITY_PANEL, {
        useTitle: () => S.intl.string(S.t.G0neg7),
        buildLayout: () => [c.s, T._, h.b, p.T, g.V, x.G, u.v, _.T]
    }),
    N = (0, s.t_)(r.X.ACCESSIBILITY_PANEL, {
        useTitle: () => S.intl.string(S.t.G0neg7),
        buildLayout: () => [E.U, C.P, A.l, p.T, m.X],
        decoration: {
            type: l.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: o.A,
            sticky: !0
        }
    }),
    b = (0, s.i4)(r.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.G0neg7),
        icon: i.AccessibilityIcon,
        useMenu: d.A,
        buildLayout: () => (0, a.Ci)("AccessibilityPanel") ? [N] : [f]
    })