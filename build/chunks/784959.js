/** chunk id: 784959, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => A
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(640068),
    a = i(1626);
let o = (0, l.zZ)(s.X.EXPERIMENTS_CATEGORY, {
        buildLayout: () => [a.h]
    }),
    d = (0, l.t_)(s.X.EXPERIMENTS_PANEL, {
        usePredicate: () => !(0, r.dk)("LegacyExperimentsPanel"),
        useTitle: () => "Experiments",
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    T = (0, l.t_)(s.X.EXPERIMENTS_PANEL, {
        usePredicate: () => (0, r.dk)("ExperimentsPanel"),
        useTitle: () => "Experiments",
        buildLayout: () => [o]
    }),
    A = (0, l.i4)(s.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: n.BeakerIcon,
        buildLayout: () => (0, r.WJ)("ExperimentsPanel") ? [T] : [d]
    })