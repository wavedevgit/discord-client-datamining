/** chunk id: 42126 params = (module,exports,require) **/
n.d(t, {
    T: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.LOAD_SOURCE_MAPS, {
    useTitle: () => "Load Source Maps",
    useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
    useValue: () => (0, i.bG)([r.default], () => r.default.sourceMapsEnabled),
    setValue: e => (0, s.x)({
        sourceMapsEnabled: e
    })
})