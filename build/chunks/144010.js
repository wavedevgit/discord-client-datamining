/** chunk id: 144010, original params: t,e,i (module,exports,require) **/
i.d(e, {
    T: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.LOAD_SOURCE_MAPS, {
    useTitle: () => "Load Source Maps",
    useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
    useValue: () => (0, n.bG)([a.default], () => a.default.sourceMapsEnabled),
    setValue: t => (0, l.x)({
        sourceMapsEnabled: t
    })
})