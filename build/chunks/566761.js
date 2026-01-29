/** Chunk was on 4670 **/
/** chunk id: 566761, original params: e,t,i (module,exports,require) **/
i.d(t, {
    u: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.REQUEST_TRACING, {
    useTitle: () => "Enable Tracing Requests",
    useSubtitle: () => "Force trace all client requests with APM.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isTracingRequests),
    setValue: e => (0, l.x)({
        trace: e
    })
})