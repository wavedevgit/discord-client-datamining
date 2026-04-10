/** chunk id: 135476 params = (module,exports,require) **/
n.d(t, {
    q: () => o
});
var i = n(311907),
    s = n(172272),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.sN)(a.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
    useTitle: () => "Horizontal Grid Spacing",
    useSubtitle: () => "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
    usePredicate: () => (0, i.bG)([r.default], () => r.default.layoutDebuggingEnabled),
    minValue: 0,
    maxValue: s.YR,
    markers: Array.from({
        length: s.YR + 1
    }, (e, t) => t),
    onValueRender: e => `${Math.round(e)}px`,
    onMarkerRender: e => e % 4 == 0 ? `${e}` : void 0,
    getInitialValue: () => s.Or.getState().horizontalSpacing,
    asValueChanges: e => {
        s.Or.getState().setHorizontalSpacing(e)
    }
})