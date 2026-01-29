/** Chunk was on 4670 **/
/** chunk id: 170021, original params: e,t,i (module,exports,require) **/
i.d(t, {
    H: () => o
});
var n = i(864145),
    l = i(419954),
    s = i(824744),
    r = i(253932),
    a = i(780964),
    u = i(985018);
let o = (0, l.sN)(a.X.SOUNDMOJI_VOLUME_SETTING, {
    useTitle: () => u.intl.string(u.t["2JbvKw"]),
    useSubtitle: () => u.intl.string(u.t.INenzY),
    setValue: function(e) {
        let t = (0, s.w)(e);
        r.HO.updateSetting(t)
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function() {
        let e = r.HO.getSetting();
        return (0, s.M)(e)
    },
    onValueRender: function(e) {
        return "".concat(e.toFixed(0), "%")
    },
    usePredicate: function() {
        return (0, n.X9)({
            location: "SoundmojiVolumeSetting"
        })
    }
})