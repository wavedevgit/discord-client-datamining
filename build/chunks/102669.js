/** chunk id: 102669 params = (module,exports,require) **/
n.d(t, {
    m: () => o
});
var i = n(419954),
    s = n(253932),
    l = n(780964),
    r = n(858897),
    a = n(985018);
let o = (0, i.zD)(l.X.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => a.intl.string(a.t["btbS+Z"]),
    useSubtitle: () => a.intl.format(a.t.Q5crhR, {
        onClick: () => (0, r.openUserSettings)(l.X.TTS_PLAYBACK_RATE)
    }),
    useValue: s.on.useSetting,
    setValue: s.on.updateSetting
})