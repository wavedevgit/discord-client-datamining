/** chunk id: 464639, original params: t,e,i (module,exports,require) **/
i.d(e, {
    e: () => S
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    a = i(430452),
    r = i(780964),
    u = i(731854),
    o = i(985018);
let d = (0, s.sN)(r.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        setValue: t => l.A.setAttenuation(t, a.Ay.getAttenuateWhileSpeakingSelf(), a.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => a.Ay.getAttenuation()
    }),
    A = (0, s.zD)(r.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, n.bG)([a.Ay], () => a.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: t => l.A.setAttenuation(a.Ay.getAttenuation(), t, a.Ay.getAttenuateWhileSpeakingOthers())
    }),
    T = (0, s.zD)(r.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, n.bG)([a.Ay], () => a.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: t => l.A.setAttenuation(a.Ay.getAttenuation(), a.Ay.getAttenuateWhileSpeakingSelf(), t)
    }),
    S = (0, s.FW)(r.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, n.bG)([a.Ay], () => a.Ay.supports(u.O5.ATTENUATION)),
        buildLayout: () => [d, A, T]
    })