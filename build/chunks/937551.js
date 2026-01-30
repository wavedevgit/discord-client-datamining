/** chunk id: 937551, original params: e,t,i (module,exports,require) **/
i.d(t, {
    V: () => o
});
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(780964),
    a = i(652215),
    u = i(985018);
let o = (0, s.sN)(r.X.SATURATION, {
    useTitle: () => u.intl.string(u.t["5PWWCY"]),
    useSubtitle: () => u.intl.string(u.t["0PbE/H"]),
    markers: a.hH7.SATURATION_INCREMENTS,
    onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0,
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => l.A.saturation,
    setValue: e => (0, n.HU)(e)
})