/** chunk id: 566761 params = (module,exports,require) **/
n.d(t, {
    u: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.REQUEST_TRACING, {
    useTitle: () => "Enable Tracing Requests",
    useSubtitle: () => "Force trace all client requests with APM.",
    useValue: () => (0, i.bG)([r.default], () => r.default.isTracingRequests),
    setValue: e => (0, s.x)({
        trace: e
    })
})