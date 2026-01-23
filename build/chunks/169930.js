/** Chunk was on 28979 **/
/** chunk id: 169930, original params: t,e,i (module,exports,require) **/
i.d(e, {
    _: () => d
});
var n = i(793574),
    l = i(419954),
    s = i(796774),
    r = i(536432),
    u = i(975571),
    a = i(824744),
    o = i(780964),
    T = i(652215),
    A = i(985018);
let d = (0, l.sN)(o.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => A.intl.string(A.t.kbFsAD),
    useSubtitle: () => A.intl.format(A.t.BPbGq7, {
        helpCenterArticle: u.A.getArticleURL(T.MVz.SOUNDBOARD)
    }),
    setValue: function(t) {
        let e = [n.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, a.w)(t);
        (0, s.iy)(i, e)
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function() {
        let t = (0, r.wH)();
        return (0, a.M)(t)
    },
    onValueRender: function(t) {
        return "".concat(t.toFixed(0), "%")
    }
})