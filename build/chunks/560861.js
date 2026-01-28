/** Chunk was on 28979 **/
/** chunk id: 560861, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => S
});
var n = i(284009),
    l = i.n(n),
    s = i(311907),
    r = i(552122),
    u = i(419954),
    a = i(965957),
    o = i(312671),
    T = i(780964),
    d = i(235079),
    A = i(985018);
let S = (0, u.zD)(T.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = r.A.useHolidaySoundpack();
        return null == t ? "" : A.intl.format(A.t["E/OyBr"], {
            soundpack: A.intl.string(t.soundpackLabel)
        })
    },
    useValue: function() {
        let t = (0, s.bG)([o.A], () => o.A.getSoundpack()),
            e = r.A.useHolidaySoundpack();
        return t === (null == e ? void 0 : e.soundpack)
    },
    setValue: function(t) {
        let e = r.A.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, a.p)(t ? e : d.i.CLASSIC)
    },
    usePredicate: r.A.useIsEligible
})