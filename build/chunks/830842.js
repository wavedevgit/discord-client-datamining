/** chunk id: 830842, original params: t,e,i (module,exports,require) **/
i.d(e, {
    _: () => S
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    a = i(358776),
    r = i(69435),
    u = i(945353),
    o = i(531525),
    d = i(985018);
let A = (0, l.t_)(s.X.ADVANCED_PANEL, {
        useTitle: () => d.intl.string(d.t["8/udY0"]),
        usePredicate: () => !(0, a.dk)("LegacyAdvancedPanel"),
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => []
    }),
    T = (0, l.t_)(s.X.ADVANCED_PANEL, {
        useTitle: () => d.intl.string(d.t["8/udY0"]),
        usePredicate: () => (0, a.dk)("AdvancedPanel"),
        buildLayout: () => [u.J]
    }),
    S = (0, l.i4)(s.X.ADVANCED_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["8/udY0"]),
        getLegacySearchKey: () => (0, a.WJ)("AdvancedPanel") ? void 0 : o.H.SETTINGS_ADVANCED,
        icon: n.MoreHorizontalIcon,
        buildLayout: () => (0, a.WJ)("AdvancedPanel") ? [T] : [A]
    })