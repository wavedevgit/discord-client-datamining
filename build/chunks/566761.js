/** chunk id: 566761, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.REQUEST_TRACING, {
    useTitle: () => "Enable Tracing Requests",
    useSubtitle: () => "Force trace all client requests with APM.",
    useValue: () => (0, n.bG)([a.default], () => a.default.isTracingRequests),
    setValue: t => (0, l.x)({
        trace: t
    })
})