/** Chunk was on 60667 **/
/** chunk id: 910597, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(827343),
    a = n(195043),
    o = n(430452),
    c = n(531525),
    d = n(985018);

function u() {
    let {
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n
    } = (0, i.cf)([o.A], () => ({
        attenuation: o.A.getAttenuation(),
        attenuateWhileSpeakingSelf: o.A.getAttenuateWhileSpeakingSelf(),
        attenuateWhileSpeakingOthers: o.A.getAttenuateWhileSpeakingOthers()
    }));
    return (0, r.jsxs)(a.x, {
        setting: c.H.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: [(0, r.jsx)(l.Apm, {
            label: d.intl.string(d.t.oSdBvW),
            description: d.intl.string(d.t["0A/8Rt"]),
            initialValue: e,
            onValueChange: e => {
                s.A.setAttenuation(e, t, n)
            }
        }), (0, r.jsx)(l.dOG, {
            label: d.intl.string(d.t["9dHxRY"]),
            checked: t,
            onChange: t => s.A.setAttenuation(e, t, n)
        }), (0, r.jsx)(l.dOG, {
            label: d.intl.string(d.t.SMt0Gr),
            checked: n,
            onChange: n => s.A.setAttenuation(e, t, n)
        })]
    })
}