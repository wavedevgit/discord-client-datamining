/** chunk id: 528237 params = (module,exports,require) **/
n.d(t, {
    m: () => d
});
var i = n(419954),
    s = n(253932),
    l = n(780964),
    r = n(840065),
    a = n(652215),
    o = n(985018);
let d = (0, i.zD)(l.X.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => o.intl.string(o.t["btbS+Z"]),
    useSubtitle: () => o.intl.format(o.t.Q5crhR, {
        onClick: () => (0, r.openUserSettings)(l.X.TTS_PLAYBACK_RATE, {
            section: a.nc_.ACCESSIBILITY
        })
    }),
    useValue: s.on.useSetting,
    setValue: s.on.updateSetting
})