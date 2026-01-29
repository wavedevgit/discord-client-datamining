/** Chunk was on 4670 **/
/** chunk id: 749253, original params: e,t,i (module,exports,require) **/
i.d(t, {
    V: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.LAYOUT_DEBUGGING, {
    useTitle: () => "Enable Layout Debugging",
    useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
    useValue: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
    setValue: e => {
        (0, l.x)({
            layoutDebuggingEnabled: e
        })
    }
})