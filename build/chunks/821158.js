/** chunk id: 821158 params = (module,exports,require) **/
n.d(t, {
    h: () => u
});
var i = n(311907),
    s = n(827343),
    l = n(419954),
    r = n(347481),
    a = n(430452),
    o = n(780964),
    d = n(652215),
    c = n(985018);
let u = (0, l.zD)(o.X.VOICE_ECHO_CANCELLATION_SETTING, {
    useTitle: () => c.intl.string(c.t.iWTwu6),
    useValue: function() {
        return (0, i.bG)([a.Ay], () => a.Ay.getEchoCancellation())
    },
    setValue: function(e) {
        s.A.setEchoCancellation(e, {
            page: d.liQ.USER_SETTINGS,
            section: d.JJy.SETTINGS_VOICE_AND_VIDEO
        })
    },
    useDisabled: function() {
        return (0, i.bG)([a.Ay, r.A], () => {
            let e = a.Ay.getInputDeviceId();
            return r.A.hasEchoCancellation(e)
        })
    },
    usePredicate: function() {
        return (0, i.bG)([a.Ay], () => a.Ay.isInputProfileCustom())
    }
})