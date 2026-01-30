/** chunk id: 286480, original params: e,t,i (module,exports,require) **/
i.d(t, {
    q: () => u
});
var n = i(311907),
    l = i(172272),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.sN)(a.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
    useTitle: () => "Horizontal Grid Spacing",
    useSubtitle: () => "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
    usePredicate: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
    minValue: 0,
    maxValue: l.YR,
    markers: Array.from({
        length: l.YR + 1
    }, (e, t) => t),
    onValueRender: e => "".concat(Math.round(e), "px"),
    onMarkerRender: e => e % 4 == 0 ? "".concat(e) : void 0,
    getInitialValue: () => l.Or.getState().horizontalSpacing,
    asValueChanges: e => {
        l.Or.getState().setHorizontalSpacing(e)
    }
})