/** chunk id: 559390, original params: e,t,i (module,exports,require) **/
i.d(t, {
    H: () => o
});
var n = i(793574),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(698723),
    u = i(985018);
let o = (0, l.zD)(r.X.STREAMING_SHOW_STREAM_PREVIEWS, {
    useTitle: () => u.intl.string(u.t.e3Zz3F),
    useSubtitle: () => u.intl.string(u.t.RztTjP),
    useValue: function() {
        var e;
        return !(null != (e = s.uh.useSetting()) && e)
    },
    setValue: function(e) {
        (0, a.A)("stream_previews_disabled", !e, s.uh.getSetting(), [n.A.USER_SETTINGS_VOICE_AND_VIDEO]), s.uh.updateSetting(!e)
    }
})