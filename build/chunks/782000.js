/** chunk id: 782000, original params: t,e,i (module,exports,require) **/
i.d(e, {
    B: () => A
});
var n = i(915618),
    l = i(572164),
    s = i(399925),
    a = i(419954),
    r = i(430452),
    u = i(723702),
    o = i(780964),
    d = i(985018);
let A = (0, a.zD)(o.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => d.intl.string(d.t.yXvykv),
    useSubtitle: () => d.intl.string(d.t.YP3ujk),
    useValue: l.XT,
    setValue: t => s.fd({
        enabled: t,
        trackAnalytics: !0
    }),
    usePredicate: () => {
        let t = (0, u.isWindows)(),
            e = (0, n.A)(r.Ay);
        return t && e
    }
})