/** chunk id: 433469 params = (module,exports,require) **/
n.d(t, {
    g: () => g
});
var i = n(284009),
    s = n.n(i),
    l = n(311907),
    r = n(552122),
    a = n(419954),
    o = n(965957),
    d = n(312671),
    c = n(780964),
    u = n(235079),
    m = n(985018);
let g = (0, a.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = r.A.useHolidaySoundpack();
        return null == e ? "" : m.intl.format(m.t["E/OyBr"], {
            soundpack: m.intl.string(e.soundpackLabel)
        })
    },
    useValue: function() {
        let e = (0, l.bG)([d.A], () => d.A.getSoundpack()),
            t = r.A.useHolidaySoundpack();
        return e === t?.soundpack
    },
    setValue: function(e) {
        let t = r.A.getHolidaySoundpack();
        s()(null != t, "predicate should fail if no soundpack is available"), (0, o.p)(e ? t : u.i.CLASSIC)
    },
    usePredicate: r.A.useIsEligible
})