/** chunk id: 560861, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => S
});
var n = i(284009),
    l = i.n(n),
    s = i(311907),
    a = i(552122),
    r = i(419954),
    u = i(965957),
    o = i(312671),
    d = i(780964),
    A = i(235079),
    T = i(985018);
let S = (0, r.zD)(d.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = a.A.useHolidaySoundpack();
        return null == t ? "" : T.intl.format(T.t["E/OyBr"], {
            soundpack: T.intl.string(t.soundpackLabel)
        })
    },
    useValue: function() {
        let t = (0, s.bG)([o.A], () => o.A.getSoundpack()),
            e = a.A.useHolidaySoundpack();
        return t === e?.soundpack
    },
    setValue: function(t) {
        let e = a.A.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, u.p)(t ? e : A.i.CLASSIC)
    },
    usePredicate: a.A.useIsEligible
})