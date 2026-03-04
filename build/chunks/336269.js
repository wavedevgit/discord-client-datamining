/** chunk id: 336269, original params: t,e,i (module,exports,require) **/
i.d(e, {
    q: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.ANALYTICS_LOGS, {
    useTitle: () => "Enable Logging of Analytics Events",
    useSubtitle: () => "Logs all analytics events to the developer console.",
    useValue: () => (0, n.bG)([a.default], () => a.default.isLoggingAnalyticsEvents),
    setValue: t => (0, l.x)({
        logAnalyticsEvents: t
    })
})