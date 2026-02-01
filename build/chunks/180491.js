/** chunk id: 180491, original params: t,e,i (module,exports,require) **/
i.d(e, {
    m: () => d
});
var n = i(827343),
    l = i(419954),
    s = i(430452),
    r = i(780964),
    u = i(903427),
    a = i(652215),
    o = i(985018);
let d = (0, l.sN)(r.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
    useTitle: () => o.intl.string(o.t.GCNMM8),
    useSearchTerms: () => [o.intl.string(o.t["pS+K2L"]), o.intl.string(o.t.nuFtHH)],
    setValue: function(t) {
        n.A.setMode(a.TBI.PUSH_TO_TALK, {
            delay: t
        })
    },
    minValue: 0,
    maxValue: a.IjB,
    getInitialValue: function() {
        let {
            delay: t
        } = s.A.getModeOptions();
        return t
    },
    onValueRender: function(t) {
        return t >= 1e3 ? (t /= 1e3, "".concat(t.toFixed(2), "s")) : "".concat(t.toFixed(0), "\xa0ms")
    },
    usePredicate: u.P
})