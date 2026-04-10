/** chunk id: 459977 params = (module,exports,require) **/
n.d(t, {
    q: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.ANALYTICS_LOGS, {
    useTitle: () => "Enable Logging of Analytics Events",
    useSubtitle: () => "Logs all analytics events to the developer console.",
    useValue: () => (0, i.bG)([r.default], () => r.default.isLoggingAnalyticsEvents),
    setValue: e => (0, s.x)({
        logAnalyticsEvents: e
    })
})