/** chunk id: 749253, original params: t,e,i (module,exports,require) **/
i.d(e, {
    V: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.LAYOUT_DEBUGGING, {
    useTitle: () => "Enable Layout Debugging",
    useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
    useValue: () => (0, n.bG)([a.default], () => a.default.layoutDebuggingEnabled),
    setValue: t => {
        (0, l.x)({
            layoutDebuggingEnabled: t
        })
    }
})