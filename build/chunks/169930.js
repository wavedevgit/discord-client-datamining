/** chunk id: 169930, original params: t,e,i (module,exports,require) **/
i.d(e, {
    _: () => T
});
var n = i(793574),
    l = i(419954),
    s = i(796774),
    r = i(536432),
    a = i(975571),
    u = i(824744),
    o = i(780964),
    d = i(652215),
    A = i(985018);
let T = (0, l.sN)(o.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => A.intl.string(A.t.kbFsAD),
    useSubtitle: () => A.intl.format(A.t.BPbGq7, {
        helpCenterArticle: a.A.getArticleURL(d.MVz.SOUNDBOARD)
    }),
    setValue: function(t) {
        let e = [n.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, u.w)(t);
        (0, s.iy)(i, e)
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function() {
        let t = (0, r.wH)();
        return (0, u.M)(t)
    },
    onValueRender: function(t) {
        return `${t.toFixed(0)}%`
    }
})