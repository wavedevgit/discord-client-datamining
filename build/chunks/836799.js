/** Chunk was on 4670 **/
/** chunk id: 836799, original params: e,t,i (module,exports,require) **/
i.d(t, {
    $: () => S
});
var n = i(934551),
    l = i(419954),
    s = i(723702),
    r = i(780964),
    a = i(358776),
    u = i(62218),
    o = i(477908),
    d = i(531525),
    T = i(985018);
let c = (0, l.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        buildLayout: () => [o.w]
    }),
    A = (0, l.t_)(r.X.WINDOWS_PANEL, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    S = (0, l.i4)(r.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        getLegacySearchKey: () => (0, a.WJ)("WindowsPanel") ? void 0 : d.H.WINDOW_SETTINGS,
        icon: n.ScreenIcon,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [(0, a.WJ)("WindowsPanel") ? c : A]
    })