/** Chunk was on 4670 **/
/** chunk id: 144010, original params: e,t,i (module,exports,require) **/
i.d(t, {
    T: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.LOAD_SOURCE_MAPS, {
    useTitle: () => "Load Source Maps",
    useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
    useValue: () => (0, n.bG)([r.default], () => r.default.sourceMapsEnabled),
    setValue: e => (0, l.x)({
        sourceMapsEnabled: e
    })
})