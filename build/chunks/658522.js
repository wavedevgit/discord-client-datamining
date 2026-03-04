/** chunk id: 658522, original params: t,e,i (module,exports,require) **/
i.d(e, {
    J: () => A
});
var n = i(311907),
    l = i(817281),
    s = i(801644),
    a = i(419954),
    r = i(964404),
    u = i(780964),
    o = i(698723),
    d = i(985018);
let A = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
    useTitle: () => d.intl.string(d.t.pZ0vr4),
    useSubtitle: () => d.intl.string(d.t.tVbzoZ),
    useValue: function() {
        return (0, n.bG)([r.Ay], () => !r.Ay.disableHardwareMuteSilenceAlert)
    },
    setValue: function(t) {
        (0, o.A)("hardware_mute_silence_alert_enabled", t, !r.Ay.disableHardwareMuteSilenceAlert), l.Ay.updatedUnsyncedSettings({
            disableHardwareMuteSilenceAlert: !t
        })
    },
    usePredicate: function() {
        let {
            enableHardwareSilenceWarning: t
        } = s.A.useConfig({
            location: "HardwareMuteSilenceAlertSetting"
        });
        return t
    }
})