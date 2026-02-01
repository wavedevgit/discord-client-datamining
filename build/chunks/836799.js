/** chunk id: 836799, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $: () => c
});
var n = i(934551),
    l = i(419954),
    s = i(723702),
    r = i(780964),
    u = i(358776),
    a = i(62218),
    o = i(477908),
    d = i(531525),
    T = i(985018);
let A = (0, l.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        buildLayout: () => [o.w]
    }),
    S = (0, l.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => []
    }),
    c = (0, l.i4)(r.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        getLegacySearchKey: () => (0, u.WJ)("WindowsPanel") ? void 0 : d.H.WINDOW_SETTINGS,
        icon: n.ScreenIcon,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [(0, u.WJ)("WindowsPanel") ? A : S]
    })