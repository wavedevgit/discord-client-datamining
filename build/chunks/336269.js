/** Chunk was on 4670 **/
/** chunk id: 336269, original params: e,t,i (module,exports,require) **/
i.d(t, {
    q: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.ANALYTICS_LOGS, {
    useTitle: () => "Enable Logging of Analytics Events",
    useSubtitle: () => "Logs all analytics events to the developer console.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingAnalyticsEvents),
    setValue: e => (0, l.x)({
        logAnalyticsEvents: e
    })
})