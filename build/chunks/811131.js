/** Chunk was on 4670 **/
/** chunk id: 811131, original params: e,t,i (module,exports,require) **/
i.d(t, {
    B: () => d
});
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(780964),
    a = i(652215),
    u = i(985018);
let o = e => "".concat(e.toFixed(0), "px"),
    d = (0, s.sN)(r.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => u.intl.string(u.t.qPOqoK),
        useSubtitle: () => u.intl.string(u.t.XrtbPo),
        markers: a.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: a.hH7.FONT_SIZES["0"],
        maxValue: a.hH7.FONT_SIZES[a.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => a.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => l.A.fontSize,
        onValueRender: o,
        onMarkerRender: o,
        asValueChanges: e => (0, n.XS)(e)
    })