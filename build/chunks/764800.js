/** chunk id: 764800, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $: () => d
}), i(321073);
var n = i(274372),
    l = i(399925),
    s = i(419954),
    a = i(780964),
    r = i(696016),
    u = i(985018);
let o = (() => {
        let t = [r.wN];
        for (let e = 10; e <= r.qh; e += 10) t.push(e);
        return t[t.length - 1] !== r.qh && t.push(r.qh), t
    })(),
    d = (0, s.sN)(a.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => u.intl.string(u.t.yfsrDI),
        useSubtitle: () => u.intl.string(u.t.vlDHdC),
        minValue: r.wN,
        maxValue: r.qh,
        getInitialValue: () => n.A.getSettings().maxAutoClips,
        onValueRender: t => `${Math.floor(t)}`,
        asValueChanges: t => l.e6(Math.floor(t)),
        markers: o,
        onMarkerRender: t => `${Math.floor(t)}`
    })