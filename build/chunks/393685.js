/** chunk id: 393685, original params: t,e,i (module,exports,require) **/
i.d(e, {
    C: () => A
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    a = i(347481),
    r = i(430452),
    u = i(780964),
    o = i(652215),
    d = i(985018);
let A = (0, s.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
    useTitle: () => d.intl.string(d.t.cUMdH0),
    useSubtitle: () => d.intl.string(d.t["6EjbvA"]),
    useValue: function() {
        return (0, n.bG)([r.Ay], () => r.Ay.getAutomaticGainControl())
    },
    setValue: function(t) {
        l.A.setAutomaticGainControl(t, {
            page: o.liQ.USER_SETTINGS,
            section: o.JJy.SETTINGS_VOICE_AND_VIDEO
        })
    },
    useDisabled: function() {
        return (0, n.bG)([r.Ay, a.A], () => {
            let t = r.Ay.getInputDeviceId();
            return a.A.hasAutomaticGainControl(t)
        })
    },
    usePredicate: function() {
        return (0, n.bG)([r.Ay], () => r.Ay.isAutomaticGainControlSupported() && r.Ay.isInputProfileCustom())
    }
})