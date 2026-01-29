/** Chunk was on 4670 **/
/** chunk id: 782000, original params: e,t,i (module,exports,require) **/
i.d(t, {
    B: () => T
});
var n = i(915618),
    l = i(572164),
    s = i(399925),
    r = i(419954),
    a = i(430452),
    u = i(723702),
    o = i(780964),
    d = i(985018);
let T = (0, r.zD)(o.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => d.intl.string(d.t.yXvykv),
    useSubtitle: () => d.intl.string(d.t.YP3ujk),
    useValue: l.XT,
    setValue: e => s.fd({
        enabled: e,
        trackAnalytics: !0
    }),
    usePredicate: () => {
        let e = (0, u.isWindows)(),
            t = (0, n.A)(a.A);
        return e && t
    }
})