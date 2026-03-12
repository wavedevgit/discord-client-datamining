/** chunk id: 836799 params = (module,exports,require) **/
n.d(t, {
    $: () => u
});
var i = n(934551),
    s = n(419954),
    l = n(723702),
    r = n(780964),
    a = n(358776),
    o = n(477908),
    d = n(985018);
let c = (0, s.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => d.intl.string(d.t.ZkDZov),
        buildLayout: () => [o.w]
    }),
    u = (0, s.i4)(r.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t.ZkDZov),
        icon: i.ScreenIcon,
        usePredicate: () => !(0, a.bp)("WindowsSidebarItem") && l.isPlatformEmbedded && (0, l.isWindows)(),
        buildLayout: () => [c]
    })