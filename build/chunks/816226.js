/** chunk id: 816226, original params: e,t,i (module,exports,require) **/
i.d(t, {
    u: () => u
});
var n = i(311907),
    l = i(172272),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.sN)(a.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
    useTitle: () => "Vertical Grid Spacing",
    useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
    usePredicate: () => (0, n.bG)([r.default], () => r.default.layoutDebuggingEnabled),
    minValue: 0,
    maxValue: l.YR,
    markers: Array.from({
        length: l.YR + 1
    }, (e, t) => t),
    onValueRender: e => "".concat(Math.round(e), "px"),
    onMarkerRender: e => e % 4 == 0 ? "".concat(e) : void 0,
    getInitialValue: () => l.Or.getState().verticalSpacing,
    asValueChanges: e => {
        l.Or.getState().setVerticalSpacing(e)
    }
})