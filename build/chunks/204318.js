/** Chunk was on 60449 **/
/** chunk id: 204318, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x,
    g: () => h
}), n(321073);
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(827343),
    a = n(195043),
    o = n(430452),
    c = n(593942),
    d = n(531525),
    u = n(731854),
    g = n(985018);

function h(e, t, n) {
    let i = [{
        id: u.rB.STANDARD,
        value: u.rB.STANDARD,
        label: g.intl.string(g.t.dqb2JZ)
    }];
    return e && i.push({
        id: u.rB.LEGACY,
        value: u.rB.LEGACY,
        label: g.intl.string(g.t["TYfH+5"])
    }), t && i.push({
        id: u.rB.EXPERIMENTAL,
        value: u.rB.EXPERIMENTAL,
        label: g.intl.string(g.t.liQmtr)
    }), n && i.push({
        id: u.rB.AUTOMATIC,
        value: u.rB.AUTOMATIC,
        label: g.intl.string(g.t.qNgtO1)
    }), i
}

function x() {
    let {
        audioSubsystem: e,
        legacyAudioSubsystemSupported: t,
        experimentalAudioSubsystemSupported: n,
        automaticAudioSubsystemSupported: x
    } = (0, s.cf)([o.A], () => ({
        audioSubsystem: o.A.getAudioSubsystem(),
        legacyAudioSubsystemSupported: o.A.supports(u.O5.LEGACY_AUDIO_SUBSYSTEM),
        experimentalAudioSubsystemSupported: o.A.supports(u.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
        automaticAudioSubsystemSupported: o.A.supports(u.O5.AUTOMATIC_AUDIO_SUBSYSTEM)
    }));
    return (0, i.jsx)(a.x, {
        setting: d.H.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: (0, i.jsx)(l.l6P, {
            label: g.intl.string(g.t.wVBHr0),
            value: e,
            options: h(t, n, x),
            onSelectionChange: e => {
                (0, c.A)(g.intl.string(g.t.uY7AcQ), g.intl.string(g.t.gBqik6), () => r.A.setAudioSubsystem(e))
            },
            selectionMode: "single",
            fullWidth: !0
        })
    })
}