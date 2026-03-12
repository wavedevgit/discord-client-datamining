/** chunk id: 560861 params = (module,exports,require) **/
n.d(t, {
    g: () => m
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
    _ = n(985018);
let m = (0, a.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = r.A.useHolidaySoundpack();
        return null == e ? "" : _.intl.format(_.t["E/OyBr"], {
            soundpack: _.intl.string(e.soundpackLabel)
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