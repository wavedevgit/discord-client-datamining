/** Chunk was on 4670 **/
/** chunk id: 716005, original params: e,t,i (module,exports,require) **/
i.d(t, {
    g: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.FORCE_CANARY_API, {
    useTitle: () => "Force Canary API",
    useSubtitle: () => "Routes all API requests to Canary instances.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isForcedCanary),
    setValue: e => {
        (0, l.x)({
            canary: e
        })
    }
})