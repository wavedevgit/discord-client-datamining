/** chunk id: 784959, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => S
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    a = i(358776),
    r = i(640068),
    u = i(84654),
    o = i(1626);
let d = (0, l.zZ)(s.X.EXPERIMENTS_CATEGORY, {
        buildLayout: () => [o.h]
    }),
    A = (0, l.t_)(s.X.EXPERIMENTS_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyExperimentsPanel"),
        useTitle: () => "Experiments",
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => []
    }),
    T = (0, l.t_)(s.X.EXPERIMENTS_PANEL, {
        usePredicate: () => (0, a.dk)("ExperimentsPanel"),
        useTitle: () => "Experiments",
        buildLayout: () => [d]
    }),
    S = (0, l.i4)(s.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: n.BeakerIcon,
        useMenu: u.A,
        buildLayout: () => (0, a.WJ)("ExperimentsPanel") ? [T] : [A]
    })