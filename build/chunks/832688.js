/** Chunk was on 28979 **/
/** chunk id: 832688, original params: t,e,i (module,exports,require) **/
i.d(e, {
    a: () => E
});
var n = i(934551),
    l = i(419954),
    s = i(723702),
    r = i(780964),
    u = i(358776),
    a = i(62218),
    o = i(922521),
    T = i(531525),
    d = i(985018);
let A = (0, l.t_)(r.X.LINUX_PANEL, {
        useTitle: () => d.intl.string(d.t["7pPjTW"]),
        buildLayout: () => [o.v]
    }),
    S = (0, l.t_)(r.X.LINUX_PANEL, {
        useTitle: () => d.intl.string(d.t["7pPjTW"]),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => []
    }),
    E = (0, l.i4)(r.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["7pPjTW"]),
        getLegacySearchKey: () => (0, u.WJ)("LinuxPanel") ? void 0 : T.H.LINUX_SETTINGS,
        icon: n.ScreenIcon,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [(0, u.WJ)("LinuxPanel") ? A : S]
    })