/** chunk id: 968083, original params: t,e,i (module,exports,require) **/
i.d(e, {
    I: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.GATEWAY_LOGS, {
    useTitle: () => "Log Gateway Events",
    useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    useValue: () => (0, n.bG)([a.default], () => a.default.isLoggingGatewayEvents),
    setValue: t => (0, l.x)({
        logGatewayEvents: t
    })
})