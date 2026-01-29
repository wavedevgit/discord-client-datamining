/** Chunk was on 4670 **/
/** chunk id: 764800, original params: e,t,i (module,exports,require) **/
i.d(t, {
    $: () => d
}), i(321073);
var n = i(274372),
    l = i(399925),
    s = i(419954),
    r = i(780964),
    a = i(696016),
    u = i(985018);
let o = (() => {
        let e = [a.wN];
        for (let t = 10; t <= a.qh; t += 10) e.push(t);
        return e[e.length - 1] !== a.qh && e.push(a.qh), e
    })(),
    d = (0, s.sN)(r.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => u.intl.string(u.t.yfsrDI),
        useSubtitle: () => u.intl.string(u.t.vlDHdC),
        minValue: a.wN,
        maxValue: a.qh,
        getInitialValue: () => n.A.getSettings().maxAutoClips,
        onValueRender: e => "".concat(Math.floor(e)),
        asValueChanges: e => l.e6(Math.floor(e)),
        markers: o,
        onMarkerRender: e => "".concat(Math.floor(e))
    })