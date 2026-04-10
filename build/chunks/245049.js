/** chunk id: 245049 params = (module,exports,require) **/
n.d(t, {
    g: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.FORCE_CANARY_API, {
    useTitle: () => "Force Canary API",
    useSubtitle: () => "Routes all API requests to Canary instances.",
    useValue: () => (0, i.bG)([r.default], () => r.default.isForcedCanary),
    setValue: e => {
        (0, s.x)({
            canary: e
        })
    }
})