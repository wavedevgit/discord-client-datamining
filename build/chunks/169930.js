/** Chunk was on 4670 **/
/** chunk id: 169930, original params: e,t,i (module,exports,require) **/
i.d(t, {
    _: () => c
});
var n = i(793574),
    l = i(419954),
    s = i(796774),
    r = i(536432),
    a = i(975571),
    u = i(824744),
    o = i(780964),
    d = i(652215),
    T = i(985018);
let c = (0, l.sN)(o.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => T.intl.string(T.t.kbFsAD),
    useSubtitle: () => T.intl.format(T.t.BPbGq7, {
        helpCenterArticle: a.A.getArticleURL(d.MVz.SOUNDBOARD)
    }),
    setValue: function(e) {
        let t = [n.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, u.w)(e);
        (0, s.iy)(i, t)
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function() {
        let e = (0, r.wH)();
        return (0, u.M)(e)
    },
    onValueRender: function(e) {
        return "".concat(e.toFixed(0), "%")
    }
})