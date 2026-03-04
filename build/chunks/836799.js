/** chunk id: 836799, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $: () => E
});
var n = i(934551),
    l = i(419954),
    s = i(723702),
    a = i(780964),
    r = i(358776),
    u = i(62218),
    o = i(477908),
    d = i(531525),
    A = i(985018);
let T = (0, l.t_)(a.X.WINDOWS_PANEL, {
        useTitle: () => A.intl.string(A.t.ZkDZov),
        buildLayout: () => [o.w]
    }),
    S = (0, l.t_)(a.X.WINDOWS_PANEL, {
        useTitle: () => A.intl.string(A.t.ZkDZov),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    E = (0, l.i4)(a.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t.ZkDZov),
        getLegacySearchKey: () => (0, r.WJ)("WindowsPanel") ? void 0 : d.H.WINDOW_SETTINGS,
        icon: n.ScreenIcon,
        usePredicate: () => !(0, r.bp)("WindowsSidebarItem") && s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [(0, r.WJ)("WindowsPanel") ? T : S]
    })