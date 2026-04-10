/** chunk id: 690144 params = (module,exports,require) **/
n.d(t, {
    $: () => c
}), n(321073);
var i = n(274372),
    s = n(399925),
    l = n(419954),
    r = n(780964),
    a = n(696016),
    o = n(985018);
let d = (() => {
        let e = [a.wN];
        for (let t = 10; t <= a.qh; t += 10) e.push(t);
        return e[e.length - 1] !== a.qh && e.push(a.qh), e
    })(),
    c = (0, l.sN)(r.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => o.intl.string(o.t.yfsrDI),
        useSubtitle: () => o.intl.string(o.t.vlDHdC),
        minValue: a.wN,
        maxValue: a.qh,
        getInitialValue: () => i.A.getSettings().maxAutoClips,
        onValueRender: e => `${Math.floor(e)}`,
        asValueChanges: e => s.e6(Math.floor(e)),
        markers: d,
        onMarkerRender: e => `${Math.floor(e)}`
    })