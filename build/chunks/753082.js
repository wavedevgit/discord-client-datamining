/** chunk id: 753082, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.CSS_DEBUGGING, {
    useTitle: () => "Enable CSS Debugging",
    useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
    useValue: () => (0, n.bG)([a.default], () => a.default.cssDebuggingEnabled),
    setValue: t => {
        (0, l.x)({
            cssDebuggingEnabled: t
        }).then(() => {
            setTimeout(() => location.reload(), 500)
        })
    }
})