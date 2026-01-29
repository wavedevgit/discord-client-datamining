/** Chunk was on 4670 **/
/** chunk id: 464639, original params: e,t,i (module,exports,require) **/
i.d(t, {
    e: () => A
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(731854),
    o = i(985018);
let d = (0, s.sN)(a.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        setValue: e => l.A.setAttenuation(e, r.A.getAttenuateWhileSpeakingSelf(), r.A.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => r.A.getAttenuation()
    }),
    T = (0, s.zD)(a.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingSelf()),
        setValue: e => l.A.setAttenuation(r.A.getAttenuation(), e, r.A.getAttenuateWhileSpeakingOthers())
    }),
    c = (0, s.zD)(a.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingOthers()),
        setValue: e => l.A.setAttenuation(r.A.getAttenuation(), r.A.getAttenuateWhileSpeakingSelf(), e)
    }),
    A = (0, s.FW)(a.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, n.bG)([r.A], () => r.A.supports(u.O5.ATTENUATION)),
        buildLayout: () => [d, T, c]
    })