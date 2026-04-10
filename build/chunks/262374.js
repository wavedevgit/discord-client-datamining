/** chunk id: 262374 params = (module,exports,require) **/
n.d(t, {
    g: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.CSS_DEBUGGING, {
    useTitle: () => "Enable CSS Debugging",
    useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
    useValue: () => (0, i.bG)([r.default], () => r.default.cssDebuggingEnabled),
    setValue: e => {
        (0, s.x)({
            cssDebuggingEnabled: e
        }).then(() => {
            setTimeout(() => location.reload(), 500)
        })
    }
})