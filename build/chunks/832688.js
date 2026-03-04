/** chunk id: 832688, original params: t,e,i (module,exports,require) **/
i.d(e, {
    a: () => E
});
var n = i(934551),
    l = i(419954),
    s = i(723702),
    a = i(780964),
    r = i(358776),
    u = i(62218),
    o = i(922521),
    d = i(531525),
    A = i(985018);
let T = (0, l.t_)(a.X.LINUX_PANEL, {
        useTitle: () => A.intl.string(A.t["7pPjTW"]),
        buildLayout: () => [o.v]
    }),
    S = (0, l.t_)(a.X.LINUX_PANEL, {
        useTitle: () => A.intl.string(A.t["7pPjTW"]),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    E = (0, l.i4)(a.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["7pPjTW"]),
        getLegacySearchKey: () => (0, r.WJ)("LinuxPanel") ? void 0 : d.H.LINUX_SETTINGS,
        icon: n.ScreenIcon,
        usePredicate: () => !(0, r.bp)("LinuxSidebarItem") && s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [(0, r.WJ)("LinuxPanel") ? T : S]
    })