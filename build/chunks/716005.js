/** chunk id: 716005, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.FORCE_CANARY_API, {
    useTitle: () => "Force Canary API",
    useSubtitle: () => "Routes all API requests to Canary instances.",
    useValue: () => (0, n.bG)([a.default], () => a.default.isForcedCanary),
    setValue: t => {
        (0, l.x)({
            canary: t
        })
    }
})