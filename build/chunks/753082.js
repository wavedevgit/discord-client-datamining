/** chunk id: 753082, original params: e,t,i (module,exports,require) **/
i.d(t, {
    g: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.CSS_DEBUGGING, {
    useTitle: () => "Enable CSS Debugging",
    useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
    useValue: () => (0, n.bG)([r.default], () => r.default.cssDebuggingEnabled),
    setValue: e => {
        (0, l.x)({
            cssDebuggingEnabled: e
        }).then(() => {
            setTimeout(() => location.reload(), 500)
        })
    }
})