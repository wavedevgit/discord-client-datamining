/** chunk id: 559390, original params: t,e,i (module,exports,require) **/
i.d(e, {
    H: () => o
});
var n = i(793574),
    l = i(419954),
    s = i(253932),
    a = i(780964),
    r = i(698723),
    u = i(985018);
let o = (0, l.zD)(a.X.STREAMING_SHOW_STREAM_PREVIEWS, {
    useTitle: () => u.intl.string(u.t.e3Zz3F),
    useSubtitle: () => u.intl.string(u.t.RztTjP),
    useValue: function() {
        return !s.uh.useSetting()
    },
    setValue: function(t) {
        (0, r.A)("stream_previews_disabled", !t, s.uh.getSetting(), [n.A.USER_SETTINGS_VOICE_AND_VIDEO]), s.uh.updateSetting(!t)
    }
})