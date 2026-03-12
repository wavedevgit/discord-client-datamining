/** chunk id: 658522 params = (module,exports,require) **/
n.d(t, {
    J: () => u
});
var i = n(311907),
    s = n(817281),
    l = n(801644),
    r = n(419954),
    a = n(964404),
    o = n(780964),
    d = n(698723),
    c = n(985018);
let u = (0, r.zD)(o.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
    useTitle: () => c.intl.string(c.t.pZ0vr4),
    useSubtitle: () => c.intl.string(c.t.tVbzoZ),
    useValue: function() {
        return (0, i.bG)([a.Ay], () => !a.Ay.disableHardwareMuteSilenceAlert)
    },
    setValue: function(e) {
        (0, d.A)("hardware_mute_silence_alert_enabled", e, !a.Ay.disableHardwareMuteSilenceAlert), s.Ay.updatedUnsyncedSettings({
            disableHardwareMuteSilenceAlert: !e
        })
    },
    usePredicate: function() {
        let {
            enableHardwareSilenceWarning: e
        } = l.A.useConfig({
            location: "HardwareMuteSilenceAlertSetting"
        });
        return e
    }
})