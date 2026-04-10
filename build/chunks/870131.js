/** chunk id: 870131 params = (module,exports,require) **/
n.d(t, {
    $: () => c
});
var i = n(934551),
    s = n(419954),
    l = n(723702),
    r = n(780964),
    a = n(885939),
    o = n(985018);
let d = (0, s.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        buildLayout: () => [a.w]
    }),
    c = (0, s.i4)(r.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        icon: i.ScreenIcon,
        usePredicate: () => l.isPlatformEmbedded && (0, l.isWindows)(),
        buildLayout: () => [d]
    })