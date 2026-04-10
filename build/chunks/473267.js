/** chunk id: 473267 params = (module,exports,require) **/
n.d(t, {
    Q: () => c
});
var i = n(311907),
    s = n(817281),
    l = n(419954),
    r = n(964404),
    a = n(780964),
    o = n(698723),
    d = n(985018);
let c = (0, l.zD)(a.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
    useTitle: () => d.intl.string(d.t.jrWHD3),
    useSubtitle: () => d.intl.string(d.t.YCCMkJ),
    useValue: function() {
        return (0, i.bG)([r.Ay], () => !r.Ay.disableVoiceChannelChangeAlert)
    },
    setValue: function(e) {
        (0, o.A)("switch_channel_warning_enabled", e, !r.Ay.disableVoiceChannelChangeAlert), s.Ay.updatedUnsyncedSettings({
            disableVoiceChannelChangeAlert: !e
        })
    }
})