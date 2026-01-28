/** Chunk was on 60449 **/
/** chunk id: 910597, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(827343),
    a = n(195043),
    o = n(430452),
    c = n(531525),
    d = n(985018);

function u() {
    let {
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n
    } = (0, s.cf)([o.A], () => ({
        attenuation: o.A.getAttenuation(),
        attenuateWhileSpeakingSelf: o.A.getAttenuateWhileSpeakingSelf(),
        attenuateWhileSpeakingOthers: o.A.getAttenuateWhileSpeakingOthers()
    }));
    return (0, i.jsxs)(a.x, {
        setting: c.H.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: [(0, i.jsx)(l.Apm, {
            label: d.intl.string(d.t.oSdBvW),
            description: d.intl.string(d.t["0A/8Rt"]),
            initialValue: e,
            onValueChange: e => {
                r.A.setAttenuation(e, t, n)
            }
        }), (0, i.jsx)(l.dOG, {
            label: d.intl.string(d.t["9dHxRY"]),
            checked: t,
            onChange: t => r.A.setAttenuation(e, t, n)
        }), (0, i.jsx)(l.dOG, {
            label: d.intl.string(d.t.SMt0Gr),
            checked: n,
            onChange: n => r.A.setAttenuation(e, t, n)
        })]
    })
}