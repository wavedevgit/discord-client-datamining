/** Chunk was on 28979 **/
/** chunk id: 772797, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => A
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(555444),
    a = i(780964),
    o = i(903427),
    T = i(731854),
    d = i(985018);
let A = (0, s.zD)(a.X.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => d.intl.string(d.t.EGn1eN),
    useSubtitle: () => d.intl.string(d.t.iT257i),
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
    useValue: function() {
        return (0, n.bG)([r.A], () => {
            let {
                pttLatchingEnabled: t
            } = r.A.getModeOptions();
            return null != t && t
        })
    },
    setValue: function(t) {
        l.A.setMode(T.TB.PUSH_TO_TALK, {
            pttLatchingEnabled: t
        })
    },
    usePredicate: function() {
        let t = (0, o.P)(),
            {
                enableLatching: e
            } = (0, u.y)({
                location: "PushToTalkLatchingSetting"
            });
        return t && e
    }
})