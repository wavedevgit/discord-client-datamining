/** Chunk was on 4670 **/
/** chunk id: 560861, original params: e,t,i (module,exports,require) **/
i.d(t, {
    g: () => A
});
var n = i(284009),
    l = i.n(n),
    s = i(311907),
    r = i(552122),
    a = i(419954),
    u = i(965957),
    o = i(312671),
    d = i(780964),
    T = i(235079),
    c = i(985018);
let A = (0, a.zD)(d.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = r.A.useHolidaySoundpack();
        return null == e ? "" : c.intl.format(c.t["E/OyBr"], {
            soundpack: c.intl.string(e.soundpackLabel)
        })
    },
    useValue: function() {
        let e = (0, s.bG)([o.A], () => o.A.getSoundpack()),
            t = r.A.useHolidaySoundpack();
        return e === (null == t ? void 0 : t.soundpack)
    },
    setValue: function(e) {
        let t = r.A.getHolidaySoundpack();
        l()(null != t, "predicate should fail if no soundpack is available"), (0, u.p)(e ? t : T.i.CLASSIC)
    },
    usePredicate: r.A.useIsEligible
})